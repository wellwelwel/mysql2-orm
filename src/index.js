import mysql from 'mysql2/promise';
import forceArray from '../helpers/force-array.js';

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

            const set = {
               columns: [],
               values: [],
               params: [],
            };

            forceArray(defaults.values).forEach((insertion) => {
               const totalColumns = Object?.keys(insertion)?.length;
               const bindValues = Array(totalColumns).fill('?');

               set.values.push(`(${bindValues.join(', ')})`);

               for (const column in insertion) {
                  !set.columns.includes(`\`${column}\``) && set.columns.push(`\`${column}\``);
                  set.params.push(insertion[column]);
               }
            });

            const columns = set.columns.join(', ');
            const values = set.values.join(', ');
            const { params } = set;

            const query = `INSERT INTO \`${table}\` (${columns}) VALUES ${values};`;

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

            const set = {
               columns: [],
               params: [],
            };

            for (const column in defaults.set) {
               set.columns.push(`\`${column}\` = ?`);
               set.params.push(defaults.set[column]);
            }

            const where = defaults.where ? ` WHERE ${defaults.where}` : '';
            const limit = defaults.limit ? ` LIMIT ${defaults.limit}` : '';
            const params = [...set.params, ...defaults.params];

            const query = `UPDATE \`${table}\` SET ${set.columns.join(', ')}${where}${limit};`;
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
