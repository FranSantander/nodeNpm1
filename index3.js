const _ = require('lodash')

const num =[6, 7, 5, 9, 4, 2]

console.log(_.partition(num, (n)=> n % 2));

const numeros = [true, 0, null, undefined, '', 22, false]
console.log(_.partition(numeros, (n)=> n))

