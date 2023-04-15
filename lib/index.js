"use strict";

const express = require('express');
const router = require('./routes');
const cors = require('cors'); // Importe o middleware cors
const app = express();
const port = 3000;
app.use(cors()); // Adicione o middleware cors
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log("Servidor Todo escutando na porta ".concat(port));
});

// O código anterior do Itallo estava assim:

// const express = require('express');
// const router = require('./routes');
// const cors = require('cors'); // Importe o middleware cors
// const app = express();
// const port = 3000;

// app.use(cors()); // Adicione o middleware cors

// app.use(express.json());

// app.use(router);

// app.listen(port, () => {
//     console.log(`Servidor Todo escutando na porta ${port}`);
// })