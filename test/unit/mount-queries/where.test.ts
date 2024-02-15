import assert from 'node:assert';
import { QueryBuilder, OP } from '../../../src/index.js';

const select1 = QueryBuilder.select({
  columns: ['name', 'age'],
  table: 'users',
  where: [OP.in('id', [1, 2])],
  limit: 2,
  orderBy: ['name', 'DESC'],
});

const select2 = QueryBuilder.select({
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
  where: [OP.eq('preferences.mysql', true)],
  limit: 20,
  offset: 10,
  distinct: true,
  orderBy: ['users.name'],
});

const select3 = QueryBuilder.select({
  table: 'users',
  where: [
    [OP.eq('name', 'John'), 'AND', OP.lt('age', 18)],
    'OR',
    [OP.eq('name', 'Mary'), 'AND', OP.gt('age', 20)],
  ],
});

const subquery = QueryBuilder.select({
  columns: ['id'],
  table: 'users',
  where: [OP.in('status', [1])],
});

const select4 = QueryBuilder.select({
  columns: ['description'],
  table: 'usersPreferencies',
  where: [
    OP.isNotNull('description'),
    'AND',
    OP.in('userId', subquery.sql, subquery.params),
  ],
  limit: 10,
});

const select5 = QueryBuilder.select({
  columns: ['name', 'age'],
  table: 'users',
  where: [OP.in('id', [1, 2])],
  limit: 2,
  orderBy: ['name', 'DESC'],
  // Expected to be ignored
  params: [999999999],
});

const select6 = QueryBuilder.select({
  table: 'users',
  where: OP.eq('id', 16),
});

process.on('exit', () => {
  // SELECT 1
  assert.deepStrictEqual(
    select1.sql,
    'SELECT `name`, `age` FROM `users` WHERE `id` IN (?, ?) ORDER BY `name` DESC LIMIT ?'
  );
  assert(select1.params.length === 3);
  assert.deepStrictEqual(select1.params[0], 1);
  assert.deepStrictEqual(select1.params[1], 2);
  assert.deepStrictEqual(select1.params[2], '2');

  // SELECT 2
  assert.deepStrictEqual(
    select2.sql,
    'SELECT DISTINCT `users`.`name`, `users`.`age` FROM `preferences` LEFT OUTER JOIN `users` ON `preferences`.`userId` = `users`.`id` WHERE `preferences`.`mysql` = ? ORDER BY `users`.`name` ASC LIMIT ? OFFSET ?'
  );
  assert(select2.params.length === 3);
  assert.deepStrictEqual(select2.params[0], true);
  assert.deepStrictEqual(select2.params[1], '20');
  assert.deepStrictEqual(select2.params[2], '10');

  // SELECT 3
  assert.deepStrictEqual(
    select3.sql,
    'SELECT * FROM `users` WHERE (`name` = ? AND `age` < ?) OR (`name` = ? AND `age` > ?)'
  );
  assert(select3.params.length === 4);
  assert.deepStrictEqual(select3.params[0], 'John');
  assert.deepStrictEqual(select3.params[1], 18);
  assert.deepStrictEqual(select3.params[2], 'Mary');
  assert.deepStrictEqual(select3.params[3], 20);

  // SELECT 4
  assert.deepStrictEqual(
    select4.sql,
    'SELECT `description` FROM `usersPreferencies` WHERE `description` IS NOT NULL AND `userId` IN (SELECT `id` FROM `users` WHERE `status` IN (?)) LIMIT ?'
  );
  assert(select4.params.length === 2);
  assert.deepStrictEqual(select4.params[0], 1);
  assert.deepStrictEqual(select4.params[1], '10');

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
  assert.deepStrictEqual(select6.sql, 'SELECT * FROM `users` WHERE`id` = ?');
  assert(select6.params.length === 1);
  assert.deepStrictEqual(select6.params[0], 16);
});
