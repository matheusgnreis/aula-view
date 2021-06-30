const express = require('express');
const router = express.Router();
const controllerComDesconto = require('../controller/listarComDesconto');
const controllerListarTodos = require('../controller/listarTodos');

/* GET home page. */
router.get('/', function(req, res, next) {
  const listaComDesconto = controllerComDesconto.retornarListaServicos(10)
  const listarTodos = controllerListarTodos.retornarListaTodosServicos()

  res.render('index', { 
    desconto: listaComDesconto,
    listaSemDesconto: listarTodos
  });
});

module.exports = router;
