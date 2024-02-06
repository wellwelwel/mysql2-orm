import {
  Pool,
  createPool,
  PoolOptions,
  RowDataPacket,
  ResultSetHeader,
  PoolConnection,
} from 'mysql2/promise';
import { INSERT, InsertOptions } from './queries/insert.js';
import { SELECT, SelectOptions } from './queries/select.js';
import { UPDATE, UpdateOptions } from './queries/update.js';
import { DELETE, DeleteOptions } from './queries/delete.js';
import { backtick } from './helpers/backtick.js';
import { Param } from './types/param.js';
import { OP as op } from './queries/where/methods.js';

type Getter<T, Method extends keyof T> = T extends {
  [K in Method]: infer R;
}
  ? R
  : never;

export class MySQL {
  private throw: boolean;
  private debug: boolean;
  private verbose: boolean;
  private credentials: PoolOptions;
  private connection: Pool;
  private PoolConnection: PoolConnection | null = null;

  constructor(credentials: PoolOptions) {
    this.throw = false;
    this.debug = false;
    this.verbose = false;
    this.credentials = credentials;
    this.connection = createPool(this.credentials);
  }

  private handleError(error: unknown): false {
    if (this.debug) {
      console.log(error);
    }

    return false;
  }

  private get currentConnection(): Pool | PoolConnection {
    return this.PoolConnection ? this.PoolConnection : this.connection;
  }

  enableDebug() {
    this.debug = true;
  }

  disableDebug() {
    this.debug = false;
  }

  enableThrow() {
    this.throw = true;
  }

  enableVerbose() {
    this.verbose = true;
  }

  disableThrow() {
    this.throw = false;
  }

  disableVerbose() {
    this.verbose = false;
  }

  connect(credentials?: PoolOptions) {
    try {
      if (this.connection) return true;

      if (credentials) this.credentials = credentials;

      this.connection = createPool(this.credentials);

      return true;
    } catch (error) {
      if (this.throw) throw error;
      return this.handleError(error);
    }
  }

  async insert<ValueObjectSchema>(
    options: InsertOptions<ValueObjectSchema>
  ): Promise<number | false> {
    try {
      const result = INSERT<ValueObjectSchema>(options);
      const { sql, params } = result;

      if (this.verbose) console.log(result);

      const [resultSetHeader] = await this.currentConnection.execute<
        ResultSetHeader | ResultSetHeader[]
      >(sql, params);

      return Array.isArray(resultSetHeader)
        ? resultSetHeader[0].insertId
        : resultSetHeader.insertId;
    } catch (error) {
      if (this.throw) throw error;
      return this.handleError(error);
    }
  }

  async select<T extends RowDataPacket[] | RowDataPacket[][] = RowDataPacket[]>(
    options: Omit<SelectOptions, 'limit'> & { limit: 1 }
  ): Promise<T[0] | false>;
  async select<T extends RowDataPacket[] | RowDataPacket[][] = RowDataPacket[]>(
    options: SelectOptions
  ): Promise<T | false>;
  async select<T extends RowDataPacket[] | RowDataPacket[][] = RowDataPacket[]>(
    options: SelectOptions
  ): Promise<T[0] | T | false> {
    try {
      const result = SELECT(options);
      const { sql, params } = result;

      if (this.verbose) console.log(result);

      const [rows] = await this.currentConnection.execute<T>({
        sql,
        values: params,
        typeCast: options?.typeCast,
        rowsAsArray: options?.rowsAsArray,
      });

      if (options?.limit === 1) return rows[0];
      return rows;
    } catch (error) {
      if (this.throw) throw error;
      return this.handleError(error);
    }
  }

  async update(options: UpdateOptions): Promise<number | false> {
    try {
      const result = UPDATE(options);
      const { sql, params } = result;

      if (this.verbose) console.log(result);

      const [resultSetHeader] = await this.currentConnection.execute<
        ResultSetHeader | ResultSetHeader[]
      >(sql, params);

      return Array.isArray(resultSetHeader)
        ? resultSetHeader[0].affectedRows
        : resultSetHeader.affectedRows;
    } catch (error) {
      if (this.throw) throw error;
      return this.handleError(error);
    }
  }

  async delete(options: DeleteOptions): Promise<number | false> {
    try {
      this.connect();

      const result = DELETE(options);
      const { sql, params } = result;

      if (this.verbose) console.log(result);

      const [resultSetHeader] = await this.currentConnection.execute<
        ResultSetHeader | ResultSetHeader[]
      >(sql, params);

      return Array.isArray(resultSetHeader)
        ? resultSetHeader[0].affectedRows
        : resultSetHeader.affectedRows;
    } catch (error) {
      if (this.throw) throw error;
      return this.handleError(error);
    }
  }

  async beginTransaction(): Promise<void> {
    if (this.PoolConnection) return;

    this.PoolConnection = await this.connection.getConnection();
    await this.PoolConnection.beginTransaction();
  }

  async rollback(): Promise<void> {
    if (!this.PoolConnection) return;

    await this.PoolConnection.rollback()
      .then(() => setImmediate(() => this.PoolConnection?.release()))
      .catch(() => setImmediate(() => this.PoolConnection?.release()))
      .finally(() => {
        this.PoolConnection = null;
      });
  }

  async commit(): Promise<void> {
    if (!this.PoolConnection) return;

    await this.PoolConnection.commit()
      .then(() => setImmediate(() => this.PoolConnection?.release()))
      .catch(() => setImmediate(() => this.PoolConnection?.release()))
      .finally(() => {
        this.PoolConnection = null;
      });
  }

  release(): void {
    if (!this.PoolConnection) return;

    this.PoolConnection.release();
    this.PoolConnection = null;
  }

  get query(): Getter<Pool, 'query'> {
    return this.currentConnection.query.bind(this.currentConnection);
  }

  get execute(): Getter<Pool, 'execute'> {
    return this.currentConnection.execute.bind(this.currentConnection);
  }

  get end(): Getter<Pool, 'end'> {
    return this.connection.end.bind(this.connection);
  }
}

export const QueryBuilder = {
  insert: INSERT,
  select: SELECT,
  update: UPDATE,
  delete: DELETE,
};

export const OP = op;

export const bt = backtick;

export { backtick };

export type {
  InsertOptions,
  SelectOptions,
  UpdateOptions,
  DeleteOptions,
  Param,
};
