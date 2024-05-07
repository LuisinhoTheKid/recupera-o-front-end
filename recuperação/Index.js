const lista = [
    {
        numero: 9,
        nome: "Ana",
        nota: 9.0
    },
    {
        numero: 28,
        nome: "Angel",
        nota: 9.3
    },
    {
        numero: 12,
        nome: "Eduarda",
        nota: 6.0
    },
    // Restante da lista...
];

// Método map
function meuMap(lista, callback) {
    const resultado = [];
    for (let i = 0; i < lista.length; i++) {
        resultado.push(callback(lista[i], i, lista));
    }
    return resultado;
}

console.log("Método map:");
const resultadoMap = meuMap(lista, (item) => item.nota);
console.log(resultadoMap);

// Método filter
function meuFilter(lista, callback) {
    const resultado = [];
    for (let i = 0; i < lista.length; i++) {
        if (callback(lista[i], i, lista)) {
            resultado.push(lista[i]);
        }
    }
    return resultado;
}

console.log("Método filter:");
const resultadoFilter = meuFilter(lista, (item) => item.nota >= 7);
console.log(resultadoFilter);

// Método reduce
function meuReduce(lista, callback, valorInicial) {
    let acumulador = valorInicial;
    for (let i = 0; i < lista.length; i++) {
        acumulador = callback(acumulador, lista[i], i, lista);
    }
    return acumulador;
}

console.log("Método reduce:");
const resultadoReduce = meuReduce(lista, (acumulador, item) => acumulador + item.nota, 0);
console.log(resultadoReduce);

// Método forEach
function meuForEach(lista, callback) {
    for (let i = 0; i < lista.length; i++) {
        callback(lista[i], i, lista);
    }
}

console.log("Método forEach:");
meuForEach(lista, (item) => console.log(item.nome));

// Método find
function meuFind(lista, callback) {
    for (let i = 0; i < lista.length; i++) {
        if (callback(lista[i], i, lista)) {
            return lista[i];
        }
    }
    return undefined;
}

console.log("Método find:");
const resultadoFind = meuFind(lista, (item) => item.nome === "Eduardo");
console.log(resultadoFind);

// Método some
function meuSome(lista, callback) {
    for (let i = 0; i < lista.length; i++) {
        if (callback(lista[i], i, lista)) {
            return true;
        }
    }
    return false;
}

console.log("Método some:");
const resultadoSome = meuSome(lista, (item) => item.nota > 8);
console.log(resultadoSome);

// Método every
function meuEvery(lista, callback) {
    for (let i = 0; i < lista.length; i++) {
        if (!callback(lista[i], i, lista)) {
            return false;
        }
    }
    return true;
}

console.log("Método every:");
const resultadoEvery = meuEvery(lista, (item) => item.nota > 0);
console.log(resultadoEvery);
