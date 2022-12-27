export type Params = string | number | boolean | Date | null | Blob;
export type SetValues = {
    [column: string]: Params;
};
export type JoinOptions = {
    type: 'left' | 'right' | 'inner' | 'cross';
    table: string;
    on: {
        a: string;
        b: string;
    };
    outer?: boolean;
};
export type MountOnly = {
    query: string;
    params: Params[];
};
export type Row = {
    [name: string]: Params;
};
export interface SelectQuery extends SelectOptions {
    mountOnly: true;
}
export interface SelectFirstRow extends SelectOptions {
    limit: 1;
}
export interface SelectDefaultQuery extends SelectOptions {
    limit?: number;
    mountOnly?: false;
}
export interface InsertQuery extends InsertOptions {
    mountOnly: true;
}
export interface InsertRowId extends InsertOptions {
    values: Row;
}
export interface InsertFirstRowId extends InsertOptions {
    values: Row[];
}
export interface UpdateQuery extends UpdateOptions {
    mountOnly: true;
}
export interface UpdateAffectedRows extends UpdateOptions {
    set: Row;
}
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
