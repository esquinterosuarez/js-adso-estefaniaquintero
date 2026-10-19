// Tabla de multiplicar

let numero= Number(prompt("Digite un número para crearle su tabla: "))

for (let i=0; i<=10; i++ ) {
    console.log(`${numero}*${i} = ${numero*i}`)
}

//Estadisticas en un grupo
let menor= 5.1
let mayor=0
let nota
let suma=0
let cnotas;
do {
    cnotas= Number(prompt("Digite la cantidad de notas que quiere ingresar: "))
} while (Number.isNaN(cnotas) || cnotas<0 )

for (let i=0; i <cnotas; i++) {
    do {
        nota=Number(prompt(`${i+1}:Digite la nota`))
    } while (Number.isNaN(nota) || nota< 0 || nota >5)
        suma+=nota
        if (nota>mayor)
            mayor=nota
        if (nota<menor)
            menor=nota
}

let promedio = suma/cnotas
console.log(`El promedio del grupo es ${promedio.toFixed(2)}`)
console.log(`La nota mayor es ${mayor}`)
console.log(`La nota menor es ${menor}`)