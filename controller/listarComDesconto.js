const model_servicos = require('../model/index')

exports.retornarListaServicos = (desconto) => {
    const listaServicos = model_servicos.buscaListaServicos()
    
    return listaServicos.map(item => item.preco * (1 - desconto / 100))
}