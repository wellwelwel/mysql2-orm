import { MySQL } from '../lib/index.mjs';

const mysql = new MySQL({
   host: '127.0.0.1',
   port: 3306,
   user: 'root',
   password: '*',
   database: 'mydb',
});

mysql.verbose = true;

// Example
{
   /**
    * QUERY: "UPDATE `pokemons` SET `name` = ?, `type` = ? WHERE `id` = ? LIMIT 1;"
    * PARAMS: [ 'Squirtle', 'water', 2 ]
    *
    * Returns the number of affectedRows
    */
   const affectedRows = await mysql.update({
      table: 'pokemons',
      set: {
         name: 'Squirtle',
         type: 'water',
      },
      where: '`id` = ?',
      params: [2],
      limit: 1,
   });

   console.log(affectedRows);
}

await mysql.end();
