const data = require('../data/zoo_data');

const { species, employees } = require('../data/zoo_data');

// 1 amigo me ajudou na função array, pois eu estava com dificuldades.

const array = employees.map((obj) => {
  const arr = {
    id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    species: obj.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).name),
    locations: obj.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).location),
  };
  return arr;
});

function getEmployeesCoverage(elemento) {
  if (elemento === undefined) return array;
  const validarEntrada = array
    .find((element) => element.fullName.includes(Object.values(elemento))
      || element.id.includes(Object.values(elemento)));
  if (validarEntrada === undefined) {
    throw new Error('Informações inválidas');
  }
  return validarEntrada;
}

module.exports = getEmployeesCoverage;
