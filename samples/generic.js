import MySQL from '../src/index.js';

(async () => {
   const mysql = new MySQL({
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '*',
      database: 'mydb',
   });

   const [pokemons] = await mysql.execute('SELECT * FROM `pokemons`');
   const [firePokemons] = await mysql.execute('SELECT * FROM `pokemons` WHERE `type` = ?', ['fire']);

   // Getting the original mysql2
   const mysql2 = mysql.connection;

   mysql.end();

   console.log(pokemons, '\n', firePokemons); // Query result
})();
