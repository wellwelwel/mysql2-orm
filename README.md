<h2 align="center">MySQL ORM</h2>
<p align="center">This is a basic <b>ORM project</bcreated from the <a href="https://www.npmjs.com/package/mysql2">mysql2/promise</a></p>

## Install

```shell
   npm i mysql2-orm
```

<hr />

### Usage

#### Setup

```javascript
import MySQL from 'mysql2-orm';

const mysql = new MySQL({
   host: 'localhost',
   port: 3306,
   user: 'user',
   password: 'pass',
   database: 'dbname',
});
```

#### Connect

```javascript
await mysql.connect();
```

#### Close connection

```javascript
mysql.end();
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
      columns: ['name', 'type'], // default: '*' | Accepts a string with columns or an array
      table: 'pokemons',
      where: '`type` IN(?, ?)',
      params: ['water', 'grass'],
      limit: 2,
      orderBy: ['name', 'DESC'], // [ 'column' ] || [ 'column', 'ASC' | 'DESC' ]
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
   --params: [ 'Squirtle', 'water', 2 ]
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

| Project                                              | Author                                                                           |
| ---------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`mysql2`](https://github.com/sidorares/node-mysql2) | [![sidorares](./.github/assets/readme/mysql2.svg)](https://github.com/sidorares) |
| `mysql2-orm`                                         | [![wellwelwel](./.github/assets/readme/orm.svg)](https://github.com/wellwelwel)  |

<hr />

-  Check the original [**mysql2**](https://www.npmjs.com/package/mysql2) project [**here**](https://github.com/sidorares/node-mysql2).
