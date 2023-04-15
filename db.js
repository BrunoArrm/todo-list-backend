async function connect() {

    if ( global.connection && global.connection.state !== 'disconnected' )
        return global.connection;

    console.log('aaaaaaaaaaaaaaaaaaaa', process.env.DATABASE_URL);

    const mysql = require('mysql2/promise');

    const connection = mysql.createConnection({
        host: process.env.DATABASE_URL,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PW,
        database: process.env.DATABASE_NAME
      });

    console.log('Conectado ao banco!');
    global.connection = connection;
    return connection;

}

module.exports = { connect };