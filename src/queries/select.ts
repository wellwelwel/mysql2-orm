import { Param } from '../types/param.js';
import { Result } from '../types/result.js';
import { forceArray } from '../helpers/force-array.js';
import { backtick as bt } from '../helpers/backtick.js';
import { where as WHERE, isStringWhere } from './where/where.js';
import { NestedCondition } from '../types/conditions.js';
import { QueryOptions } from 'mysql2/promise.js';

export type JoinOptions = {
  type: 'left' | 'right' | 'inner' | 'cross';
  table: string;
  on: {
    a: string;
    b: string;
  };
  outer?: boolean;
};

export type SelectOptions = {
  distinct?: boolean;
  columns?: string | string[];
  table: string;
  join?: JoinOptions | JoinOptions[];
  where?: string | NestedCondition;
  limit?: number;
  offset?: number;
  groupBy?: string;
  orderBy?: [string] | [string, 'ASC' | 'DESC'];
  params?: Param[];
  typeCast?: QueryOptions['typeCast'];
  rowsAsArray?: QueryOptions['rowsAsArray'];
};

export const SELECT = (options: SelectOptions): Result => {
  const defaults = {
    ...options,
    columns: options?.columns || '*',
    orderBy: options?.orderBy || [null, 'ASC'],
  };
  const params = isStringWhere(options) ? options?.params || [] : [];

  const distinct = defaults.distinct ? 'DISTINCT ' : '';

  const columns =
    typeof defaults.columns === 'string'
      ? defaults.columns
      : defaults.columns.map((column) => bt(column)).join(', ');

  const table = bt(defaults.table);

  const join = forceArray(defaults.join)
    .map((currentJoin) =>
      currentJoin?.on?.a && currentJoin?.on?.b
        ? ` ${currentJoin.type.toUpperCase()}${currentJoin?.outer ? ' OUTER' : ''} JOIN ${bt(
            currentJoin.table
          )} ON ${bt(currentJoin.on.a)} = ${bt(currentJoin.on.b)}`
        : ''
    )
    .join('');

  const where = WHERE(defaults.where);
  if (where.params.length > 0)
    Object.assign(params, [...params, ...where.params]);

  const groupBy = defaults.groupBy ? ` GROUP BY ${bt(defaults.groupBy)}` : '';

  const orderBy = defaults.orderBy[0]
    ? ` ORDER BY ${bt(defaults.orderBy[0])} ${defaults?.orderBy[1] || 'ASC'}`
    : '';

  const limit = defaults.limit ? ' LIMIT ?' : '';

  if (defaults.limit) params.push(`${defaults.limit}`);

  const offset = defaults?.offset
    ? defaults.offset > 0
      ? ` OFFSET ?`
      : ''
    : '';

  if (defaults.offset) params.push(`${defaults.offset}`);

  const sql = `SELECT ${distinct}${columns} FROM ${table}${join}${where.clause}${groupBy}${orderBy}${limit}${offset}`;

  return { sql, params };
};
