import mysql from './connection.js';

const mysql2 = await mysql.getConnection();

const [result] = await mysql2.execute('SELECT * FROM `pokemons`;');

await mysql.end();

console.log('EXECUTE (original)', '\n', result);

if (!result || !Array.isArray(result) || result?.length !== 5) process.exit(1);
