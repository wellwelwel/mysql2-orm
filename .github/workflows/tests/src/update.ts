import mysql from './connection.js';

const result = await mysql.update({
   table: 'pokemons',
   set: {
      name: 'MewTwo',
   },
   where: '`name` = ?',
   params: ['Mew'],
   limit: 1,
});

await mysql.end();

console.log('UPDATE', '\n', result);

if (!result || result !== 1) process.exit(1);
