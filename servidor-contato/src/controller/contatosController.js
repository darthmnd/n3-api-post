const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const comparaDados = (request, response) => {
  const contato = resquest.body
  const usuarios = request.body.nome
  const data = request.body.dataNascimento
  const concat = usuarios + data
  // console.log(concat)
  // if(nomeUsuario && data === add){
  //   res.redirect(409, "https://http.cat/409") 
 model.agenda.contatos.push(contato)
  response.status(200).send()
}

const add = (request, response) => {
  let dadosContato = request.body
  dadosContato.id = Math.random().toString(36).substr(-8)
  model.agenda.contatos.push(dadosContato)
  response.status(200).send() 
}

module.exports = {
  getAll,
  add,
  comparaUsuarios: comparaDados
}