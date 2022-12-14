import mysql from 'mysql2/promise';

const defaultOptions = {
   select: {
      columns: '*' || [],
      table: '',
      where: null,
      limit: false,
      orderBy: [null, 'ASC'],
      params: [],
   },
   insert: {
      table: '',
      columns: [],
      values: [],
   },
   update: {
      table: '',
      set: [],
      where: null,
      limit: false,
      params: [],
   },
};

const forceValuesToArray = (parentArray) => {
   if (!Array.isArray(parentArray[0])) return [parentArray];
   return parentArray || [];
};

const setInsertValues = (parentArray) => {
   const items = forceValuesToArray(parentArray);
   const params = [];

   const setValues = items.map((item) => {
      const values = item.map((value) => {
         params.push(value);

         return '?';
      });

      return `(${values.join(', ')})`;
   });

   return {
      values: setValues,
      params,
   };
};

export default class MySQL {
   constructor(
      credentials = {
         host: '',
         port: 3306,
         user: '',
         password: '',
         database: '',
      }
   ) {
      this.connect = async () => {
         try {
            if (!this?.connection) this.connection = await mysql.createConnection(credentials);

            return true;
         } catch (error) {
            this.verbose && console.error(error);
            return false;
         }
      };

      this.select = async (options = { ...defaultOptions.select }) => {
         try {
            await this.connect();

            const defaults = { ...defaultOptions.select, ...options };
            const { table, params } = defaults;

            const columns =
               typeof defaults.columns === 'string'
                  ? defaults.columns
                  : defaults.columns.map((column) => `\`${column}\``).join(', ');
            const where = defaults.where ? ` WHERE ${defaults.where}` : '';
            const orderBy = defaults.orderBy[0]
               ? ` ORDER BY \`${defaults.orderBy[0]}\` ${defaults?.orderBy[1] || 'ASC'}`
               : '';
            const limit = defaults.limit ? ` LIMIT ${defaults.limit}` : '';

            const query = `SELECT ${columns} FROM \`${table}\`${where}${orderBy}${limit};`;
            const [rows] = await this.connection.execute(query, params);

            this.verbose && console.log(query, params);

            if (defaults.limit === 1) return rows[0] || false;
            return rows || false;
         } catch (error) {
            this.verbose && console.error(error);
            return false;
         }
      };

      this.insert = async (options = { ...defaultOptions.insert }) => {
         try {
            await this.connect();

            const defaults = { ...defaultOptions.insert, ...options };
            const { table } = defaults;

            const { values, params } = setInsertValues(defaults.values);

            const columns =
               defaults?.columns?.length > 0
                  ? ' (' + defaults.columns.map((column) => `\`${column}\``).join(', ') + ')'
                  : '';
            const query = `INSERT INTO \`${table}\`${columns} VALUES ${values.join(', ')};`;

            this.verbose && console.log(query, params);

            const [results] = await this.connection.execute(query, params);

            return results?.insertId || false;
         } catch (error) {
            this.verbose && console.error(error);
            return false;
         }
      };

      this.update = async (options = { ...defaultOptions.update }) => {
         try {
            await this.connect();

            const defaults = { ...defaultOptions.update, ...options };
            const { table } = defaults;

            const setParams = [];
            const set = forceValuesToArray(defaults.set)
               .map(([column, value]) => {
                  setParams.push(value);
                  return `\`${column}\` = ?`;
               })
               .join(', ');
            const where = defaults.where ? ` WHERE ${defaults.where}` : '';
            const limit = defaults.limit ? ` LIMIT ${defaults.limit}` : '';
            const params = [...setParams, ...defaults.params];

            const query = `UPDATE \`${table}\` SET ${set}${where}${limit};`;
            const [results] = await this.connection.execute(query, params);

            this.verbose && console.log(query, params);

            return results?.affectedRows || false;
         } catch (error) {
            this.verbose && console.error(error);
            return false;
         }
      };

      this.execute = async (query, params = null) => {
         try {
            await this.connect();

            return (await this.connection.execute(query, params)) || false;
         } catch (error) {
            this.verbose && console.error(error);
            return false;
         }
      };

      this.end = async () => {
         try {
            await this.connection.end();
            return true;
         } catch (error) {
            this.verbose && console.error(error);
            return false;
         }
      };

      this.verbose = false;
   }
}
