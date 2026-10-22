// function saludar (nombre) {
//     console.log(`Hola, ${nombre}`);

// }

// saludar ("Ana")

// function arearectangulo(b, h){
//     return b * h
// }

// let resultado = arearectangulo(5,4)
// console.log(`El área del rectangulo es ${resultado}`)

// function arearectangulo(){
//     let b=Number(prompt("Por favor digite la base: "))
//     let h=Number(prompt("Por favor digite la altura: "))
//     return b * h
// }

// let resul = arearectangulo(5,4)
// console.log(`El área del rectangulo es ${resultado}`)


// function esPar(numero) {
//     return numero % 2 === 0;
// }

// let n = Number(prompt("Escribe un número:"));
// if (esPar(n)==true) {
//     console.log(`${n} es par`);
// } else {
//     console.log(`${n} es impar`);
// }

// Si no dicen la tasa, usa 19 %

// function calcularIVA(precio, tasa = 0.19) {
//   return precio * tasa;
// }
// console.log(calcularIVA(10000));
// console.log(calcularIVA(10000, 0.05));

// // La misma idea, más corta
// const doble = (n) => n * 2;
// const saludo = (nombre) => {
//     return `Hola, ${nombre}`;
// };
// console.log(doble(21), saludo("Sofía"));

// const doble1=(n) => {
//     return n*2
// }

// console.log(doble(21))

// let nombre = prompt("Por favor ingrese su nombre: ")

// let nota = Number(prompt("Por favor ingrese su nota: "))

// if (Number.isNaN(nota)) {
//     alert("La nota debe ser un número");
// } ;
// if (nota <= 0 && nota >= 5) { 
//     alert("La nota debe estar dentro del rango") 
// } else if (nota >=  4.6) {
//     console.log(`El nombre del aprendiz es ${nombre} y la nota es ${nota.toFixed(1)}`)
//     console.log("🏆 Excelente")
//     alert("🏆 Excelente") 
// }  
// else if (nota <= 4.5 && nota >= 4) {
//     console.log(`El nombre del aprendiz es ${nombre} y la nota es ${nota.toFixed(1)}`)
//     console.log("⭐ Sobresaliente")
//     alert("⭐ Sobresaliente")
// } 
// else if (nota <= 3.9 && nota >= 3) {
//     console.log(`El nombre del aprendiz es ${nombre} y la nota es ${nota.toFixed(1)}`)
//     console.log("✅ Aprobado")
//     alert("✅ Aprobado") 
// } 
// else if (nota <=  2.9) {
//     console.log(`El nombre del aprendiz es ${nombre} y la nota es ${nota.toFixed(1)}`)
//     console.log("❌ No aprobado")
//     alert("❌ No aprobado") 
// }  ;

function clasificarNota(nota) {
    if (nota < 3) 
        return `Nota: ${nota}: ❌ No aprobado`;
    else if (nota < 4) 
        return `Nota: ${nota}: ✅ Aprobado`;
    else if (nota <4.6 )
        return `Nota: ${nota}:⭐ Sobresaliente`;
    else 
        return `Nota: ${nota}:🏆 Excelente`
}

console.log(clasificarNota(4.8));
console.log(clasificarNota(3.2));
console.log(clasificarNota(1.5));