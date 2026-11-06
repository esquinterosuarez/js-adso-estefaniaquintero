const agenda = [ {nombre: "daniela", telefono: 3239876026, correo:"danielitagomez@gmail.com"},
{nombre: "sergio", telefono: 3239870026, correo:"checho90864@gmail.com"},
{nombre: "natalia", telefono: 3239856726, correo:"nati45930@gmail.com"},
]

function buscarporNombre(nombre) {
    let buscador = null
    for (const x of agenda) {
        if (x.nombre===nombre) {
            buscador=x;
            break;
        }
    }
    if (buscador) {
    console.log (` El contacto es: nombre: ${buscador.nombre}, telefono: ${buscador.telefono}, correo: ${buscador.correo}`);
    } else {
    console.log ("No existe ese nombre");
    }
}

function menu() {
    let contacto;

    do {
        contacto = prompt(
            "Opciones\n" +
            "1. Agregar un contacto\n" +
            "2. Ver la agenda\n" +
            "3. Buscar un contacto\n" +
            "4. Salir\n\n" +
            "Elige una opción:"
        );

        switch (contacto) {
            case "1":
                let agregarcontacto = prompt("Ingrese el nombre del contacto: ");
                let agregarcontacto2 = prompt("Ingrese el telefono: ");
                let agregarcontacto3 =prompt ("ingrese el correo");
                agenda.push ({nombre:agregarcontacto, telefono: agregarcontacto2, correo:agregarcontacto3});
                console.log(agenda)
                break;
            case "2":
                console.table(agenda);
                break;
            case "3":
                let buscarcontacto = prompt ("Ingrese el nombre del contacto: ");
                buscarporNombre(buscarcontacto);
                break;
            case "4":
                console.log("Fin");
                break;
            default:
                console.log("Opción no válida, intenta de nuevo");
        }
    } while (contacto !== "4");
}

menu();