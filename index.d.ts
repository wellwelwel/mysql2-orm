import { Pool } from 'mysql2/promise';
import setBacktick from './helpers/set-backtick';
import { Credentials, SelectOptions, InsertOptions, UpdateOptions, QueryResults } from './types';
declare const MySQL: {
    new (credentials: Credentials): {
        verbose: boolean;
        credentials: Credentials;
        connection: Pool;
        connect(): boolean;
        select(options: SelectOptions): Promise<QueryResults>;
        insert(options: InsertOptions): Promise<QueryResults>;
        update(options: UpdateOptions): Promise<false | {
            query: string;
            params: import("./types").Params[];
        }>;
        getConnection(): Promise<false | import("mysql2/promise").PoolConnection>;
        end(): Promise<boolean>;
    };
};
export { MySQL, setBacktick };
