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

   {
      /**
       * QUERY: "SELECT * FROM `pokemons`;"
       * PARAMS: []
       *
       * Returns an array with the results
       */
      const simple = await mysql.select({
         table: 'pokemons',
      });

      console.log(simple, '\n');
   }

   {
      /**
       * QUERY: "SELECT `name`, `type` FROM `pokemons` WHERE `type` IN(?, ?) ORDER BY `name` DESC LIMIT 2;"
       * PARAMS: [ 'water', 'grass' ]
       *
       * Returns an array with the results
       */
      const advanced = await mysql.select({
         columns: ['name', 'type'],
         table: 'pokemons',
         where: '`type` IN(?, ?)',
         params: ['water', 'grass'],
         limit: 2,
         orderBy: ['name', 'DESC'],
      });

      console.log(advanced, '\n');
   }

   {
      /**
       * QUERY: "SELECT COUNT(*) AS `total` FROM `pokemons` LIMIT 1;"
       * PARAMS: []
       *
       * Because "limit: 1", it returns a direct object with the result
       */
      const customColumns = await mysql.select({
         columns: 'COUNT(*) AS `total`',
         table: 'pokemons',
         limit: 1,
      });

      console.log(customColumns, '\n');
   }

   {
      /**
       * QUERY: "SELECT `type`, COUNT(*) AS `total` FROM `pokemons` GROUP BY `type`;"
       * PARAMS: []
       *
       * Returns an array with the results
       */
      const groupBy = await mysql.select({
         columns: '`type`, COUNT(*) AS `total`',
         table: 'pokemons',
         groupBy: 'type',
      });

      console.log(groupBy, '\n');
   }

   // JOIN: inner | left | right | cross
   {
      /**
       * QUERY: "SELECT `pokemons`.`name`, `pokemons`.`type` FROM `captureds` LEFT JOIN `pokemons` ON `captureds`.`pokemonId` = `pokemons`.`id` WHERE `userId` = ?;"
       * PARAMS: [ 1 ]
       *
       * Returns an array with the results
       */
      const userPokemons = await mysql.select({
         columns: ['pokemons.name', 'pokemons.type'],
         table: 'captureds',
         join: {
            type: 'left',
            table: 'pokemons',
            on: {
               a: 'captureds.pokemonId',
               b: 'pokemons.id',
            },
            // outer: true,
         },
         where: '`userId` = ?',
         params: [1],
      });

      console.log(userPokemons, '\n');
   }

   await mysql.end();
})();
