import MySQL from '../src/index.js';

(async () => {
   const mysql = new MySQL({
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '*',
      database: 'mydb',
   });

   const mysql2 = await mysql.getConnection();

   mysql.verbose = true;

   // WHERE
   {
      /**
       * QUERY: "SELECT `id` FROM `captureds` WHERE `userId` = ?"
       * PARAMS: [ 1 ]
       *
       * Because "mountOnly: true", returns an object with the query and params
       */
      const getUserPokemonIds = await mysql.select({
         columns: ['id'],
         table: 'captureds',
         where: '`userId` = ?',
         params: [1],
         mountOnly: true,
      });

      /**
       * QUERY: "SELECT `name`, `type` FROM `pokemons` WHERE `id` IN (SELECT `id` FROM `captureds` WHERE `userId` = ?) AND `type` = ?;"
       * PARAMS: [ 1, 'electric' ]
       *
       * Returns an array with the results
       */
      const userElectricPokemons = await mysql.select({
         columns: ['name', 'type'],
         table: 'pokemons',
         where: `\`id\` IN (${getUserPokemonIds.query}) AND \`type\` = ?`,
         params: [...getUserPokemonIds.params, 'electric'],
      });

      console.log(userElectricPokemons, '\n');
   }

   // UNION, UNION ALL
   {
      /**
       * QUERY: "SELECT `name`, `type` FROM `pokemons` WHERE `type` = ?"
       * PARAMS: [ 'psychic' ]
       *
       * Because "mountOnly: true", returns an object with the query and params
       */
      const pokemons = await mysql.select({
         columns: ['name', 'type'],
         table: 'pokemons',
         where: '`type` = ?',
         params: ['psychic'],
         mountOnly: true,
      });

      /**
       * QUERY: "SELECT `name`, `type` FROM `artificialPokemons` WHERE `type` = ?"
       * PARAMS: [ 'psychic' ]
       *
       * Because "mountOnly: true", returns an object with the query and params
       */
      const artificialPokemons = await mysql.select({
         columns: ['name', 'type'],
         table: 'artificialPokemons',
         where: '`type` = ?',
         params: ['psychic'],
         mountOnly: true,
      });

      // Note that "execute" is an original "mysql2" function
      const [allPokemons] = await mysql2.execute(`${pokemons.query} UNION ALL ${artificialPokemons.query}`, [
         ...pokemons.params,
         ...artificialPokemons.params,
      ]);

      console.log(allPokemons, '\n');
   }

   await mysql.end();
})();
