

// let tren = ["Ana", "Luis", "Sofía", "Juan", "Edison"];

// // Saber cuantos elementos hay

// console.log(tren.length)//Para contar
// console.log(tren[3])//Ir a una posición especifica
// console.log(tren[tren.length-1])// Ir a la ultima posición
// tren.push("Boris")// Agregar a la lista de ultima
// console.log(tren)

// tren.unshift("Pedro")//Agregar a la lista de primero
// console.log(tren)

// tren.pop() //Elimina el último
// console.log(tren)

// for(let i=tren.length- 1; i >= 3; i--) //Para que llegue a la posición 3 con for
//     {
//     console.log(tren[i]) // Lo que hay dentro de la posición
//     console.log(i)//Posición
//     }

// let nombre=("Estefania")

// for (let n in nombre) // para que cuente cuantas letras hay dentro de eso
//     {
// console.log(n)
// }

// let nombreArreglo= []
// for (let n of nombre) {
//     console.log(n)
//     nombreArreglo.unshift(n)
// }

// console.log(nombreArreglo.join (" "))

// for (let i=0; i < tren.length; i++){
//     console.log(`${i+1}. ${tren[1]}`)
// }

// for (const pasajero of tren ) {
//     console.log(pasajero)
// }

// console.table(tren)

const compra = []
let entrada
do {
    entrada = prompt("Ingrese un producto: ")
    compra.push(entrada)
} while (entrada != "" )

let producto
do {
    producto = prompt("¿quiere quitar un producto?")
    } while (producto=si) {
let quitar =prompt("¿Cuál quiere quitar?")
let quitar2= compra.indexOf(quitar)
compra.splice(quitar2)
}

console.log(compra)

compra.pop()
console.table(compra)

for (let i=0; i < compra.length; i++){
    console.log(`${i+1}. ${compra[1]}`)
}


