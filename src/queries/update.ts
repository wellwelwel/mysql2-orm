import { Param } from '../types/param.js';
import { Result } from '../types/result.js';
import { backtick } from '../helpers/backtick.js';
import { where as WHERE, isStringWhere } from './where/where.js';
import { NestedCondition } from '../types/conditions.js';

type SetValues = {
  [name: string]: Param;
};

type UpdateSet = {
  columns: string[];
  params: Param[];
};

export type UpdateOptions = {
  table: string;
  set: SetValues;
  where?: string | NestedCondition;
  limit?: number;
  params?: Param[];
};

export const UPDATE = (options: UpdateOptions): Result => {
  const defaults = { ...options };
  const set: UpdateSet = {
    columns: [],
    params: [],
  };
  const defaultParams = isStringWhere(options) ? options?.params || [] : [];

  for (const column in defaults.set) {
    set.columns.push(`${backtick(column)} = ?`);
    set.params.push(defaults.set[column]);
  }

  const table = backtick(defaults.table);

  const where = WHERE(defaults.where);
  if (where.params.length > 0)
    Object.assign(set.params, [...set.params, ...where.params]);

  const limit = defaults.limit ? ' LIMIT ?' : '';
  const params = [...set.params, ...defaultParams];

  if (defaults.limit) params.push(`${defaults.limit}`);

  const sql = `UPDATE ${table} SET ${set.columns.join(', ')}${where.clause}${limit}`;

  return { sql, params };
};
