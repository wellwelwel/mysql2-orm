import assert from 'node:assert';
import { QueryBuilder } from '../../../src/index.js';

const delete1 = QueryBuilder.delete({
  table: 'test',
  where: '`name` = ?',
  params: ['John'],
  limit: 1,
});

const delete2 = QueryBuilder.delete({
  table: 'temp',
});

process.on('exit', () => {
  // DELETE 1
  assert.deepStrictEqual(
    delete1.sql,
    'DELETE FROM `test` WHERE `name` = ? LIMIT ?'
  );
  assert(delete1.params.length === 2);
  assert.deepStrictEqual(delete1.params[0], 'John');
  assert.deepStrictEqual(delete1.params[1], '1');

  // DELETE 2
  assert.deepStrictEqual(delete2.sql, 'DELETE FROM `temp`');
  assert(delete2.params.length === 0);
});
