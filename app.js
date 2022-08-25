/************************************************************************************************** 
 * Objetivo:        Praticar array
 * Autor:           Milena Araujo de Souza
 * Data de Criacao: 25/08/2022
 * Versao:          1.0
***************************************************************************************************/

console.log('---------- ARRAY PAR ÍMPAR ----------')

const {pares, impares, parImpar} = require('./modulo/parImaprArray.js')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o primeiro valor: ', function(valor1){
    let numero1 = parseFloat(valor1)

    entradaDados.question('Digite o segundo valor: ', function(valor2){
        let numero2 = parseFloat(valor2)

        console.log(parImpar(numero1, numero2))
    })
})