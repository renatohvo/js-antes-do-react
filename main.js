document.body.innerHTML = '<h1>JS - Antes do React</h1>';

// Nullish Coalescing Operator
const nome = null;
document.body.innerHTML += '<p>Seu nome é: ' + (nome ?? 'Não informado!') + '</p>';

// Objeto
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

// Desestruturação
const { address, idade: age, nickname = 'Mary' } = user
document.body.innerHTML += '<p>' + JSON.stringify({ address, age, nickname }) + '</p>';
function mostrarIdade({ idade }) {
  return idade;
}
document.body.innerHTML += '<p>Sua idade é: ' + mostrarIdade(user) + '</p>';

// Rest Operator
const { name, idade, ...rest } = user;  
document.body.innerHTML += '<p>' + JSON.stringify(rest) + '</p>';
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, ,third, ...res] = array;
document.body.innerHTML += '<p>' + JSON.stringify({ first, third, res }) + '</p>';

// Short Syntax
const employeeName = 'Renato Henrique';
const employeeAge = 30;
const employee = {
  employeeName,
  employeeAge,
  address: {
    street: 'Rua Teste',
    number: 176,
    zip: {
      // code: '12312123',
      city: 'Rio Grande'
    },
    // showFullAddress() {
    //   return 'ok';
    // }
  },
};
document.body.innerHTML += '<p>' + JSON.stringify({ employee }) + '</p>';

// Optional Chain
document.body.innerHTML += '<p>' + JSON.stringify(employee.address?.zip?.code ?? 'Não Informado') + '</p>';
document.body.innerHTML += '<p>' + JSON.stringify(employee.address?.showFullAddress?.()) + '</p>';
