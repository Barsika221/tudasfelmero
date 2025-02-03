import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { open } from 'node:fs/promises';

const { osszead, kivon, szoroz, eloszt } = require('./szamologep.js');
var isEven = require('is-even');

const rl = readline.createInterface({ input, output });

let answer = await rl.question('Kérem az első számot: ');
let a = parseInt(answer);
answer = await rl.question('Kérem a második számot: ');
let b = parseInt(answer);

console.log(`Összeadás: ${a} + ${b} = ${osszead(a, b)} és ${isEven(osszead(a, b)) ? 'páros' : 'páratlan'}`);
console.log(`Kivonás: ${a} - ${b} = ${kivon(a, b)} és ${isEven(kivon(a, b)) ? 'páros' : 'páratlan'}`);
console.log(`Szorzás: ${a} * ${b} = ${szoroz(a, b)} és ${isEven(szoroz(a, b)) ? 'páros' : 'páratlan'}`);
console.log(`Osztás: ${a} / ${b} = ${eloszt(a, b)} és ${isEven(eloszt(a, b)) ? 'páros' : 'páratlan'}`);

rl.close();

let filehandle = null;
try {
    filehandle = await open('eredmeny.txt', 'w');
    await filehandle.writeFile(`Összeadás: ${a} + ${b} = ${osszead(a, b)} és ${isEven(osszead(a, b)) ? 'páros' : 'páratlan'}\n`);
} finally {
    await filehndle?.close();
}

