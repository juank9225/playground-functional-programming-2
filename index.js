/**
 * 
 * 1. Crear un función pura
 * 2. Dar un ejemplo de inmutabilidad
 * 3. Escribir una función que no comparta estados o que no tenga efectos secundarios
 * 4. Aplicar funciones basicas de filtro, mapeo y reduce
 */

//función pura
const suma = (a,b) =>(a+b);

console.log(suma(2,3));

//inmutabilidad
const palabra = "soy juan";
const nuevaPalabra = palabra.toUpperCase();
console.log(nuevaPalabra);

//función que no comparta estados o que no tenga efectos secundarios

const duplicarValor = (values) => values*2;
console.log(duplicarValor(2));

//Aplicar funciones basicas de filtro, mapeo y reduce
const ciudades = [
  {
    pais: 'Venezuela',
    nombre: 'Maracaibo',
    habitantes: 1209000
  },
  {
    pais: 'Turquía',
    nombre: 'Denizli',
    habitantes: 850300
  },
  {
    pais: 'Italia',
    nombre: 'Siena',
    habitantes: 53700
  },
  {
    pais: 'Italia',
    nombre: 'Genova',
    habitantes: 583600
  },
  {
    pais: 'Brasil',
    nombre: 'Fortaleza',
    habitantes: 2400100
  }
];
//filter......
const poblacion = array => array.filter(({ habitantes }) =>habitantes>= 1e6);
const ciudadesPobladas = poblacion(ciudades);

console.log(ciudadesPobladas);

//map......
const nuevaCiudad = array =>array.map((paises)=>paises.pais)
const paisesNuevos =nuevaCiudad(ciudades);

console.log(paisesNuevos);


//reduce....
const obtenerHabitantes = array => array.reduce((acumulador, { habitantes }) => acumulador + habitantes, 0);

console.log(obtenerHabitantes(ciudades));







