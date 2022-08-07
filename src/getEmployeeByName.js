const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
// Implemente uma função getEmployeeByNameque deve buscar por pessoas colaboradoras através de seu primeiro ou último nome.

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
    .find((name) => name.firstName === employeeName || name.lastName === employeeName);
}

module.exports = getEmployeeByName;
