const Leite = require('leite')
const leite = new Leite()
const nome = leite.pessoa.primeiroNome()

export default {
  nome: nome,
  sobreNome: leite.pessoa.sobrenome(),
  dataNasc: '21/07/1993',
  cpf: leite.pessoa.cpf(),
  email: `${nome}@${Cypress.env('MAILOSAUR_SERVER_ID')}.mailosaur.net`,
  senha: Cypress.env('USER_PASSWORD'),
  pass: 'Teste12345@',
  phone: '32988380376',
  nomeLoja: nome,
  razaoSocial: nome,
  nomeFantasia: nome,
}