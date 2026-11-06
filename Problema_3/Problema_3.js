'use strict';

const transponer = (matriz) => {
  if (!Array.isArray(matriz) || !matriz.every(Array.isArray)) {
    throw new TypeError('La matriz debe ser una lista de listas.');
  }
  if (matriz.length === 0) return [];
  if (!matriz.every((fila) => fila.length === matriz[0].length)) {
    throw new Error('Todas las filas deben tener la misma longitud.');
  }

  return matriz[0].map((_, columna) =>
    matriz.map((fila) => fila[columna])
  );
};

if (require.main === module) {
  console.log(JSON.stringify(transponer([[1, 2, 3], [4, 5, 6], [7, 8, 9]])));
}

module.exports = { transponer };
