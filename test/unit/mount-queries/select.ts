import assert from 'node:assert';
import { QueryBuilder } from '../../../src/index.js';

const select1 = QueryBuilder.select({
  table: 'test',
});

const select2 = QueryBuilder.select({
  table: 'test',
  columns: ['test'],
});

const select3 = QueryBuilder.select({
  table: 'test',
  columns: 'test',
});

const select4 = QueryBuilder.select({
  table: 'test',
  columns: ['foo', 'bar'],
});

const select5 = QueryBuilder.select({
  columns: ['name', 'age'],
  table: 'users',
  where: '`id` IN (?, ?)',
  params: [1, 2],
  limit: 2,
  orderBy: ['name', 'DESC'],
});

const select6 = QueryBuilder.select({
  columns: '`age`, COUNT(*) AS `total`',
  table: 'users',
  groupBy: 'age',
});

const select7 = QueryBuilder.select({
  columns: ['users.name', 'users.age'],
  table: 'preferences',
  join: {
    type: 'left',
    table: 'users',
    on: {
      a: 'preferences.userId',
      b: 'users.id',
    },
    outer: true,
  },
  where: '`preferences`.`mysql` = ?',
  params: [true],
  limit: 20,
  offset: 10,
  distinct: true,
  orderBy: ['users.name'],
});

process.on('exit', () => {
  // SELECT 1
  assert.deepStrictEqual(select1.sql, 'SELECT * FROM `test`');
  assert(select1.params.length === 0);

  // SELECT 3
  assert.deepStrictEqual(select2.sql, 'SELECT `test` FROM `test`');
  assert(select2.params.length === 0);

  // SELECT 2
  assert.deepStrictEqual(select3.sql, 'SELECT test FROM `test`');
  assert(select3.params.length === 0);

  // SELECT 4
  assert.deepStrictEqual(select4.sql, 'SELECT `foo`, `bar` FROM `test`');
  assert(select4.params.length === 0);

  // SELECT 5
  assert.deepStrictEqual(
    select5.sql,
    'SELECT `name`, `age` FROM `users` WHERE `id` IN (?, ?) ORDER BY `name` DESC LIMIT ?'
  );
  assert(select5.params.length === 3);
  assert.deepStrictEqual(select5.params[0], 1);
  assert.deepStrictEqual(select5.params[1], 2);
  assert.deepStrictEqual(select5.params[2], '2');

  // SELECT 6
  assert.deepStrictEqual(
    select6.sql,
    'SELECT `age`, COUNT(*) AS `total` FROM `users` GROUP BY `age`'
  );
  assert(select6.params.length === 0);

  // SELECT 7
  assert.deepStrictEqual(
    select7.sql,
    'SELECT DISTINCT `users`.`name`, `users`.`age` FROM `preferences` LEFT OUTER JOIN `users` ON `preferences`.`userId` = `users`.`id` WHERE `preferences`.`mysql` = ? ORDER BY `users`.`name` ASC LIMIT ? OFFSET ?'
  );
  assert(select7.params.length === 3);
  assert.deepStrictEqual(select7.params[0], true);
  assert.deepStrictEqual(select7.params[1], '20');
  assert.deepStrictEqual(select7.params[2], '10');
});
