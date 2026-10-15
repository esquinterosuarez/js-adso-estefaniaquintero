// let edad = Number(prompt("¿Cuántos años tienes?"));

// if (edad >= 18) {
//   console.log("Puedes votar 🗳️"); // Condicional
// } else {
//   console.log(`Te faltan ${18 - edad} años para votar`);
// }


// let num = Number(prompt("Escribe un numero: " ));

// if (num % 2 === 0) {
//   console.log("El número es par"); // Condicional
// } else {
//   console.log("El número es impar") ;
// }

// let compra = Number(prompt("Valor de la compra:"));
// let descuento;

// if (compra >= 100000) {
//   descuento = 20;
// } else if (compra >= 200000) {
//   descuento = 10;
// } else {
//   descuento = 0;
// }
// console.log(`Tienes ${descuento} % de descuento`);

let opcion = prompt("Elige: 1 Empanada, 2 Arepa, 3 Jugo");

switch (opcion) {
  case "1":
    console.log("Empanada: $2.500");
    break;
  case "2":
    console.log("Arepa: $3.000");
    break;
  case "3":
    console.log("Jugo: $4.000");
    break;
  default:
    console.log("Esa opción no existe");
}