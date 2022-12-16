<h2 align="center">MySQL ORM</h2>
<p align="center">🎲 This is a basic <b>ORM project</b> created from the <a href="https://www.npmjs.com/package/mysql2">mysql2/promise</a></p>

## Install

```shell
   npm i mysql2-orm
```

<hr />

### Connect

```javascript
import MySQL from 'mysql2-orm';

const mysql = new MySQL({
   host: 'localhost',
   port: 3306,
   user: 'user',
   password: 'pass',
   database: 'dbname',
});

await mysql.connect();

// mysql.end();
```

<hr />

#### SELECT

-  Select all rows

   ```javascript
   await mysql.select({
      table: 'pokemons',
   });

   /**
    * QUERY: "SELECT * FROM `pokemons`;"
    *
    * Returns an array with the results
    */
   ```

-  Select specific rows

   ```javascript
   await mysql.select({
      columns: ['name', 'type'], // default: '*' | Accepts a string with columns or an array
      table: 'pokemons',
      where: '`type` IN(?, ?)',
      params: ['water', 'grass'],
      limit: 2,
      orderBy: ['name', 'DESC'], // [ 'column' ] || [ 'column', 'ASC' | 'DESC' ]
   });

   /**
    * QUERY: "SELECT `name`, `type` FROM `pokemons` WHERE `type` IN(?, ?) ORDER BY `name` DESC LIMIT 2;"
    * PARAMS: [ 'water', 'grass' ]
    *
    * Returns an array with the results
    */
   ```

-  Count all rows

   ```javascript
   await mysql.select({
      columns: 'COUNT(*) AS `total`',
      table: 'pokemons',
      limit: 1,
   });

   /**
    * QUERY: "SELECT COUNT(*) AS `total` FROM `pokemons` LIMIT 1;"
    *
    * Because "limit: 1", it returns a direct object with the result: { total: ... }
    */
   ```

<hr />

#### INSERT

-  Insert a single row

   ```javascript
   await mysql.insert({
      table: 'pokemons',
      values: {
         name: 'Mew',
         type: 'psychic',
      },
   });

   /**
    * QUERY: "INSERT INTO `pokemons` (`name`, `type`) VALUES (?, ?);"
    * PARAMS: [ 'Mew', 'psychic' ]
    *
    * Returns: last insert id
    */
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

   /**
    * QUERY: "INSERT INTO `pokemons` (`name`, `type`) VALUES (?, ?), (?, ?);"
    * PARAMS: [ 'Pichu', 'electric', 'Mewtwo', 'psychic' ]
    *
    * Returns: first row id from multiple insert
    */
   ```

<hr />

#### UPDATE

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

   /**
    * QUERY: "UPDATE `pokemons` SET `name` = ?, `type` = ? WHERE `id` = ? LIMIT 1;"
    * PARAMS: [ 'Squirtle', 'water', 2 ]
    *
    * Returns the number of affectedRows
    */
   ```

   -  `where`, `params` and `limit` are optionals 😉

<hr />

#### [`mysql2`](https://www.npmjs.com/package/mysql2) Originals

-  Getting the original [**mysql2**](https://www.npmjs.com/package/mysql2) connection:

   ```javascript
   const mysql2 = mysql.connection;

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

<hr />

### Credits

| Contributors                                     | GitHub                                                                           |
| ------------------------------------------------ | -------------------------------------------------------------------------------- |
| [`mysql2`](https://www.npmjs.com/package/mysql2) | [![sidorares](./.github/assets/readme/mysql2.svg)](https://github.com/sidorares) |
| `mysql2-orm`                                     | [![wellwelwel](./.github/assets/readme/orm.svg)](https://github.com/wellwelwel)  |

<hr />

-  Check the original [**mysql2**](https://www.npmjs.com/package/mysql2) project [**here**](https://github.com/sidorares/node-mysql2).
