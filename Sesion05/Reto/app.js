function pesosadolares () { 
    let pesos = Number(prompt("Digite cuantos pesos tiene: "))
    let dolares = Number(prompt("Digite el valor del dolar actual: "))
    return `La conversión de ${pesos} a ${dolares} es ${pesos/dolares} dolares`
}

function temperatura() {
    let c = Number(prompt("Digite cuantos grados hay: "))
    return ` Los grados ${c} C° son en ${c*9/5+32} F°`
}

function kmamillas() {
    let km= Number(prompt("¿Cuantos kilometros recorrío?"))
    let kmmil= 0.621371
    return `Los ${km} es igual a ${kmmil*km} millas`
}

function segxh () {
    let segundos= Number(prompt("Cuantos segundos han pasado?"))
    return `Los segundos que pasaron fue ${segundos} por lo que en horas es ${segundos/3600}`
}
let opciones= prompt("Menú\n1. Pesos a dolares\n2. °C a °F\n3. KM a Millas\n4. Segundos a Horas\n.0 Salir")
while (opciones !=0) {
    switch (opciones) {
        case "1":
            console.log (pesosadolares()) 
            break;
        case "2":
            console.log(temperatura())
            break;
        case "3":
            console.log(kmamillas())
            break;
        case "4":
            console.log(segxh())
            break;
        default:
            alert("Debes elegir una opción entre 0 y 4")
            console.log ("Debes elegir una opción entre 0 y 4")
            break;
            
    }
    opciones= prompt("Menú\n1. Pesos a dolares\n2. °C a °F\n3. KM a Millas\n4. Segundos a Horas\n.0 Salir")
}