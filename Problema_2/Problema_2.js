'use strict';

const ordenarPorClave = (lista, clave) =>
  [...lista].sort((a, b) =>
    a[clave] < b[clave] ? -1 : a[clave] > b[clave] ? 1 : 0
  );

if (require.main === module) {
  const telefonos = [
    { make: 'Nokia', model: 216, color: 'Black' },
    { make: 'Mi Max', model: 2, color: 'Gold' },
    { make: 'Samsung', model: 7, color: 'Blue' }
  ];
  console.log(JSON.stringify(ordenarPorClave(telefonos, 'model'), null, 2));
}

module.exports = { ordenarPorClave };
