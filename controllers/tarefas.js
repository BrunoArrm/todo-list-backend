const db = require('../db');

// Função para consultar todos os dados no banco
async function consultar() {

    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM tarefas');
    return rows;

}

// Função para inserir dados no banco
async function inserir(dados) {

    const conn = await db.connect();

    const sql       = 'INSERT INTO tarefas(descricao, data_realizado, ordem) VALUES (?, ?, ?);'; // Colocar "?" no segundo parâmetro permitirá que a query aceite um array de valores que irão substituir os "?"
    const values    = dados;

    return await conn.query(sql, values);

}

// Função para atualizar dados no banco
async function atualizar(dados) {

    const conn = await db.connect();

    const sql       = 'UPDATE tarefas SET descricao=?, data_realizado=?, ordem=? WHERE id_tarefa=?';
    const values    = dados;

    return await conn.query(sql, values);
}

// Função para deletar dados no banco
async function deletar(id) {
    const conn = await db.connect();

    const sql       ='DELETE FROM tarefas where id_tarefa=?;';

    return await conn.query(sql, [id]);
}

module.exports = { consultar, inserir, atualizar, deletar };