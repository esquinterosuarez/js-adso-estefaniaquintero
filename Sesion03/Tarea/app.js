// 1. Año Bisiesto

let año = Number(prompt("Por favor escribe un año: "))
const opción1= año % 4 
const opción2=año % 100
const opción3= año % 400

if ((opción1 === 0 && opción2 !== 0 )||opción3 === 0 ) {
    console.log("Es año bisiesto")
} else {
    console.log("No es año bisiesto")
} ;

// 2. Calculadora

let num1=Number(prompt("Por favor ingresa un número: "))
let num2=Number(prompt("Por favor ingresa otro número: "))
let opcion= prompt("Por favor escoja una operación: *, +, -, /")


switch (opcion) {
    case "*":
        console.log(` La multiplicación de ${num1}*${num2} es ${num1*num2}`);
        break;
    case "+":
        console.log(` La suma de ${num1} + ${num2} es ${num1+num2}`);
        break;
    case "-":
        let resta= num1-num2
        console.log(` La resta de ${num1}-${num2} es ${resta}`);
        break;
    case "/":
        if (num2 != 0) {
        console.log(` La división de ${num1} / ${num2} es ${num1/num2}`);
        } else{
        alert("No se puede dividir entre 0")
        }
        break;
    default:
    alert("La operación no existe")
} ;

// IMC

let peso = Number(prompt("Por favor digita tu peso: "))
let estatura = Number(prompt("Por favor digita tu estatura: "))

let resul= peso/estatura**2

if (resul <=18.5) {
    console.log("Estás en bajo peso")
} else if (resul <= 24.9){
    console.log("Estás en el peso normal")
} else if (resul <= 29.9) {
    console.log("Estás en sobrepeso")
} else if (resul >=30) {
    console.log("Estás en obesidad")
}