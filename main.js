document.body.innerHTML = '<h1>JS - Antes do React</h1>';

// Nullish Coalescing Operator
const nome = null;
document.body.innerHTML += '<p>Seu nome é: ' + (nome ?? 'Não informado!') + '</p>';

//Objeto
const user = {
  name: 'Maria João',
  idade: 27,
  address: {
    street: 'Rua Teste',
    number: 176,
  },
};
document.body.innerHTML += '<p>' + ('name' in user) + '</p>';
document.body.innerHTML += '<p>' + ('nickname' in user) + '</p>';
document.body.innerHTML += '<p>' + Object.keys(user) + '</p>';
document.body.innerHTML += '<p>' + JSON.stringify(Object.values(user)) + '</p>';
document.body.innerHTML += '<p>' + JSON.stringify(Object.entries(user)) + '</p>';
