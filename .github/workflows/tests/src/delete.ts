import mysql from './connection.js';

const result = await mysql.delete({
   table: 'pokemons',
   where: '`name` = ?',
   params: ['Mew'],
   limit: 1,
});

await mysql.end();

console.log('DELETE', '\n', result);

if (!result || result !== 1) process.exit(1);
