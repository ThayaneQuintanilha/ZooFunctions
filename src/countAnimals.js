const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
// Implemente uma função countAnimalsque deve contabilizar a quantidade de espécies de animais residentes no zoológico.

const objAnimals = (specie) => specie.reduce((acumulador, curr) => {
  acumulador[curr.name] = curr.residents.length;
  return acumulador;
}, {});

function countAnimals(animal) {
  if (!animal) return objAnimals(species);

  const residentesList = species.find((specie) => specie.name === animal.specie);

  if (!animal.sex) {
    return residentesList.residents.length;
  }
  return residentesList.residents.filter((specie) => specie.sex === animal.sex).length;
}
module.exports = countAnimals;

// 1- Retorne a quantidade de animais residentes por espécies não seja no passado nenhum parâmetro.
// 2- Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro.

// 3- recebendo como parâmetro um objeto com a chave 'specie', retorna a quantidade de animais daquela espécie
// 4- recebendo como parâmetro um objeto com a chave 'specie' e 'sex', retorna a quantidade de animais daquela espécie, no sexo selecionado
