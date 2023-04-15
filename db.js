async function connect() {

    if ( global.connection && global.connection.state !== 'disconnected' )
        return global.connection;

    console.log('aaaaaaaaaaaaaaaaaaaa', process.env.conn);

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection(process.env.conn);
    console.log('Conectado ao banco!');
    global.connection = connection;
    return connection;

}

module.exports = { connect };