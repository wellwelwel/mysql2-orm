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
      const insertedA = await mysql.insert({
         table: 'artificialPokemons',
         values: { name: 'Mewtwo', type: 'psychic' },
      });

      const insertedB = await mysql.insert({
         table: 'pokemons',
         values: [
            { name: 'Pichu', type: 'electric' },
            { name: 'Mew', type: 'psychic' },
         ],
      });

      if (!insertedA || !insertedB) throw new Error('Something is wrong, coming back 👾');

      await mysql2.commit();
   } catch (error) {
      await mysql2.rollback();
      console.error(error.message);
   } finally {
      await mysql.end();
   }
})();
