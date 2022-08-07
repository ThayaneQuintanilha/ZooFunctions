const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
// Implemente uma função getRelatedEmployeespara controlar se uma pessoa colaboradora é e quais pessoas ela lidera.

function isManager(id) {
  return employees.some((gerentes) => gerentes.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const gerentes = isManager(managerId);

  if (gerentes !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return employees
    .filter((pessoas) => pessoas.managers
      .some((person) => person === managerId))
    .map((nome) => `${nome.firstName} ${nome.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
