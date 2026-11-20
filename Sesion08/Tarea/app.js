const textoPeliculas = `[
    {"titulo": "Encanto", "anio": 2021, "genero": "Animación", "calificacion": 4.4},
    {"titulo": "El abrazo de la serpiente", "anio": 2015, "genero": "Drama", "calificacion": 4.6},
    {"titulo": "Coco", "anio": 2017, "genero": "Animación", "calificacion": 4.8},
    {"titulo": "Pájaros de verano", "anio": 2018, "genero": "Drama", "calificacion": 4.3},
    {"titulo": "Intensamente 2", "anio": 2024, "genero": "Animación", "calificacion": 4.2},
    {"titulo": "Interestelar", "anio": 2014, "genero": "Ciencia ficción", "calificacion": 4.7},
    {"titulo": "Dune", "anio": 2021, "genero": "Ciencia ficción", "calificacion": 4.1},
    {"titulo": "La estrategia del caracol", "anio": 1993, "genero": "Comedia", "calificacion": 4.5}
]`;

// PUNTO 1: Convertir en un arreglo
const deVuelta = JSON.parse(textoPeliculas);
console.log(deVuelta)

// PUNTO 2: Filtrar según una condición de peliculas

const peliSelecc = deVuelta.filter((a) => a.genero == "Animación");
console.table(peliSelecc);

const peliEstrenada = deVuelta.filter((a) => a.anio >= 2018);
console.table(peliEstrenada);

// PUNTO 3: Lista de titulos en Mayuscula

const tituloMayus = deVuelta.map((a) => a.titulo.toUpperCase());
console.log(tituloMayus);

//  PUNTO 4: Promedio 

const suma = deVuelta.reduce((total, a) => total + a.calificacion, 0);
const promedio = suma / deVuelta.length;
console.log(`Promedio de la calificación de las peliculas es : ${promedio.toFixed(2)}`);

// PUNTO 5: El top 3 de calificación

const ranking = deVuelta.toSorted((a, b) => b.calificacion - a.calificacion);
console.table(ranking.slice(0,3));