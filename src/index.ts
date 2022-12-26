import { Pool, createPool } from 'mysql2/promise';
import forceArray from './helpers/force-array.js';
import setBacktick from './helpers/set-backtick.js';
import {
   Credentials,
   SelectOptions,
   InsertOptions,
   UpdateOptions,
   InsertSet,
   UpdateSet,
   SetValues,
   Row,
   MountOnly,
   SelectQuery,
   SelectFirstRow,
   SelectDefaultQuery,
   InsertQuery,
   InsertFirstRowId,
   InsertRowId,
   UpdateQuery,
   UpdateAffectedRows,
} from './types.js';
import { defaultOptions } from './options.js';

const MySQL = class {
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

   async select(options: SelectQuery): Promise<MountOnly>;
   async select(options: SelectFirstRow): Promise<Row | false>;
   async select(options: SelectDefaultQuery): Promise<Row[] | false>;
   async select(options: SelectOptions): Promise<Row[] | Row | MountOnly | false> {
      try {
         this.connect();

         const defaults = { ...defaultOptions.select, ...options };
         const { params } = defaults;

         const distinct = defaults.distinct ? 'DISTINCT ' : '';

         const columns =
            typeof defaults.columns === 'string'
               ? defaults.columns
               : defaults.columns.map((column) => setBacktick(column)).join(', ');

         const table = setBacktick(defaults.table);

         const join = forceArray(defaults.join)
            .map((currentJoin) =>
               currentJoin?.on?.a && currentJoin?.on?.b
                  ? ` ${currentJoin.type.toUpperCase()}${currentJoin?.outer ? ' OUTER' : ''} JOIN ${setBacktick(
                       currentJoin.table
                    )} ON ${setBacktick(currentJoin.on.a)} = ${setBacktick(currentJoin.on.b)}`
                  : ''
            )
            .join('');

         const where = defaults.where ? ` WHERE ${defaults.where}` : '';

         const groupBy = defaults.groupBy ? ` GROUP BY ${setBacktick(defaults.groupBy)}` : '';

         const orderBy = defaults.orderBy[0]
            ? ` ORDER BY ${setBacktick(defaults.orderBy[0])} ${defaults?.orderBy[1] || 'ASC'}`
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

         return (rows as Row[]) || false;
      } catch (error) {
         this.verbose && console.error(error);
         return false;
      }
   }

   async insert(options: InsertQuery): Promise<MountOnly>;
   async insert(options: InsertRowId): Promise<number | false>;
   async insert(options: InsertFirstRowId): Promise<number | false>;
   async insert(options: InsertOptions): Promise<number | false | MountOnly> {
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

         return results?.['insertId' as keyof typeof results] || false;
      } catch (error) {
         this.verbose && console.error(error);
         return false;
      }
   }

   async update(options: UpdateQuery): Promise<MountOnly>;
   async update(options: UpdateAffectedRows): Promise<number | false>;
   async update(options: UpdateOptions): Promise<number | false | MountOnly> {
      try {
         this.connect();

         const defaults = { ...defaultOptions.update, ...options };
         const set: UpdateSet = {
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

         return results?.['affectedRows' as keyof typeof results] || false;
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
};

export { MySQL, setBacktick };
