const express = require('express');
const { consultar, atualizar, inserir, deletar } = require('../dao/tarefasDAO');
const router = express.Router();

router.get('/', async (req, res) => {
    const dados = await consultar();
    res.send(dados);
})

router.post('/', async (req, res) => {
    const tarefa = req.body;

    var result = await inserir(tarefa);
    console.log(result);
    res.send('Inserido com sucesso!');
})

router.put('/', async (req, res) => {
    const tarefa = req.body;

    var result = await atualizar(tarefa);
    console.log(result);
    res.send('Atualizado com sucesso!');
})

router.delete('/', async (req, res) => {
    const tarefa = req.body;

    var result = await deletar(tarefa.id_tarefa);
    console.log(result);
    res.send('Deletado com sucesso!');
})

module.exports = router;