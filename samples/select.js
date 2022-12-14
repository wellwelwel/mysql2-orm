import MySQL from '../src/index.js';

(async () => {
   const mysql = new MySQL({
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '*',
      database: 'mydb',
   });

   mysql.verbose = true;

   const way1 = await mysql.select({
      table: 'pokemons',
   });

   /**
    * QUERY: "SELECT * FROM `pokemons`;"
    * PARAMS: []
    *
    * Returns an array with the results
    */

   const way2 = await mysql.select({
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

   const way3 = await mysql.select({
      columns: 'COUNT(*) AS `total`',
      table: 'pokemons',
      limit: 1,
   });

   /**
    * QUERY: "SELECT COUNT(*) AS `total` FROM `pokemons` LIMIT 1;"
    * PARAMS: []
    *
    * Because "limit: 1", it returns a direct object with the result
    */

   mysql.end();

   console.log(way1);
   console.log(way2);
   console.log(way3);
})();
