//1. Vamos a pasar segundos a horas de reloj

let segundos=Number(prompt("Por favor ingresa un valor en segundos: ")) // Entrada del valor de los segundos
let min=60 //Valor equivalente a un minuto en segundos
let hora=60 // Valor equilavente a una hora en minutos

let restanteMin= segundos / min //Valor para que me saque los minutos
let restantehora= restanteMin / hora
let restanteMin2= restanteMin % hora
let restanteSeg= segundos % min // Valor para que me saque los segundos
console.log(`1.Tenemos este valor en segundos ${segundos} que su valor en tiempo reloj es: `)
console.log(`${Math.floor(restantehora)} Horas`) //Mostrar en consola sin decimales el valor de las horas
console.log(`${Math.floor(restanteMin2)} Minutos`) //Mostrar el valor de los minutos sin decimal
console.log(`${restanteSeg} Segundos`)  ;//Mostrar en consola el valor de los segundos

//2. Vamos a pasar de Celsius a Fahrenheit

let C=Number(prompt("Por favor agregue un valor en grados celsius"))

if(Number.isNaN(C)) 
    {alert("Revisa los datos");

    } else {

let valor0=C*9
let valor1=valor0/5
let valor2= valor1+32
let valor_F=valor2

console.log((`2.Tenemos este valor en Celsius ${C} que su valor en F° es: `))
console.log(`F: ${valor_F}° `)
    }

//3. Vamos a calcular un promedio

let nota1= Number(prompt("Por favor ingrese su nota1: "))
let nota2= Number(prompt("Por favor ingrese su nota2: "))
let nota3= Number(prompt("Por favor ingrese su nota3: "))

let valor1= nota1+nota2+nota3
let promedio= valor1/3

console.log(`3.Tenemos 3 notas las cuales son ${nota1}, ${nota2},${nota3} y vamos a buscar su promedio que es: `)
console.log(`El promedio es: ${promedio.toFixed(2)}`) ;