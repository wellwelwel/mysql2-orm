import mysql from './connection.js';

const result = await mysql.insert({
  table: 'pokemons',
  values: [
    { name: 'Pichu', type: 'Electric' },
    { name: 'Mew', type: 'Psychic' },
    { name: 'Mew', type: 'Psychic' } /** To Delete */,
    { name: 'Mew', type: 'Psychic' } /** To update (MewTwo) */,
    { name: 'Charizard', type: 'Fire/Flying' },
    { name: 'Bulbasaur', type: 'Grass/Poison' },
  ],
});

await mysql.end();

console.log('INSERT', '\n', result);

if (!result || typeof result !== 'number') process.exit(1);
