async function connect() {

    if ( global.connection && global.connection.state !== 'disconnected' )
        return global.connection;

    console.log('aaaaaaaaaaaaaaaaaaaa', process.env.DATABASE_URL);

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    console.log('Conectado ao banco!');
    global.connection = connection;
    return connection;

}

module.exports = { connect };