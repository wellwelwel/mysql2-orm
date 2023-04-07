import mysql from './connection.js';

const result = await mysql.select({
   table: 'pokemons',
});

await mysql.end();

console.log('SELECT', '\n', result);

if (!result || result?.length !== 5) process.exit(1);
