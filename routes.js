const express = require('express');

const tarefasController = require('./controllers/tarefasController');

const router = express.Router();

router.use('/tarefas', tarefasController)

module.exports = router;