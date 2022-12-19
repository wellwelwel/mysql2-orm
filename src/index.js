import mysql from 'mysql2/promise';
import forceArray from '../helpers/force-array.js';
import setBacktick from '../helpers/set-backtick.js';

const defaultOptions = {
   select: {
      distinct: false,
      columns: '*' || [],
      table: '',
      where: null,
      limit: null,
      offset: null,
      groupBy: null,
      orderBy: [null, 'ASC'],
      params: [],
      mountOnly: false,
   },
   insert: {
      table: '',
      columns: [],
      values: [],
      mountOnly: false,
   },
   update: {
      table: '',
      set: [],
      where: null,
      limit: null,
      params: [],
      mountOnly: false,
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
            const { params } = defaults;

            const distinct = defaults.distinct ? 'DISTINCT ' : '';
            const columns =
               typeof defaults.columns === 'string'
                  ? defaults.columns
                  : defaults.columns.map((column) => setBacktick(column)).join(', ');
            const table = setBacktick(defaults.table);
            const where = defaults.where ? ` WHERE ${defaults.where}` : '';
            const groupBy = defaults.groupBy ? ` GROUP BY ${setBacktick(defaults.groupBy)}` : '';
            const orderBy = defaults.orderBy[0]
               ? ` ORDER BY ${setBacktick(defaults.orderBy[0])} ${defaults?.orderBy[1] || 'ASC'}`
               : '';
            const limit = defaults.limit ? ` LIMIT ${defaults.limit}` : '';
            const offset = defaults.offset > 0 ? ` OFFSET ${defaults.offset}` : '';

            const query = `SELECT ${distinct}${columns} FROM ${table}${where}${groupBy}${orderBy}${limit}${offset}${
               !defaults.mountOnly ? ';' : ''
            }`;

            if (defaults.mountOnly)
               return {
                  query,
                  params,
               };

            this.verbose && console.log(query, params);

            const [rows] = await this.connection.execute(query, params);

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
                  !set.columns.includes(setBacktick(column)) && set.columns.push(setBacktick(column));
                  set.params.push(insertion[column]);
               }
            });

            const table = setBacktick(defaults.table);
            const columns = set.columns.join(', ');
            const values = set.values.join(', ');
            const { params } = set;

            const query = `INSERT INTO ${table} (${columns}) VALUES ${values};`;

            if (defaults.mountOnly)
               return {
                  query,
                  params,
               };

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
            const set = {
               columns: [],
               params: [],
            };

            for (const column in defaults.set) {
               set.columns.push(`${setBacktick(column)} = ?`);
               set.params.push(defaults.set[column]);
            }

            const table = setBacktick(defaults.table);
            const where = defaults.where ? ` WHERE ${defaults.where}` : '';
            const limit = defaults.limit ? ` LIMIT ${defaults.limit}` : '';
            const params = [...set.params, ...defaults.params];

            const query = `UPDATE ${table} SET ${set.columns.join(', ')}${where}${limit};`;

            if (defaults.mountOnly)
               return {
                  query,
                  params,
               };

            this.verbose && console.log(query, params);

            const [results] = await this.connection.execute(query, params);

            return results?.affectedRows || false;
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

      this.getConnection = async () => {
         try {
            await this.connect();

            return this.connection || false;
         } catch (error) {
            this.verbose && console.error(error);
            return false;
         }
      };

      this.setBacktick = (tableOrColumn) => setBacktick(tableOrColumn);

      this.verbose = false;
   }
}
