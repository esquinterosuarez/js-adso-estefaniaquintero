//Función año bisiesto

function anobisiesto(año){

    const opción1= año % 4 
    const opción2=año % 100
    const opción3= año % 400

if ((opción1 === 0 && opción2 !== 0 )||opción3 === 0 ) {
    return "Es año bisiesto"
} else {
    return "No es año bisiesto"
}
};

console.log(anobisiesto(2007))
console.log(anobisiesto(2020))
console.log(anobisiesto(2001))
console.log(anobisiesto(2024))


// Número mayor


function mayorDeTres(a, b, c) {

    let numero_mayor=0
    if (a > numero_mayor) {
        numero_mayor=a
    } 
    if (b > numero_mayor) {
        numero_mayor =b;
    } 
    if (c > numero_mayor) {
        numero_mayor = c;
    }
    return ` El número mayor es ${numero_mayor}` 
};
    

console.log(mayorDeTres(2,4,8))
console.log(mayorDeTres(8,8,8))
console.log(mayorDeTres(56,30,50))
console.log(mayorDeTres(45,78,8))


// Función flecha 

const precioFinal = (precio, descuento) => {
    if (Number.isNaN(descuento)){
        return ` El precio final es ${precio} `
    } else {
    let precio1= (precio*descuento)/100
    let precio2=precio-precio1
    return ` El precio final es ${precio2} `
    }
};

console.log(precioFinal(2000, 10))
console.log(precioFinal(2000,0))
console.log(precioFinal(2200,50))