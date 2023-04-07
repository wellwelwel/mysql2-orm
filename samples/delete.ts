import { MySQL } from '../lib/index.js';

const mysql = new MySQL({
   host: '127.0.0.1',
   port: 3306,
   user: 'root',
   password: '*',
   database: 'mydb',
});

mysql.verbose = true;

// Insert a row
{
   /**
    * QUERY: "DELETE FROM `pokemons` WHERE `name` = ?;"
    * PARAMS: [ 'Mew' ]
    *
    * Returns: last insert id
    */
   const deletedPokemons = await mysql.delete({
      table: 'pokemons',
      where: '`name` = ?',
      params: ['Mew'],
      limit: 1,
   });

   console.log(deletedPokemons);
}

await mysql.end();
