const model = require("../model/contatos");
const baseDados = model.agenda.contatos

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const add = (request, response) => {
  let dadosContato = request.body
  dadosContato.id = Math.random().toString(36).substr(-8)
  if (!dadosContato.nome|| !dadosContato.dataNascimento || !dadosContato.celular){
    response.status(400).send("Favor preencher todos os campos")
  } 
  if (baseDados.find(dado => dado.nome === dadosContato.nome)){
    response.status(400).send("Usuário já cadastrado")
  } else {
  model.agenda.contatos.push(dadosContato)
  response.status(201).send(dadosContato) 
  }
}

module.exports = {
  getAll,
  add,
  usuarioSigno
}
