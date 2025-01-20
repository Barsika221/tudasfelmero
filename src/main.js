const { osszead, kivon, szoroz, eloszt } = require('./szamologep.js');
var isEven = require('is-even');

const a = 2;

const b = 1;

console.log(`Összeadás: ${a} + ${b} = ${osszead(a, b)} és ${isEven(osszead(a, b)) ? 'páros' : 'páratlan'}`);
console.log(`Kivonás: ${a} - ${b} = ${kivon(a, b)} és ${isEven(kivon(a, b)) ? 'páros' : 'páratlan'}`);
console.log(`Szorzás: ${a} * ${b} = ${szoroz(a, b)} és ${isEven(szoroz(a, b)) ? 'páros' : 'páratlan'}`);
console.log(`Osztás: ${a} / ${b} = ${eloszt(a, b)} és ${isEven(eloszt(a, b)) ? 'páros' : 'páratlan'}`);

