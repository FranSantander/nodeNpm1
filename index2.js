const chalk = require('chalk')
const { v1: uuidv1} = require('uuid')
const { v4: uuidv4} = require('uuid')
const moment = require('moment')

const consulta = {
    fecha: moment().add(10000, 'days').format('MMM Do YY'),
    ID: uuidv1(),
}

console.log(consulta);