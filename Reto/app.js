let nombre = prompt("Por favor ingrese su nombre: ")

let nota = Number(prompt("Por favor ingrese su nota: "))

if (Number.isNaN(nota)) {
    alert("La nota debe ser un número");
} ;
if (nota <= 0 && nota >= 5) { 
    alert("La nota debe estar dentro del rango") 
} else if (nota >=  4.6) {
    console.log(`El nombre del aprendiz es ${nombre} y la nota es ${nota.toFixed(1)}`)
    console.log("🏆 Excelente")
    alert("🏆 Excelente") 
}  
else if (nota <= 4.5 && nota >= 4) {
    console.log(`El nombre del aprendiz es ${nombre} y la nota es ${nota.toFixed(1)}`)
    console.log("⭐ Sobresaliente")
    alert("⭐ Sobresaliente")
} 
else if (nota <= 3.9 && nota >= 3) {
    console.log(`El nombre del aprendiz es ${nombre} y la nota es ${nota.toFixed(1)}`)
    console.log("✅ Aprobado")
    alert("✅ Aprobado") 
} 
else if (nota <=  2.9) {
    console.log(`El nombre del aprendiz es ${nombre} y la nota es ${nota.toFixed(1)}`)
    console.log("❌ No aprobado")
    alert("❌ No aprobado") 
}  ;
