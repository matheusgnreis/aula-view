const express = require('express');
const router = express.Router();
const controllerComDesconto = require('../controller/listarComDesconto');
const controllerListarTodos = require('../controller/listarTodos');

/* GET home page. */
router.get('/servicos', function(req, res, next) {
  const { taxa_desconto } = req.query
  const listaComDesconto = controllerComDesconto.retornarListaServicos(taxa_desconto || 0)
  const listarTodos = controllerListarTodos.retornarListaTodosServicos()

  res.render('index', { 
    desconto: listaComDesconto,
    listaSemDesconto: listarTodos
  });
});

module.exports = router;
