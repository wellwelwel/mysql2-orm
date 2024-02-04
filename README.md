[mysql2]: https://github.com/sidorares/node-mysql2

# MySQL2 ORM

🎲 An **ORM** built on [**MySQL2**][mysql2], designed to be intuitive, productive and focused on essential functionality.

<a href="https://www.npmjs.com/package/mysql2-orm"><img src="https://img.shields.io/npm/v/mysql2-orm?style=flat" alt="npm"></a>
<a href="https://github.com/wellwelwel/mysql2-orm/actions/workflows/ci.yml?query=branch%3Amain"><img src="https://img.shields.io/github/actions/workflow/status/wellwelwel/mysql2-orm/ci.yml?event=push&style=flat&label=ci&branch=main" alt="GitHub Workflow Status (with event)"></a>
<a href="https://www.npmjs.com/package/mysql2-orm"><img src="https://img.shields.io/npm/dt/mysql2-orm?style=flat" alt="npm"></a>

<!-- <a href="https://github.com/wellwelwel/mysql2-orm/blob/main/LICENSE"><img src="https://raw.githubusercontent.com/wellwelwel/mysql2-orm/main/.github/assets/readme/license.svg" alt="License"></a> -->

> This project uses **mysql2/promise**, **createPool** and **execute** behind the scenes.

## Why

Here are some benefits:

- 🧙🏻‍♀️ Automatic **Prepared Statements** (_including **LIMIT** and **OFFSET**_).
- 👩🏻‍🔧 It will smartly detect and release the connection when using `commit` or `rollback` in a transaction.
- 🥷🏻 You can also simply use **QueryBuilder** to mount your queries and use them in the original [**MySQL2**][mysql2].
- 🔬 **Strictly Typed:** No usage of `any`, `as` neither `satisfies` at all.
- 🧑🏻‍🍼 It exposes the `execute` and `query` original methods from [**MySQL2**][mysql2] Pool class.

For more detailed **documentation** and **examples**, see bellow.

---

## Install

```shell
npm i mysql2-orm
```

