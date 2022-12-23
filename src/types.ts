import { OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

export type Params = string | number | boolean | null;

export type SetValues = { [column: string]: Params };

export type JoinOptions = {
   type: 'left' | 'right' | 'inner' | 'cross';
   on: {
      a: string;
      b: string;
   };
   outer?: boolean;
};

export type QueryResults =
   | RowDataPacket
   | RowDataPacket[]
   | RowDataPacket[][]
   | OkPacket
   | OkPacket[]
   | ResultSetHeader
   | false
   | {
        query: string;
        params: Params[];
     };

export interface Credentials {
   host: string;
   port?: number;
   user: string;
   password: string;
   database: string;
}

export interface InsertSet {
   columns: string[];
   values: string[];
   params: Params[];
}

export interface UpdateSet {
   columns: string[];
   params: Params[];
}

export interface SelectOptions {
   distinct?: boolean;
   columns?: string | string[];
   table: string;
   join?: JoinOptions | JoinOptions[];
   where?: string;
   limit?: number;
   offset?: number;
   groupBy?: string;
   orderBy?: [string, 'ASC' | 'DESC' | undefined];
   params?: Params[];
   mountOnly?: boolean;
}

export interface InsertOptions {
   table: string;
   columns: string[];
   values: SetValues | SetValues[];
   mountOnly?: boolean;
}

export interface UpdateOptions {
   table: string;
   set: SetValues;
   where?: string;
   limit?: number;
   params?: Params[];
   mountOnly?: boolean;
}
