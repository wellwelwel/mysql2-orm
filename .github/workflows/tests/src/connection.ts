import { MySQL } from '../../../../lib/index.js';

const mysql = new MySQL({
   host: '127.0.0.1',
   port: 3306,
   user: 'root',
   password: '*',
   database: 'mydb',
});

if (!mysql) {
   console.log('Failed to connect to MySQL');
   process.exit(1);
}

mysql.verbose = true;

export default mysql;
