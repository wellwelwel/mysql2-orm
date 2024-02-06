import { Result } from '../types/result.js';
import { backtick } from '../helpers/backtick.js';
import {
  where as WHERE,
  WhereORM,
  WhereString,
  isStringWhere,
} from './where/where.js';

export type DeleteOptions = {
  table: string;
  limit?: number;
} & (WhereORM | WhereString);

export const DELETE = (options: DeleteOptions): Result => {
  const defaults = { ...options };
  const params = isStringWhere(options) ? options?.params || [] : [];

  const table = backtick(defaults.table);

  const where = WHERE(defaults.where);
  Object.assign(params, [...params, ...where.params]);

  const limit = defaults.limit ? ' LIMIT ?' : '';

  if (defaults.limit) params.push(`${defaults.limit}`);

  const sql = `DELETE FROM ${table}${where.clause}${limit}`;

  return { sql, params };
};
