import MySQL from '../src/index.js';

(async () => {
   const mysql = new MySQL({
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '*',
      database: 'mydb',
   });

   mysql.verbose = true; // default: false | Print the query and params to console

   // Single column update
   const way1 = await mysql.update({
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

   // Multiple columns update
   const way2 = await mysql.update({
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

   mysql.end();

   console.log(way1);
   console.log(way2);
})();
