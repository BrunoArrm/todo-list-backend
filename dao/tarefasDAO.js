const db = require('../db');

// Função para consultar todos os dados no banco
async function consultar() {
    const conn = await db.connect();

    const [rows] = await conn.query('SELECT * FROM tarefas');

    return rows;

}

// Função para consultar todos os dados no banco obedecendo um WHERE
async function consultarCondicional(id) {
    const conn = await db.connect();

    const sql = 'SELECT * FROM tarefas WHERE executado =?';
    const [rows] = await conn.query(sql, [id]);

    return rows;

}

// Função para inserir dados no banco
async function inserir(dados) {
    const conn = await db.connect();

    const sql = 'INSERT INTO tarefas(descricao, executado, ordem) VALUES (?, ?, ?);'; // Colocar "?" no segundo parâmetro permitirá que a query aceite um array de valores que irão substituir os "?"
    const { descricao, executado, ordem } = dados;

    return await conn.query(sql, [descricao, executado, ordem]);
}

// Função para atualizar dados no banco
async function atualizar(dados) {
    const conn = await db.connect();

    const sql = 'UPDATE tarefas SET descricao=?, executado=?, ordem=? WHERE id_tarefa=?';
    const { descricao, executado, ordem, id_tarefa } = dados;

    return await conn.query(sql, [descricao, executado, ordem, id_tarefa]);
}

// Função para deletar dados no banco
async function deletar(id) {
    const conn = await db.connect();

    const sql = 'DELETE FROM tarefas where id_tarefa=?;';

    return await conn.query(sql, [id]);
}

module.exports = { consultar, consultarCondicional, inserir, atualizar, deletar };