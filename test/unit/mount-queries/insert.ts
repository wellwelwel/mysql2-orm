import assert from 'node:assert';
import { QueryBuilder } from '../../../src/index.js';

const insert1 = QueryBuilder.insert({
  table: 'test',
  values: {
    string: 'foo',
    number: 1,
  },
});

const insert2 = QueryBuilder.insert({
  table: 'test',
  values: [
    {
      string: 'foo',
      number: 1,
    },
    {
      string: 'bar',
      number: 2,
    },
  ],
});

QueryBuilder.insert({
  table: 'test',
  values: [
    {
      string: 'foo',
      number: 1,
    },
    {
      // @ts-expect-error The keys must be the same for the entire array
      strings: 'bar',
      number: 2,
    },
  ],
});

process.on('exit', () => {
  // INSERT 1
  assert.deepStrictEqual(
    insert1.sql,
    'INSERT INTO `test` (`string`, `number`) VALUES (?, ?)'
  );
  assert(insert1.params.length === 2);
  assert.deepStrictEqual(insert1.params[0], 'foo');
  assert.deepStrictEqual(insert1.params[1], 1);

  // INSERT 2
  assert.deepStrictEqual(
    insert2.sql,
    'INSERT INTO `test` (`string`, `number`) VALUES (?, ?), (?, ?)'
  );
  assert(insert2.params.length === 4);
  assert.deepStrictEqual(insert2.params[0], 'foo');
  assert.deepStrictEqual(insert2.params[1], 1);
  assert.deepStrictEqual(insert2.params[2], 'bar');
  assert.deepStrictEqual(insert2.params[3], 2);
});
