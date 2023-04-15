"use strict";

require("core-js/modules/es.promise.js");
const express = require('express');
const {
  consultar,
  atualizar,
  inserir,
  deletar,
  consultarCondicional
} = require('../dao/tarefasDAO');
const router = express.Router();
router.get('/', async (req, res) => {
  const dados = await consultar();
  res.send(dados);
});
router.get('/condicional', async (req, res) => {
  const tarefa = req.body;
  const dados = await consultarCondicional(tarefa.executado);
  res.send(dados);
});
router.post('/', async (req, res) => {
  const tarefa = req.body;
  var result = await inserir(tarefa);
  res.send('Inserido com sucesso!');
});
router.put('/', async (req, res) => {
  const tarefa = req.body;
  var result = await atualizar(tarefa);
  res.send('Atualizado com sucesso!');
});
router.delete('/', async (req, res) => {
  const tarefa = req.body;
  var result = await deletar(tarefa.id_tarefa);
  res.send('Deletado com sucesso!');
});
module.exports = router;