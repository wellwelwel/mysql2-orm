import { Pool } from 'mysql2/promise';
import setBacktick from './helpers/set-backtick';
import { Credentials, Row, MountOnly, SelectQuery, SelectFirstRow, SelectDefaultQuery, InsertQuery, InsertFirstRowId, InsertRowId, UpdateQuery, UpdateAffectedRows } from './types';
declare const MySQL: {
    new (credentials: Credentials): {
        verbose: boolean;
        credentials: Credentials;
        connection: Pool;
        connect(): boolean;
        select(options: SelectQuery): Promise<MountOnly>;
        select(options: SelectFirstRow): Promise<Row | false>;
        select(options: SelectDefaultQuery): Promise<Row[] | false>;
        insert(options: InsertQuery): Promise<MountOnly>;
        insert(options: InsertRowId): Promise<number | false>;
        insert(options: InsertFirstRowId): Promise<number | false>;
        update(options: UpdateQuery): Promise<MountOnly>;
        update(options: UpdateAffectedRows): Promise<number | false>;
        getConnection(): Promise<false | import("mysql2/promise").PoolConnection>;
        end(): Promise<boolean>;
    };
};
export { MySQL, setBacktick };
