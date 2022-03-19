/*const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.end('Hola a todos')
})

app.listen(3000)*/

const chalk = require('chalk')

console.log('Hola a todos y todas');

console.log(chalk.blue('Hola a todos'))

console.log(chalk.red('Hola a todos'))

console.log(chalk.green.bgYellow.bold('Hola a todos'))

//****************** */
//uuid
const { v4: uuidv4} = require('uuid')
console.log((uuidv4()).slice(26,32));//ultimos 6 digitos

//Moment
const moment = require('moment')
//console.log(moment());
console.log(moment().add(10,'day').format('dddd'))//ejercicio propuesto de 10 días más
console.log(moment().subtract(10,'day').format('dddd'))//menos 10 días

