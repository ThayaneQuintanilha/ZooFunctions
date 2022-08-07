const data = require('../data/zoo_data');

const { employees, species } = data;
// Implemente uma função getOldestFromFirst... deve encontrar o animal mais velho da espécie gerenciada por uma pessoa colaboradora.
function getOldestFromFirstSpecies(id) {
  const findId = employees.find((employee) => employee.id === id);
  const firstEspecie = findId.responsibleFor[0];
  const findLion = species.find((lion) => lion.id === firstEspecie);
  const findMaior = findLion.residents.sort((a, b) => b.age - a.age)[0];

  return Object.values(findMaior);
}

module.exports = getOldestFromFirstSpecies;
