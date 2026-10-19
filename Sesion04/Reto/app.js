let random = Math.floor(Math.random() * 100) + 1
console.log(random)

let valida=false
let contador=0
let numero_mayor=0
let numero_menor=0

while (valida==false) {
    let intento = Number(prompt("Por favor adivine el número"));
    contador+=1
    if (contador>6) {
        valida=true
        alert("No puede tiene más intentos")
        break
    } else {
    if (intento < random) {
    numero_menor = intento;
    console.log("Más alto");
    console.log(`Vas en el intento ${contador}`);
} else if (intento > random) {
    numero_mayor = intento;
    console.log("Más bajo");
    console.log(`Vas en el intento ${contador}`);
} else {
    console.log(`¡Adivinaste en el intento ${contador}!`);
    break
}
    }
}

