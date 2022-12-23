import { Pool, createPool } from 'mysql2/promise';
import forceArray from './helpers/force-array';
import backtick from './helpers/set-backtick';
import {
   Credentials,
   SelectOptions,
   InsertOptions,
   UpdateOptions,
   InsertSet,
   UpdateSet,
   SetValues,
   QueryResults,
} from './types';
import { defaultOptions } from './options';

export const MySQL = class MySQL {
   public verbose: boolean;
   public credentials: Credentials;
   public connection: Pool;

   constructor(credentials: Credentials) {
      this.verbose = false;
      this.credentials = credentials;
      this.connection = createPool(this.credentials);
   }

   connect() {
      try {
         if (!this?.connection) this.connection = createPool(this.credentials);

         return true;
      } catch (error) {
         this.verbose && console.error(error);
         return false;
      }
   }

   async select(options: SelectOptions): Promise<QueryResults> {
      try {
         this.connect();

         const defaults = { ...defaultOptions.select, ...options };
         const { params } = defaults;

         const distinct = defaults.distinct ? 'DISTINCT ' : '';

         const columns =
            typeof defaults.columns === 'string'
               ? defaults.columns
               : defaults.columns.map((column) => backtick(column)).join(', ');

         const table = backtick(defaults.table);

         const join = forceArray(defaults.join)
            .map((currentJoin) =>
               currentJoin?.on?.a && currentJoin?.on?.b
                  ? ` ${currentJoin.type.toUpperCase()}${currentJoin?.outer ? ' OUTER' : ''} JOIN ${backtick(
                       currentJoin.table
                    )} ON ${backtick(currentJoin.on.a)} = ${backtick(currentJoin.on.b)}`
                  : ''
            )
            .join('');

         const where = defaults.where ? ` WHERE ${defaults.where}` : '';

         const groupBy = defaults.groupBy ? ` GROUP BY ${backtick(defaults.groupBy)}` : '';

         const orderBy = defaults.orderBy[0]
            ? ` ORDER BY ${backtick(defaults.orderBy[0])} ${defaults?.orderBy[1] || 'ASC'}`
            : '';

         const limit = defaults.limit ? ` LIMIT ${defaults.limit}` : '';
         const offset = defaults?.offset ? (defaults.offset > 0 ? ` OFFSET ${defaults.offset}` : '') : '';

         const query = `SELECT ${distinct}${columns} FROM ${table}${join}${where}${groupBy}${orderBy}${limit}${offset}${
            !defaults.mountOnly ? ';' : ''
         }`;

         if (defaults.mountOnly)
            return {
               query,
               params,
            };

         this.verbose && console.log(query, params);

         const [rows] = await this.connection.execute(query, params);

         if (defaults.limit === 1) return rows[0 as keyof typeof rows] || false;

         return rows || false;
      } catch (error) {
         this.verbose && console.error(error);
         return false;
      }
   }

   async insert(options: InsertOptions): Promise<QueryResults> {
      try {
         this.connect();

         const defaults = { ...defaultOptions.insert, ...options };
         const set: InsertSet = {
            columns: [],
            values: [],
            params: [],
         };

         forceArray(defaults.values).forEach((insertion: SetValues) => {
            console.log(insertion);
            const totalColumns = Object?.keys(insertion)?.length;
            const bindValues: '?'[] = Array(totalColumns).fill('?');

            set.values.push(`(${bindValues.join(', ')})`);

            for (const column in insertion) {
               !set.columns.includes(backtick(column)) && set.columns.push(backtick(column));
               set.params.push(insertion[column]);
            }
         });

         const table = backtick(defaults.table);
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
         return results?.['insertId' as keyof typeof results] || false;
      } catch (error) {
         this.verbose && console.error(error);
         return false;
      }
   }

   async update(options: UpdateOptions) {
      try {
         this.connect();

         const defaults = { ...defaultOptions.update, ...options };
         const set: UpdateSet = {
            columns: [],
            params: [],
         };

         for (const column in defaults.set) {
            set.columns.push(`${backtick(column)} = ?`);
            set.params.push(defaults.set[column]);
         }

         const table = backtick(defaults.table);
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
         const result: QueryResults = results?.['affectedRows' as keyof typeof results] || false;

         return result;
      } catch (error) {
         this.verbose && console.error(error);
         return false;
      }
   }

   async getConnection() {
      try {
         this.connect();

         return this.connection.getConnection() || false;
      } catch (error) {
         this.verbose && console.error(error);

         return false;
      }
   }

   async end() {
      try {
         await this.connection.end();

         return true;
      } catch (error) {
         this.verbose && console.error(error);

         return false;
      }
   }

   setBacktick(tableOrColumn: string) {
      return backtick(tableOrColumn);
   }
};
