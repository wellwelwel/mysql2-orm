export declare const defaultOptions: {
    select: {
        distinct: boolean;
        columns: string;
        table: string;
        join: {
            type: null;
            on: {
                a: null;
                b: null;
            };
            outer: boolean;
        };
        where: null;
        limit: null;
        offset: null;
        groupBy: null;
        orderBy: (string | null)[];
        params: never[];
        mountOnly: boolean;
    };
    insert: {
        table: string;
        values: never[];
        mountOnly: boolean;
    };
    update: {
        table: string;
        set: never[];
        where: null;
        limit: null;
        params: never[];
        mountOnly: boolean;
    };
};
