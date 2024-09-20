// const generateName = require('sillyname');
import generateName from 'sillyname';
// to use import, you have to change the type to module in the package.json

let sillyName = generateName();
console.log(`My name is ${sillyName}`);