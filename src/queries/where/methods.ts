import { Param } from '../../types/param.js';
import { backtick } from '../../helpers/backtick.js';
import { Condition } from '../../types/conditions.js';

const is = (column: string, param: Param): Condition => {
  const condition = `${backtick(column)} = ?`;

  return {
    condition,
    params: [param],
  };
};

const isNot = (column: string, param: Param): Condition => {
  const condition = `${backtick(column)} != ?`;

  return {
    condition,
    params: [param],
  };
};

const isHigher = (column: string, param: Param): Condition => {
  const condition = `${backtick(column)} > ?`;

  return {
    condition,
    params: [param],
  };
};

const isLower = (column: string, param: Param): Condition => {
  const condition = `${backtick(column)} < ?`;

  return {
    condition,
    params: [param],
  };
};

const isHigherOrEqual = (column: string, param: Param): Condition => {
  const condition = `${backtick(column)} >= ?`;

  return {
    condition,
    params: [param],
  };
};

const isLowerOrEqual = (column: string, param: Param): Condition => {
  const condition = `${backtick(column)} <= ?`;

  return {
    condition,
    params: [param],
  };
};

const like = (column: string, param: Param): Condition => {
  const condition = `${backtick(column)} LIKE ?`;

  return {
    condition,
    params: [param],
  };
};

const notLike = (column: string, param: Param): Condition => {
  const condition = `${backtick(column)} NOT LIKE ?`;

  return {
    condition,
    params: [param],
  };
};

// Sobrecargas de função
function In(column: string, params: Param[]): Condition;
function In(column: string, subquery: string, params: Param[]): Condition;
function In(
  column: string,
  firstArg: Param[] | string,
  secondArg?: Param[]
): Condition {
  if (Array.isArray(firstArg))
    return {
      condition: `${backtick(column)} IN (${firstArg.map(() => '?').join(', ')})`,
      params: firstArg,
    };

  return {
    condition: `${backtick(column)} IN (${firstArg})`,
    params: secondArg || [],
  };
}

const notIn = (column: string, params: Param[]): Condition => {
  const condition = `${backtick(column)} NOT IN (${params.map(() => '?').join(', ')})`;

  return {
    condition,
    params,
  };
};

const between = (column: string, params: [Param, Param]): Condition => {
  const condition = `${backtick(column)} BETWEEN ? AND ?`;

  return {
    condition,
    params,
  };
};

const isNull = (column: string): Condition => {
  const condition = `${backtick(column)} IS NULL`;

  return {
    condition,
    params: [],
  };
};

const isNotNull = (column: string): Condition => {
  const condition = `${backtick(column)} IS NOT NULL`;

  return {
    condition,
    params: [],
  };
};

export const OP = {
  is,
  isHigher,
  isLower,
  isHigherOrEqual,
  isLowerOrEqual,
  isNot,
  like,
  notLike,
  in: In,
  notIn,
  between,
  isNull,
  isNotNull,
};