If you are using TypeScript, you will need to install [@types/node](https://www.npmjs.com/package/@types/node).

```shell
npm i -D @types/node
```

---

## Documentation

### Import

#### ES Modules

```ts
import { MySQL } from 'mysql2-orm';
```

#### CommonJS

```ts
const { MySQL } = require('mysql2-orm');
```

---

### Connect

```ts
import { PoolOptions } from 'mysql2/promise';
import { MySQL } from 'mysql2-orm';

const credentials: PoolOptions = {
  host: '',
  user: '',
  database: '',
};

const mysql = new MySQL(credentials);
```

#### Close the connection

```ts
await mysql.end();
```

---

### Querying

#### Select

- Select all rows

  ```ts
  await mysql.select({
    table: 'pokemons',
  });

  // Returns an array with the results
  ```

  ```sql
  SELECT * FROM `pokemons`;
  ```

- Select specific rows

  ```ts
  await mysql.select({
    columns: ['name', 'type'],
    table: 'pokemons',
    where: 'type IN(?, ?)',
    params: ['water', 'grass'],
    limit: 2,
    orderBy: ['name', 'DESC'],
  });

  // Returns an array with the results
  ```

  ```sql
  SELECT `name`, `type` FROM `pokemons` WHERE type IN(?, ?) ORDER BY `name` DESC LIMIT 2;

  -- params: [ 'water', 'grass' ]
  ```

- Count all rows

  ```ts
  await mysql.select({
    columns: 'COUNT(*) AS `total`',
    table: 'pokemons',
    limit: 1,
  });

  // Because "limit: 1", it returns a direct object with the result: { total: ... }
  ```

  ```sql
  SELECT COUNT(*) AS `total` FROM `pokemons` LIMIT 1;
  ```

- JOIN: `inner` | `left` | `right` | `cross`

  ```ts
  await mysql.select({
    columns: ['pokemons.name', 'pokemons.type'],
    table: 'captureds',
    join: {
      type: 'left',
      // outer: false,
      table: 'pokemons',
      on: {
        a: 'captureds.pokemonId',
        b: 'pokemons.id',
      },
    },
    where: 'userId = ?',
    params: [1],
  });

  // Returns an array with the results
  ```

  ```sql
  SELECT `pokemons`.`name`, `pokemons`.`type`
     FROM `captureds`
     LEFT JOIN `pokemons`
        ON `captureds`.`pokemonId` = `pokemons`.`id`
     WHERE userId = ?
  ;

  -- params: [ 1 ]
  ```

  - The **`join` option** accetps a direct `object` or an `array` with multiple `JOIN`

<br />

> `distinct`, `columns`, `join`, `where`, `params`, `limit` and `orderBy` are optionals
> `columns`: the default value is `'*'` and accepts a string or an array with the columns
> `orderBy`: `[ 'column' ]` or `[ 'column', 'ASC' | 'DESC' ]`

---

#### Insert

- Insert a single row

  ```ts
  await mysql.insert({
    table: 'pokemons',
    values: {
      name: 'Mew',
      type: 'psychic',
    },
  });

  // Returns: last insert id
  ```

  ```sql
  INSERT INTO `pokemons` (`name`, `type`) VALUES (?, ?);

  -- params: [ 'Mew', 'psychic' ]
  ```

- Insert multiple rows

  ```js
  await mysql.insert({
    table: 'pokemons',
    values: [
      { name: 'Pichu', type: 'electric' },
      { name: 'Mewtwo', type: 'psychic' },
    ],
  });

  // Returns: first row id from multiple insert
  ```

  ```sql
  INSERT INTO `pokemons` (`name`, `type`) VALUES (?, ?), (?, ?);

  -- params: [ 'Pichu', 'electric', 'Mewtwo', 'psychic' ]
  ```

---

#### Update

- Example

  ```ts
  await mysql.update({
    table: 'pokemons',
    set: {
      name: 'Squirtle',
      type: 'water',
    },
    where: 'id = ?',
    params: [2],
    limit: 1,
  });

  // Returns the number of affectedRows
  ```

  ```sql
  UPDATE `pokemons` SET `name` = ?, `type` = ? WHERE id = ? LIMIT 1;

  -- params: [ 'Squirtle', 'water', 2 ]
  ```

<br />

> `where`, `params` and `limit` are optionals

---

#### Delete

- Example

  ```ts
  await mysql.delete({
    table: 'pokemons',
    where: 'id = ?',
    params: [2],
    limit: 1,
  });

  // Returns the number of affectedRows
  ```

  ```sql
  DELETE FROM `pokemons` WHERE id = ? LIMIT 1;

  -- params: [ 2 ]
  ```

<br />

> `where`, `params` and `limit` are optionals

---

#### Mount Query Only

```ts
await mysql.select({
  // ...
  mountOnly: true,
});
```

- Returns an object with the final `query` and `params`, without execute the query
- Works with `select`, `insert` and `update` ORM functions
- This is very useful for [subqueries](./samples/subqueries.ts) (`WHERE`, `UNION`, `INTERSECT`, etc.) 😉

---

#### [`mysql2`](https://www.npmjs.com/package/mysql2) Originals

- Getting the original [**mysql2**](https://www.npmjs.com/package/mysql2) connection:

  ```ts
  const mysql2 = await mysql.getConnection();

  /**
   * mysql2.execute,
   * mysql2.beginTransaction,
   * mysql2.commit,
   * mysql2.rollback,
   * etc.
   *
   * See all options in: https://github.com/sidorares/node-mysql2
   */
  ```

- Mixing the Packages

  ```ts
  await mysql2.beginTransaction();

  try {
    const inserted = await mysql.insert({
      table: 'pokemons',
      values: [
        { name: 'Pichu', type: 'electric' },
        { name: 'Mewtwo', type: 'psychic' },
      ],
    });

    if (!inserted) throw new Error('Something is wrong, coming back');

    await mysql2.commit();
  } catch (error) {
    await mysql2.rollback();
    console.error(error.message);
  } finally {
    await mysql.end();
  }
  ```

---

### Others

#### Backticks

<!-- prettier-ignore -->
```ts
import { setBacktick } from 'mysql2-orm';

setBacktick('table');         // `table`
setBacktick('column');        // `column`
setBacktick('table.column');  // `table`.`column`
```

---

### Notes

- See practical examples in [samples](./samples/)
- Perform `mysql.setDebug(true)` to see final queries and errors in console

---

### Features

- [x] [`SELECT`](./samples/select.ts)
  - [x] DISTINCT
  - [x] JOIN
  - [x] WHERE
  - [x] GROUP BY
  - [x] ORDER BY
  - [x] LIMIT
  - [x] OFFSET
- [x] [`UPDATE`](./samples/update.ts)
  - [x] WHERE
  - [x] LIMIT
- [x] [`DELETE`](./samples/delete.ts)
  - [x] WHERE
  - [x] LIMIT
- [x] [`INSERT`](./samples/insert.ts)
- [x] [`TRANSACTION`](./samples/transaction.ts)
- [x] [`SUBQUERIES`](./samples/subqueries.ts)

---

### Credits

| Project                                              | Author                                                                           |
| ---------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`mysql2`](https://github.com/sidorares/node-mysql2) | [![sidorares](./.github/assets/readme/mysql2.svg)](https://github.com/sidorares) |
| `mysql2-orm`                                         | [![wellwelwel](./.github/assets/readme/orm.svg)](https://github.com/wellwelwel)  |

---

- Check the original [**mysql2**](https://www.npmjs.com/package/mysql2) project [**here**](https://github.com/sidorares/node-mysql2).
