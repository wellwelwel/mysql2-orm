import { Param } from './param.js';

export type Condition = {
  condition: string;
  params: Param[];
};

export type ConditionOperator = 'AND' | 'OR' | 'XOR' | 'NOT';

type ConditionElement = Condition | ConditionOperator;
type DeepConditionArray = Array<NestedCondition>;

export type NestedCondition = ConditionElement | DeepConditionArray;

export const isCondition = (values: unknown): values is Condition => {
  if (!values || typeof values !== 'object') return false;
  if ('condition' in values && 'params' in values) return true;

  return false;
};
