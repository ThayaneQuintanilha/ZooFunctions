const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');
// A função countEntrantsresponsável será calculada por idade da quantidade de visitantes por faixa:
function countEntrants(entrants) {
  const child = entrants.filter((idade) => idade.age < 18).length;
  const adult = entrants.filter((idade) => idade.age >= 18 && idade.age < 50).length;
  const senior = entrants.filter((idade) => idade.age >= 50).length;
  return { child, adult, senior };
}
// A função calculateEntryserá responsável por somar ou valor da entrada das pessoas no zoológico:
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0; // Solicitei ajuda aqui no return Object a um amigo!

  const ageEntrants = countEntrants(entrants);

  const calculoKid = ageEntrants.child * prices.child;
  const calculoAdult = ageEntrants.adult * prices.adult;
  const calculoSenior = ageEntrants.senior * prices.senior;
  const sum = calculoKid + calculoAdult + calculoSenior;

  return sum;
}

module.exports = { calculateEntry, countEntrants };
