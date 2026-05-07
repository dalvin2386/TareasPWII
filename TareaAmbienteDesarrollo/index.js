var colors = require("colors");
const CalculadoraEnvio = require("./src/CalculadoraEnvio");

const peso = 7;
const distancia = 52;

console.log("==================================".green);
console.log("  Calculadora de Costo de Envío".green);
console.log("==================================".green);
console.log("");

const envio = new CalculadoraEnvio(peso, distancia);
envio.calcular();
