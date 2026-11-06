'use strict';

const eliminarElementos = (lista, elementosABorrar) =>
  lista.filter((elemento) => !elementosABorrar.includes(elemento));

if (require.main === module) {
  const colores = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
  const elementosABorrar = ['amarillo', 'café', 'blanco'];
  console.log(JSON.stringify(eliminarElementos(colores, elementosABorrar)));
}

module.exports = { eliminarElementos };
