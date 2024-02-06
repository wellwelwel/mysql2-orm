import { NestedCondition, isCondition } from '../../types/conditions.js';
import { Param } from '../../types/param.js';

type Result = {
  clause: string;
  params: Param[];
};

export type WhereORM = {
  where?: NestedCondition;
};

export type WhereString = {
  where?: string;
  params?: Param[];
};

export function isStringWhere(options: unknown): options is WhereString {
  if (
    options &&
    typeof options === 'object' &&
    'params' in options &&
    'where' in options &&
    typeof options.where === 'string'
  )
    return true;

  return false;
}

export const where = (values?: string | NestedCondition): Result => {
  const result: Result = {
    clause: '',
    params: [],
  };

  if (!values) return result;

  if (typeof values === 'string')
    return {
      clause: ` WHERE ${values}`,
      params: [],
    };

  result.clause += ` WHERE`;

  if (isCondition(values)) {
    result.clause += `${values.condition}`;

    if (values.params.length > 0) {
      Object.assign(result.params, [...result.params, ...values.params]);
    }
  }

  const mountCondition = (conditions: typeof values, space = false) => {
    if (!Array.isArray(conditions)) return;

    if (space) result.clause += ' ';

    conditions.forEach((condition) => {
      if (Array.isArray(condition)) {
        result.clause += `(`;
        mountCondition(condition);
        result.clause += `)`;
        return;
      }

      if (typeof condition === 'string') {
        result.clause += ` ${condition} `;
        return;
      }

      if (isCondition(condition)) {
        result.clause += `${condition.condition}`;
        if (condition.params.length > 0) {
          Object.assign(result.params, [...result.params, ...condition.params]);
        }
        return;
      }
    });
  };

  mountCondition(values, true);

  return result;
};
