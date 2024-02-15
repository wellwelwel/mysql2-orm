import assert from 'node:assert';
import { QueryBuilder } from '../../../src/index.js';

const update1 = QueryBuilder.update({
  table: 'users',
  set: {
    name: 'John',
  },
});

const update2 = QueryBuilder.update({
  table: 'users',
  set: {
    name: 'John',
    age: 29,
  },
});

const update3 = QueryBuilder.update({
  table: 'users',
  set: {
    name: 'John',
    age: 30,
  },
  where: '`id` = ?',
  params: [2],
  limit: 1,
});

process.on('exit', () => {
  // UPDATE 1
  assert.deepStrictEqual(update1.sql, 'UPDATE `users` SET `name` = ?');
  assert(update1.params.length === 1);
  assert.deepStrictEqual(update1.params[0], 'John');

  // UPDATE 2
  assert.deepStrictEqual(
    update2.sql,
    'UPDATE `users` SET `name` = ?, `age` = ?'
  );
  assert(update2.params.length === 2);
  assert.deepStrictEqual(update2.params[0], 'John');
  assert.deepStrictEqual(update2.params[1], 29);

  // UPDATE 3
  assert.deepStrictEqual(
    update3.sql,
    'UPDATE `users` SET `name` = ?, `age` = ? WHERE `id` = ? LIMIT ?'
  );
  assert(update3.params.length === 4);
  assert.deepStrictEqual(update3.params[0], 'John');
  assert.deepStrictEqual(update3.params[1], 30);
  assert.deepStrictEqual(update3.params[2], 2);
  assert.deepStrictEqual(update3.params[3], '1');
});
