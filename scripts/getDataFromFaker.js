const faker = require('faker');

const cardsData = { cards: [] };
for (let i = 1; i <= 300; i++) {
  cardsData.cards.push(faker.helpers.contextualCard());
}
console.log(JSON.stringify(cardsData));
