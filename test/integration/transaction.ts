import assert from 'node:assert';
import { PoolOptions, RowDataPacket } from 'mysql2/promise';
import { MySQL, OP, bt } from '../../src/index.js';

type Counter = {
  total: number;
} & RowDataPacket;

type Users = {
  id?: number;
  name: string;
  age: number;
} & RowDataPacket;

const times = 100;

(async () => {
  const credentials: PoolOptions = {
    host: 'localhost',
    user: 'root',
    database: 'test',
  };

  const mysql = new MySQL(credentials);

  try {
    await mysql.execute(`DROP TABLE IF EXISTS ${bt('users')}`);
    await mysql.execute(`
    CREATE TABLE ${bt('users')} (
      ${bt('id')} INT AUTO_INCREMENT PRIMARY KEY,
      ${bt('name')} VARCHAR(255) NOT NULL,
      ${bt('age')} INT NOT NULL
      )
    `);

    await mysql.beginTransaction();

    for (let i = 1; i <= times; i++) {
      const insertedId = await mysql.insert({
        table: 'users',
        values: [
          {
            name: `John ${i}`,
            age: 20 + i,
          },
        ],
      });

      assert(insertedId);
      assert.deepStrictEqual(insertedId, i);
    }

    const counter = await mysql.select<Counter[]>({
      table: 'users',
      columns: 'COUNT(*)',
      limit: 1,
      rowsAsArray: true,
    });

    assert(counter);
    assert.deepStrictEqual(counter[0], times);

    const updated = await mysql.update({
      table: 'users',
      set: {
        age: 99,
      },
      where: [OP.eq('id', 15)],
      // Expected to be ignored
      params: [999999999],
    });

    assert(updated);
    assert.deepStrictEqual(updated, 1);

    const deleted = await mysql.delete({
      table: 'users',
      where: [OP.eq('id', 20)],
      limit: 1,
      // Expected to be ignored
      params: [999999999],
    });

    assert(deleted);
    assert.deepStrictEqual(deleted, 1);

    await mysql.commit();

    // Testing Rollback
    {
      await mysql.beginTransaction();

      for (let i = 1; i <= times; i++) {
        const insertedId = await mysql.insert({
          table: 'users',
          values: [
            {
              name: `John ${i}`,
              age: 20 + i,
            },
          ],
        });

        assert(insertedId);
        assert.deepStrictEqual(insertedId, i + times);
      }

      await mysql.rollback();

      const counter = await mysql.select<Counter[]>({
        table: 'users',
        columns: 'COUNT(*)',
        limit: 1,
        rowsAsArray: true,
      });

      assert(counter);
      assert.deepStrictEqual(counter[0], times - 1);
    }

    const selected = await mysql.select<Users[]>({
      table: 'users',
      columns: ['name', 'age'],
      limit: 10,
      offset: 10,
      typeCast: (field, next) => {
        if (field.type !== 'VAR_STRING') return next();
        return field.string()?.toUpperCase();
      },
    });

    assert(selected);
    assert.deepStrictEqual(selected.length, 10);
    assert.deepStrictEqual(selected[0].id, undefined);
    assert.deepStrictEqual(selected[0].name, 'JOHN 11');
    assert.deepStrictEqual(selected[0].age, 31);

    assert.deepStrictEqual(selected[4].id, undefined);
    assert.deepStrictEqual(selected[4].name, 'JOHN 15');
    assert.deepStrictEqual(selected[4].age, 99);

    assert.deepStrictEqual(selected[9].id, undefined);
    assert.deepStrictEqual(selected[9].name, 'JOHN 21');
    assert.deepStrictEqual(selected[9].age, 41);
  } catch (error) {
    await mysql.rollback();
    assert.ifError(error);
  } finally {
    try {
      await mysql.end();
    } catch (error) {
      assert.ifError(error);
    }
  }
})();
