//Contar palabras ejercicio 1: contarPalabras(frase): devuelve cuántas palabras tiene, aunque haya espacios de más al inicio, al final o entre palabras.

    function contarPalabras(frase) {
    let frase2 = frase.split(" ")
    let contador=0
    for (const i of frase2) {
        contador+=1
    }
    console.log(`La cantidad de palabras que hay en la frase es ${contador}`)
}

contarPalabras("ensalada de frutas con papa y gaseosa")

//formatoTitulo(frase): devuelve la frase con la primera letra de cada palabra en mayúscula y el resto en minúscula. "hOLA mUNDO" → "Hola Mundo".

function formatoTitulo(frase) {
    const palabras = frase.toLowerCase().split(" ");
    let resultado = "";

    for (const palabra of palabras) {
        const capitalizada = palabra.charAt(0).toUpperCase() + palabra.slice(1);
        resultado += capitalizada + " ";
    }

    return resultado.trim();
}

console.log(formatoTitulo("hOLA mUNDO"));
