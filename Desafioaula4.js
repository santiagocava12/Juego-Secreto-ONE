let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript' , 'C' , 'C++' , 'Kotlin' , 'Python'];
let numerosLista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Agregar elementos a la lista\

lenguagesDeProgramacion.push('Java' , 'Ruby' , 'GoLang');

function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamente();

  function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesReversoSeparadamente();

  function promedioLista() {
    let suma = 0; // Declare suma variable outside of the loop
    for (let i = 0; i < numerosLista.length; i++) {
        suma += numerosLista[i];
    }
    return suma / numerosLista.length;
}
console.log(promedioLista());

function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);

function sumaLista(listasuma){
    let suma = 0;
    for (let i = 0; i < listasuma.length; i++) {
        suma += listasuma[i];
    }
    console.log('Suma:' , suma);
}

let Vale = [1, 2, 3, 4, 5];

sumaLista(Vale);

function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

  function sumaListas(){
    
  }

  function sumLists(list1, list2) {

    let result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i] + list2[i]);
    }

    return result;
}

// Ejemplo de uso:
const list1 = [1, 2, 3];
const list2 = [4, 5, 6];
const sumResult = sumLists(list1, list2);

console.log(sumResult); // [5, 7, 9]

function cuadradoLista(lista1) {

  let result = [];
  for (let i = 0; i < lista1.length; i++) {
      result.push(lista1[i] * lista1[i]);
  }

  return result;
}

// Ejemplo de uso:
const lista1 = [4, 5, 6];
const sumaResult = cuadradoLista(lista1);

console.log(sumaResult); 