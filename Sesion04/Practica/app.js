// let numero= Number(prompt("Digite un número para crearle su tabla: "))

// for (let i=0; i<=10; i++ ) {
//     console.log(`${numero}*${i} = ${numero*i}`)
// }

// let numero1= Number(prompt("Digite un número para crearle su tabla: "))
// for (let i=20; i>=0; i-- ) {
//     console.log(`${numero1}*${i} = ${numero1*i}`)
// }

// let numero= Number (prompt("Digite un número para crear su tabla: "));

// let i=0

// while (i<=10){
//     console.log(`${numero}*${i}= ${numero * i}`)
//     i++
// }

// let ahorro = 0
// let semanas = 0

// while (ahorro < 100000) {
//     ahorro += 15000;
//     semanas += 1;
//     console.log(`Llegaste a ${ahorro} en ${semanas} semanas`);
// };

//Alcancia

// let ahorro = Number(prompt("Cuanto va a ahorrar: "))
// let semanas = 0
// let suma = 0

// while (suma < 100000) {
//     suma += ahorro;
//     semanas += 1;
//     console.log(`Llegaste a ${suma} en ${semanas} semanas`);
// } ;

//Suma y cuenta

// let N= Number(prompt("Ingrese un número: "))
// let suma = 0
// let contpares = 0
// let contimpares=0

// for (let i = 1; i <= N; i++ ) {
//     suma += i
//     if (i % 2 == 0) 
//         contpares += 1
//     else
//         contimpares+=1
// }

// alert (`La suma de los números entre 1 y ${N} es ${suma}`)
// alert (`La cantidad de los pares entre 1 y ${N} es ${contpares}`)
// alert (`La cantidad de los pares entre 1 y ${N} es ${contimpares}`)


let nota;
do {
  nota = Number(prompt("Nota de 0 a 5:"));
} while (Number.isNaN(nota) || nota < 0 || nota > 5);
;

console.log(`Nota válida: ${nota}`) 

// let mensaje;
// do {
//     resp=prompt("Esta todo claro??").toLocaleLowerCase()
// } while (resp != "si");

// console.log("Comprendido el tema")

// let suma = 0;
// const cantidad = 4;

// for (let i = 1; i <= cantidad; i++) {
//   suma = 0;
//   let nota = Number(prompt(`Nota ${i}:`));
//   suma = suma + nota;
// }

// console.log(`Promedio: ${suma / cantidad}`);

// let opcion;
// let total = 0;

// do {
//   opcion = prompt("1 Cuaderno $4.500 · 2 Lápiz $1.200 · 3 Borrador $800 · 0 Pagar");
//   switch (opcion) {
//     case "1": total += 4500; break;
//     case "2": total += 1200; break;
//     case "3": total += 800; break;
//     case "0": break;
//     default: alert("Opción no válida");
//   }
//   console.log(`Llevas ${total}`);
// } while (opcion !== "0");

// alert(`Total a pagar: ${total}`);