const pedidos = [
    { id: 1, cliente: "Ana", plato: "Bandeja paisa", cantidad: 2, precioUnitario: 32000, estado: "entregado", domicilio: true },
{ id: 2, cliente: "Luis", plato: "Ajiaco", cantidad: 1, precioUnitario: 28000, estado: "pendiente", domicilio: false },
{ id: 3, cliente: "Sofía", plato: "Arepa de choclo", cantidad: 4, precioUnitario: 8000, estado: "entregado", domicilio: true },
{ id: 4, cliente: "Juan", plato: "Sancocho", cantidad: 3, precioUnitario: 26000, estado: "pendiente", domicilio: true },
{ id: 5, cliente: "María", plato: "Empanadas x6", cantidad: 2, precioUnitario: 12000, estado: "entregado", domicilio: false },
{ id: 6, cliente: "Pedro", plato: "Bandeja paisa", cantidad: 1, precioUnitario: 32000, estado: "entregado", domicilio: true },
{ id: 7, cliente: "Camila", plato: "Mondongo", cantidad: 2, precioUnitario: 25000, estado: "pendiente", domicilio: false },
{ id: 8, cliente: "Andrés", plato: "Arroz con pollo", cantidad: 3, precioUnitario: 22000, estado: "entregado", domicilio: true },
{ id: 9, cliente: "Valentina", plato: "Ajiaco", cantidad: 2, precioUnitario: 28000, estado: "entregado", domicilio: false },
{ id: 10, cliente: "Daniel", plato: "Chicharrón", cantidad: 5, precioUnitario: 15000, estado: "pendiente", domicilio: true }
];

// PUNTO 1: 

// Agrega el total a cada pedido
const pedidosConTotal = pedidos.map((pedido) => ({
...pedido,
  total: pedido.cantidad * pedido.precioUnitario,
}));
console.table(pedidosConTotal);

// PUNTO 2: ¿cuántos pedidos están pendientes?

const conEstado = pedidos.filter((a) => a.estado === "pendiente");
console.log(`Los pedidos que están pendientes son ${conEstado.length}`);

// PUNTO 3:

const entregados = pedidos.filter((pedido) => pedido.estado === "entregado");
console.log(entregados);

const totalEntregados = entregados.reduce(
  (acumulado, pedido) => acumulado + pedido.cantidad * pedido.precioUnitario,
0
);
console.log(`El total vendido de los productos entregados es ${totalEntregados}`);

// PUNTO 4: Los 3 más grandes pedidos

const ranking = pedidos.toSorted((a, b) => b.precioUnitario - a.precioUnitario);
console.table(ranking.slice(0,3));

// PUNTO 5: Llamar un pedido

const llamarID = Number(prompt("Digita el código del pedido: ")) ;
const busquedaID = pedidos.find((a) => a.id == llamarID);
if (busquedaID) {
    console.log(busquedaID);
} else {
    console.log("No se encontró un pedido con ese código");
}

// PUNTO 6: ¿que pedido falta por entregar?

const pedidoPend= pedidos.some((a) => a.estado === "pendiente");
console.log(pedidoPend);