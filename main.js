document.body.innerHTML = '<h1>JS - Antes do React</h1>';

// Nullish Coalescing Operator
document.body.innerHTML += '________ Nullish Coalescing Operator ________';

const nome = null;
document.body.innerHTML += '<p>Seu nome é: ' + (nome ?? 'Não informado!') + '</p>';

// Objeto
document.body.innerHTML += '________ Objeto ________';

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
document.body.innerHTML += '________ Desestruturação ________';

const { address, idade: age, nickname = 'Mary' } = user;
document.body.innerHTML += '<p>' + JSON.stringify({ address, age, nickname }) + '</p>';

function mostrarIdade({ idade }) {
  return idade;
}
document.body.innerHTML += '<p>Sua idade é: ' + mostrarIdade(user) + '</p>';

// Rest Operator
document.body.innerHTML += '________ Rest Operator ________';

const { name, idade, ...rest } = user;
document.body.innerHTML += '<p>' + JSON.stringify(rest) + '</p>';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, , third, ...res] = array;
document.body.innerHTML += '<p>' + JSON.stringify({ first, third, res }) + '</p>';

// Short Syntax
document.body.innerHTML += '________ Short Syntax ________';

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
document.body.innerHTML += '________ Optional Chain ________';

document.body.innerHTML += '<p>' + JSON.stringify(employee.address?.zip?.code ?? 'Não Informado') + '</p>';
document.body.innerHTML += '<p>' + JSON.stringify(employee.address?.showFullAddress?.()) + '</p>';

// Métodos Array
document.body.innerHTML += '________ Métodos Array ________';
document.body.innerHTML += '<p></p>';

for (const i of array) {
  document.body.innerHTML += i;
}
document.body.innerHTML += '<p></p>';

array.forEach(item => {
  document.body.innerHTML += item;
});
document.body.innerHTML += '<p></p>';

const newArray = [];
array.forEach(item => {
  newArray.push(item * 2);
});
document.body.innerHTML += '<p>' + JSON.stringify(newArray) + '</p>';

// map, filter, every, some, find, findIndex, reduce
document.body.innerHTML += '____map, filter, every, some, find, findIndex, reduce____';

// map
const newArrayMap = array.map(item => { // Array sempre do mesmo tamanho do original(map)
  if (item % 2 === 0) {
    return item * 10;
  }
  return item;
});
document.body.innerHTML += '<p>' + JSON.stringify(newArrayMap) + '</p>';

// filter
const arrayFilter = array
  .filter(item => item % 2 !== 0)
  .map(item => item * 10);
document.body.innerHTML += '<p>' + JSON.stringify(arrayFilter) + '</p>';

// every
// const arrayEverySome = [1, 2, 3, 4, 5];
const arrayEverySome = [1, 2, 3, 4, 5, 'text'];
const allIsNumber = arrayEverySome.every(item => typeof item === 'number');
document.body.innerHTML += '<p>' + JSON.stringify(allIsNumber) + '</p>';

// some
const oneItemIsNotNumber = arrayEverySome.some(item => typeof item !== 'number');
document.body.innerHTML += '<p>' + JSON.stringify(oneItemIsNotNumber) + '</p>';

// find
const par = array.find(item => item % 2 === 0);
document.body.innerHTML += '<p>' + JSON.stringify(par) + '</p>';

// findIndex
const parIndex = array.findIndex(item => item % 2 === 0);
document.body.innerHTML += '<p>' + JSON.stringify(parIndex) + '</p>';

// reduce
const soma = array.reduce((acc, item) => {
  document.body.innerHTML += acc + ' + ' + item + ' --- ';
  return acc + item;
}, 0);
document.body.innerHTML += soma + '</p>';

// Template Literals
document.body.innerHTML += '________ Template Literals ________';

const gamer = null;
const message = `Bem-vindo, ${gamer ?? 'visitante'}.`
document.body.innerHTML += '<p>' + message + '</p>';

// Promises
document.body.innerHTML += '________ Promises ________';

const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
      // reject(a + b);
    }, 2000);
  });
}
somaDoisNumeros(1, 3)
  .then(soma => {
    document.body.innerHTML += '<p>' + soma + '</p>';
  })
  .catch(err => {
    console.log(err);
  })

fetch('https://api.github.com/users/diego3g')
  .then(response => {
    return response.json();
  })
  .then(body => {
    console.log(body);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log('Finalizado')
  })

async function buscaDadosGithub() {
  try {
    const response = await fetch('https://api.github.com/users/diego3g');
    const body = await response.json();
    // console.log(body);
    return body.name;
  }
  catch (err) {
    console.log(err);
  }
  finally {
    console.log('Finalizado');
  }
}
// buscaDadosGithub();
buscaDadosGithub().then(name => {
  document.body.innerHTML += '<p>' + name + '</p>';
  console.log(name);
})
