import { Param } from '../../types/param.js';
import { backtick } from '../../helpers/backtick.js';
import { Condition } from '../../types/conditions.js';

const equal = (column: string, param: Param): Condition => {
  const condition = `${backtick(column)} = ?`;

  return {
    condition,
    params: [param],
  };
};

const notEqual = (column: string, param: Param): Condition => {
  const condition = `${backtick(column)} != ?`;

  return {
    condition,
    params: [param],
  };
};

const greaterThan = (column: string, param: Param): Condition => {
  const condition = `${backtick(column)} > ?`;

  return {
    condition,
    params: [param],
  };
};

const lessThan = (column: string, param: Param): Condition => {
  const condition = `${backtick(column)} < ?`;

  return {
    condition,
    params: [param],
  };
};

const greaterThanOrEqual = (column: string, param: Param): Condition => {
  const condition = `${backtick(column)} >= ?`;

  return {
    condition,
    params: [param],
  };
};

const lessThanOrEqual = (column: string, param: Param): Condition => {
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

function notIn(column: string, params: Param[]): Condition;
function notIn(column: string, subquery: string, params: Param[]): Condition;
function notIn(
  column: string,
  firstArg: Param[] | string,
  secondArg?: Param[]
): Condition {
  if (Array.isArray(firstArg))
    return {
      condition: `${backtick(column)} NOT IN (${firstArg.map(() => '?').join(', ')})`,
      params: firstArg,
    };

  return {
    condition: `${backtick(column)} NOT IN (${firstArg})`,
    params: secondArg || [],
  };
}

const between = (column: string, params: [Param, Param]): Condition => {
  const condition = `${backtick(column)} BETWEEN ? AND ?`;

  return {
    condition,
    params,
  };
};

const notBetween = (column: string, params: [Param, Param]): Condition => {
  const condition = `${backtick(column)} NOT BETWEEN ? AND ?`;

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
  equal,
  eq: equal,
  notEqual,
  ne: notEqual,
  greaterThan,
  gt: greaterThan,
  lessThan,
  lt: lessThan,
  greaterThanOrEqual,
  gte: greaterThanOrEqual,
  lessThanOrEqual,
  lte: lessThanOrEqual,
  like,
  notLike,
  in: In,
  notIn,
  between,
  notBetween,
  isNull,
  isNotNull,
};
