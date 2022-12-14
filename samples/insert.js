/**
 * INSERT
 * table: ''
 * columns: [] // optional
 * values: Auto put "?" for each value and split values to params
 */

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

   // Put only values
   const way1 = await mysql.insert({
      table: 'pokemons',
      values: [null, 'Eevee', 'normal'],
   });

   /**
    * QUERY: "INSERT INTO `pokemons` VALUES (?, ?, ?);"
    * PARAMS: [ null, 'Eevee', 'normal' ]
    *
    * Returns: last insert id
    */

   // Put values by specified columns
   const way2 = await mysql.insert({
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

   // Insert multiple rows
   const way3 = await mysql.insert({
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

   mysql.end();

   console.log(way1);
   console.log(way2);
   console.log(way3);
})();
