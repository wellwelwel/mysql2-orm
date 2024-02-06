import { Param } from '../types/param.js';
import { Result } from '../types/result.js';
import { Placeholder } from '../types/placeholder.js';
import { forceArray } from '../helpers/force-array.js';
import { backtick } from '../helpers/backtick.js';

type UnionKeys<T extends unknown[]> = T extends (infer U)[] ? keyof U : never;

type ValuesWithStrictKeys<T extends unknown[]> = {
  [K in UnionKeys<T>]: Param;
}[];

type Values = {
  [name: string]: Param;
};

type InsertSet = {
  columns: Set<string>;
  values: string[];
  params: Param[];
};

export type InsertOptions<T = unknown> = {
  table: string;
  values: Values | ValuesWithStrictKeys<T[]>;
};

export const INSERT = <ValueObjectSchema>(
  options: InsertOptions<ValueObjectSchema>
): Result => {
  const set: InsertSet = {
    columns: new Set(),
    values: [],
    params: [],
  };

  forceArray(options.values).forEach((insertion) => {
    const bindValues: Placeholder[] = [];

    for (const column in insertion) {
      set.columns.add(backtick(column));
      bindValues.push('?');
      set.params.push(insertion[column]);
    }

    set.values.push(`(${bindValues.join(', ')})`);
  });

  const table = backtick(options.table);
  const columns = Array.from(set.columns).join(', ');
  const values = set.values.join(', ');

  const sql = `INSERT INTO ${table} (${columns}) VALUES ${values}`;

  return { sql, params: set.params };
};
