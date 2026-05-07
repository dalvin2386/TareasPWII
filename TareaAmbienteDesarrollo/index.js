var colors = require("colors");
const CalculadoraEnvio = require("./src/CalculadoraEnvio");

const peso = 5;
const distancia = 50;

console.log("==================================".green);
console.log("  Calculadora de Costo de Envío".green);
console.log("==================================".green);
console.log("");

const envio = new CalculadoraEnvio(peso, distancia);
envio.calcular();

console.log("".green);
console.log("==================================".green);
