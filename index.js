const array1 = [1, 3, 4, 5, 6, 7, 10];
const array2 = [2, 4, 6, 8, 10, 12, 14];

// map, find , filter y reduce

// tanto map find some filter siguen esta sintaxis: array.prototype.map([funcion(item,index,array)],[optional: thisArg se usa para remplazar el array que vas a recorrer el contenido de items pero no la secuencia es decir si array tiene 5 elementos recorrera 5 en secuencia pero el this hara que item sea lo que tenga this]) recorre uno a uno cada item del array y debes retornar algo siempre para cada uno en cada posicion especcifica si retornas null o undefined el array no se reducira simplemente los items seran esos valores.
// tip: tanto map find some filter recorre uno a uno desde el inicio aplicando el callback descrito en el comentario anterior y aplica el body de del callback a cada item en caso del map solo espera return de algun valor en caso de find filter some que son condicionales esperan condiciones o returns true o false
// multiply 10 inline

const multply100 = array1.map((n) => n * 10);

const only_pairs_mulply_100 = array1.map((n) =>
  n % 2 == 0 ? n * 100 : undefined
);

// find: recorre el array hasta encontrar la primera instancia que obedece al callback que le pases y se detiene hasta ahi.
const mayor_a_5 = array1.find((n) => n > 5);

//tip: para verificar si existe o no un elemento en un array se utiliza array.includes([elemento]) o array.some([ Function(item,index,array)],[thisarg]) estos retornan true o false el some le pones una condicion asi como el find e itera a cada uno y al primer que lo encuentre se detiene

// filter
// Los callback del filer deben retornar true o false es decir una condicion a la cual retornara true o false
// Este callback es con array function pero con brackets y no inline se lo puede haer inline
let pares_y_mayores_a_5 = array1.filter((item) => {
  if (item > 5 && item % 2 == 0) {
    return true;
  }
  return false;
});
// haciendo inline la misma ecuacion
pares_y_mayores_a_5 = array1.filter((item) => item > 5 && item % 2 == 0);
// console.log(pares_y_mayores_a_5)

let is_pares_y_mayores_a_5 = array1.some((item) => item > 5 && item % 2 == 0);
// console.log(is_pares_y_mayores_a_5)

// intersection array1 y array2

const intersection = array1.filter((item) => array2.includes(item));
// console.log(intersection);

// left intersecion array1 y array2 siguen

const left_intersection = array1.filter((item) => !array2.includes(item));
// console.log(left_intersection)

// right intersection
const right_intersection = array2.filter((item) => !array1.includes(item));
// console.log(right_intersection)

// Differencia entre array1 y array2
//  esto es la union de left y right intersection

const left_right_union = [...left_intersection, ...right_intersection];
const difference = array1
  .filter((item) => !array2.includes(item))
  .concat(array2.filter((item) => !array1.includes(item)));
// console.log(left_right_union,difference, JSON.stringify(left_right_union)===JSON.stringify(difference))

// reduce
// array.prototype.reduce([callback(acumulator,currentValue,index,array)],valorInicial)
// si valor inicial no se provee entonces valorinicial es el primer item y se salta la primera iteracion de ese item apuntando a la segunda.
// si el array esa vacio y no se proveyo el valorinicial entonces lanzara error
// si el array tiene un solo item y se provee un valor inicial se retorna ese valor inicial y no se itera
// si el array es vacio y se provee un valorinicial pasa lo mismo que el comentario anterior se retorna el valorinicial

// estos dos reduce hacen los dos ultimos comentarios
// console.log([1].reduce((acumulator,current)=> acumulator+current ))
// console.log([].reduce((acumulator,current)=> acumulator+current,1 ))

// sort

/* 
- Modifica el mismo arreglo ordenandolo.
- Retorna el mismo array ordenado osea el mismo puntero del array ordenado
- por lo tanto no crea un nuevo array.
Si no se provee compareFunction, los elementos son ordenados convirtiéndolos a strings y comparando la posición del valor Unicode de dichos strings. Por ejemplo, "Cherry" viene antes que "banana"  (porque las mayúsculas van antes que las minúsculas en la codificación Unicode) . En un ordenamiento numérico, 9 está antes que 80, pero dado que los números son convertidos a strings y ordenados según el valor Unicode, el resultado será "80" antes que "9".


Si se provee compareFunction, los elementos del array son ordenados de acuerdo al valor que retorna dicha función de comparación. Siendo a y b dos elementos comparados, entonces:

Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero.
Si compareFunction(a, b) retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes. Nota: el estandar ECMAscript no garantiza este comportamiento, por esto no todos los navegadores (p.ej.  Mozilla en versiones que datan hasta el 2003) respetan esto.
Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice menor que a.
compareFunction(a, b) siempre debe retornar el mismo valor dado un par especifico de elementos a y b como sus argumentos. Si se retornan resultados inconsistentes entonces el orden de ordenamiento es indefinido.

*/

let items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

//   quiero ordenarlos descendentemente con sus valores
const descendentes = [...items].sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

// console.log(descendentes);

//  quiero ordenarlos ascendentement con sus valores
const ascendentes = [...items].sort(function (a, b) {
  if (a.value > b.value) {
    return -1;
  }
  if (a.value < b.value) {
    return 1;
  }
  // a must be equal to b
  return 0;
});
// console.log(ascendentes);

// tip: normalmente siempre se aplica la resta de a-b para hacer descendente ya que si a-b resulta negativo entonces a va primero que b en orden y si a-b resulta positivo entonces b va primero y asi consigues poner la descendencia

// entonces a-b resultaria una ordenacion descendente

const desc = [...items].sort((a, b) => a.value - b.value);
// console.log(desc);


const ref = items.sort();

console.log(ref==items,ref===items)
// con esto comprobamos que la referencia es la misma para comparar referenias se usa == o === da lo mismo porque la utilidad de == y === es para otras cosas
