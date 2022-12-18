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

   const mysql2 = await mysql.getConnection();

   mysql.verbose = true;

   await mysql2.beginTransaction();

   try {
      // Insert a row
      const way1 = await mysql.insert({
         table: 'pokemons',
         values: {
            name: 'Mew',
            type: 'psychic',
         },
      });

      // Insert multiple rows
      const way2 = await mysql.insert({
         table: 'pokemons',
         values: [
            { name: 'Pichu', type: 'electric' },
            { name: 'Mewtwo', type: 'psychic' },
         ],
      });

      if (!way1 || !way2) throw new Error('Something is wrong, coming back 👾');

      await mysql2.commit();

      console.log(way1);
      console.log(way2);
   } catch (error) {
      await mysql2.rollback();
      console.error(error.message);
   } finally {
      await mysql.end();
   }
})();