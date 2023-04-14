async function connect() {

    if ( global.connection && global.connection.state !== 'disconnected' )
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection('mysql://root:121312@127.0.0.1:3306/todolist');
    console.log('Conectado ao banco!');
    global.connection = connection;
    return connection;

}

module.exports = { connect };