let precio = Number(prompt("Por favor ingrese el valor unitario del producto: "))
let cantidad = Number(prompt("Por favor ingrese cuantos productos compró: "))
let descuento = Number(prompt("Por favor ingrese el valor del descuento del producto"))
const Subtotal=precio*cantidad// El valor del precio multiplicado por la cantidad
let descu=(Subtotal*descuento)/100 

//Este if hace referencia a que si el valor de las entradas no es un numero es decir Nan que saque una alerta, de lo contrario muestre los calculos
if (Number.isNaN(precio) || Number.isNaN(cantidad) || Number.isNaN(descuento)) {
  alert("Revisa los datos");
} else {

let valor1=Subtotal-descu
let valor2=valor1*0.19;
let valor3=valor1+valor2
let Total=valor3

console.log(`Subtotal: ${Subtotal.toLocaleString("es-CO", { style: "currency", currency: "COP" })}`);
console.log(`Descuento: ${descuento.toLocaleString("es-CO", { style: "currency", currency: "COP" })}`);
console.log(`IVA (19%): ${valor2.toLocaleString("es-CO", { style: "currency", currency: "COP" })}`);
console.log(`Total: ${Total.toLocaleString("es-CO", { style: "currency", currency: "COP" })}`);

} ;
