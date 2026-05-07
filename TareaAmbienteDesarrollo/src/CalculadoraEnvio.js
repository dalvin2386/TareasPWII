class CalculadoraEnvio {
  constructor(peso, distancia) {
    this.peso = peso;
    this.distancia = distancia;
  }

  calcular() {
    var costoBase = 50;
    var recargoPeso = 0;
    var recargoDistancia = 0;

    if (this.peso > 5) {
      recargoPeso = (this.peso - 5) * 20;
    }

    if (this.distancia > 50) {
      recargoDistancia = (this.distancia - 50) * 10;
    }

    var costoTotal = costoBase + recargoPeso + recargoDistancia;

    var diasTransporte = Math.ceil(this.distancia / 100);
    var diasTotales = 2 + diasTransporte;
    var hoy = new Date();
    hoy.setDate(hoy.getDate() + diasTotales);
    var fechaEntrega = hoy.toISOString().split("T")[0];

    console.log("Peso del paquete: " + this.peso + " LB");
    console.log("Distancia del envio: " + this.distancia + " km");
    console.log("");
    console.log("Costo base: L" + costoBase.toFixed(2));
    console.log("Recargo por peso: L" + recargoPeso.toFixed(2));
    console.log("Recargo por distancia: L" + recargoDistancia.toFixed(2));
    console.log("Costo total: L" + costoTotal.toFixed(2));
    console.log("Fecha estimada de entrega: " + fechaEntrega);
  }
}

module.exports = CalculadoraEnvio;
