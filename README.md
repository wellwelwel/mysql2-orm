<h2 align="center">MySQL ORM</h2>
<p align="center">🎲 This is a basic <b>ORM project</b> created from the <a href="https://www.npmjs.com/package/mysql2">mysql2/promise</a></p>

## Install

```shell
   npm i mysql2-orm
```

<hr />

### Usage

#### Import

-  ES Modules

   ```javascript
   import { MySQL } from 'mysql2-orm';
   ```

-  CommonJS

   ```javascript
   const { MySQL } = require('mysql2-orm');
   ```

-  TypeScript

   ```javascript
   import { MySQL } from 'mysql2-orm';
   import { ... } from 'mysql2-orm/types';
   ```

   -  You will need to install [`@types/node`](https://www.npmjs.com/package/@types/node)

<hr />

#### Connect

```javascript
const mysql = new MySQL({
   host: 'localhost',
   port: 3306,
   user: 'user',
   password: 'pass',
   database: 'dbname',
});
```

#### Close Connection

```javascript
await mysql.end();
```

<hr />

### Querying

#### Select

-  Select all rows

   ```javascript
   await mysql.select({
      table: 'pokemons',
   });

   // Returns an array with the results
   ```

   ```sql
   SELECT * FROM `pokemons`;
   ```

-  Select specific rows

   ```javascript
   await mysql.select({
      columns: ['name', 'type'],
      table: 'pokemons',
      where: '`type` IN(?, ?)',
      params: ['water', 'grass'],
      limit: 2,
      orderBy: ['name', 'DESC'],
   });

   // Returns an array with the results
   ```

   ```sql
   SELECT `name`, `type` FROM `pokemons` WHERE `type` IN(?, ?) ORDER BY `name` DESC LIMIT 2;
   -- params: [ 'water', 'grass' ]
   ```

-  Count all rows

   ```javascript
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

-  JOIN: `inner` | `left` | `right` | `cross`

   ```javascript
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
      where: '`userId` = ?',
      params: [1],
   });

   // Returns an array with the results
   ```

   ```sql
   SELECT `pokemons`.`name`, `pokemons`.`type`
   FROM `captureds`
   LEFT JOIN `pokemons`
   ON `captureds`.`pokemonId` = `pokemons`.`id`
   WHERE `userId` = ?;
   -- params: [ 1 ]
   ```

   -  The **`join` option** accetps a direct `object` or an `array` with multiple `JOIN`
   -  ⚠️ When using `join` with dynamic params, remeber that `JOIN` comes before the `WHERE`

<br />

> `distinct`, `columns`, `join`, `where`, `params`, `limit` and `orderBy` are optionals  
> `columns`: the default value is `'*'` and accepts a string or an array with the columns  
> `orderBy`: `[ 'column' ]` or `[ 'column', 'ASC' | 'DESC' ]`

<hr />

#### Insert

-  Insert a single row

   ```javascript
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

-  Insert multiple rows

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

<hr />

#### Update

-  Example

   ```javascript
   await mysql.update({
      table: 'pokemons',
      set: {
         name: 'Squirtle',
         type: 'water',
      },
      where: '`id` = ?',
      params: [2],
      limit: 1,
   });

   // Returns the number of affectedRows
   ```

   ```sql
   UPDATE `pokemons` SET `name` = ?, `type` = ? WHERE `id` = ? LIMIT 1;
   -- params: [ 'Squirtle', 'water', 2 ]
   ```

<br />

> `where`, `params` and `limit` are optionals

<hr />

#### Mount Query Only

```javascript
await mysql.select({
   // ...
   mountOnly: true,
});
```

-  Returns an object with the final `query` and `params`, without execute the query
-  Works with `select`, `insert` and `update` ORM functions
-  This is very useful for [subqueries](./samples/subqueries.js) (`WHERE`, `UNION`, `INTERSECT`, etc.) 😉

<hr />

#### [`mysql2`](https://www.npmjs.com/package/mysql2) Originals

-  Getting the original [**mysql2**](https://www.npmjs.com/package/mysql2) connection:

   ```javascript
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

-  Mixing the Packages

   ```javascript
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

<hr />

### Others

#### Backticks

<!-- prettier-ignore -->
```javascript
import { setBacktick } from 'mysql2-orm';

setBacktick('table');         // `table`
setBacktick('column');        // `column`
setBacktick('table.column');  // `table`.`column`
```

<hr />

### Notes

-  See practical examples in [samples](./samples/)
-  Use `verbose` to see final queries in console

-  -  [x] Features
      -  [x] [`SELECT`](./samples/select.js)
         -  [x] DISTINCT
         -  [x] JOIN
         -  [x] WHERE
         -  [x] GROUP BY
         -  [x] ORDER BY
         -  [x] LIMIT
         -  [x] OFFSET
      -  [x] [`UPDATE`](./samples/update.js)
         -  [x] WHERE
         -  [x] LIMIT
      -  [x] [`INSERT`](./samples/insert.js)
      -  [x] [`TRANSACTION`](./samples/transaction.js)
      -  [x] [`SUBQUERIES`](./samples/subqueries.js)

<hr />

### Credits

| Project                                              | Author                                                                           |
| ---------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`mysql2`](https://github.com/sidorares/node-mysql2) | [![sidorares](./.github/assets/readme/mysql2.svg)](https://github.com/sidorares) |
| `mysql2-orm`                                         | [![wellwelwel](./.github/assets/readme/orm.svg)](https://github.com/wellwelwel)  |

<hr />

-  Check the original [**mysql2**](https://www.npmjs.com/package/mysql2) project [**here**](https://github.com/sidorares/node-mysql2).
