const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// Implemente uma função getAnimalsOlderThanque deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais espécies possuem essa idade ou são mais velhos.

function getAnimalsOlderThan(animal, age) {
  return species.find((ani) => ani.name === animal).residents.every((ida) => ida.age >= age);
}

module.exports = getAnimalsOlderThan;
