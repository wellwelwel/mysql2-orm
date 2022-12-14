<h2 align="center">MySQL ORM</h2>
<p align="center">🎲 This is a <b>personal ORM project</b> created from the <a href="https://www.npmjs.com/package/mysql2">mysql2/promise</a></p>

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

// await mysql.connect();

// mysql.end();
```

<hr />

#### SELECT

-  Selecting all rows

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

-  Selecting specific rows

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

-  Full columns insertion

   ```javascript
   await mysql.insert({
      table: 'pokemons',
      values: [null, 'Eevee', 'normal'], // `id`, `name`, `type`
   });

   /**
    * QUERY: "INSERT INTO `pokemons` VALUES (?, ?, ?);"
    * PARAMS: [ null, 'Eevee', 'normal' ]
    *
    * Returns: last insert id
    */
   ```

-  Insertion by specified columns

   ```javascript
   await mysql.insert({
      table: 'pokemons',
      columns: ['name', 'type'],
      values: ['Mew', 'psychic'],
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
      columns: ['name', 'type'],
      values: [
         ['Pichu', 'electric'],
         ['Mewtwo', 'psychic'],
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

-  Single column update

   ```javascript
   await mysql.update({
      table: 'pokemons',
      set: ['name', 'Charizard'],
      where: '`id` = ?',
      params: ['48'],
      limit: 1,
   });

   /**
    * QUERY: "UPDATE `pokemons` SET `name` = ? WHERE `id` = ? LIMIT 1;"
    * PARAMS: [ 'Charizard', '48' ]
    *
    * Returns the number of affectedRows
    */
   ```

-  Multiple columns update

   ```javascript
   await mysql.update({
      table: 'pokemons',
      set: [
         ['name', 'Squirtle'],
         ['type', 'water'],
      ],
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

<hr />

#### [`mysql2`](https://www.npmjs.com/package/mysql2) Originals

-  Executing a generic query:

   ```javascript
   const [pokemons] = await mysql.execute('SELECT * FROM `pokemons`');

   const [firePokemons] = await mysql.execute('SELECT * FROM `pokemons` WHERE `type` = ?', ['fire']);
   ```

-  Getting the original [**mysql2**](https://www.npmjs.com/package/mysql2) connection:

   ```javascript
   const mysql2 = mysql.connection;
   ```

<hr />

### Credits

| Contributors                                     | GitHub                                                                           |
| ------------------------------------------------ | -------------------------------------------------------------------------------- |
| [`mysql2`](https://www.npmjs.com/package/mysql2) | [![sidorares](./.github/assets/readme/mysql2.svg)](https://github.com/sidorares) |
| `mysql2-orm`                                     | [![wellwelwel](./.github/assets/readme/orm.svg)](https://github.com/wellwelwel)  |

<hr />

-  Check the original [**mysql2**](https://www.npmjs.com/package/mysql2) project [**here**](https://github.com/sidorares/node-mysql2).
