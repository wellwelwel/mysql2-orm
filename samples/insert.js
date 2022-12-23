import { MySQL } from '../lib/index.mjs';

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
    * QUERY: "INSERT INTO `pokemons` (`name`, `type`) VALUES (?, ?);"
    * PARAMS: [ 'Mew', 'psychic' ]
    *
    * Returns: last insert id
    */
   const insertedId = await mysql.insert({
      table: 'artificialPokemons',
      values: { name: 'Mewtwo', type: 'psychic' },
   });

   console.log(insertedId);
}

// Insert multiple rows
{
   /**
    * QUERY: "INSERT INTO `pokemons` (`name`, `type`) VALUES (?, ?), (?, ?);"
    * PARAMS: [ 'Pichu', 'electric', 'Mewtwo', 'psychic' ]
    *
    * Returns: first row id from multiple insert
    */
   const insertedId = await mysql.insert({
      table: 'pokemons',
      values: [
         { name: 'Pichu', type: 'electric' },
         { name: 'Mew', type: 'psychic' },
      ],
   });

   console.log(insertedId);
}

await mysql.end();
