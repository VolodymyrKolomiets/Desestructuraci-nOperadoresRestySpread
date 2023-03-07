//Dado el siguiente objeto:
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
//Extrae la empleada Ana con todos sus datos personales:
//{"name":"Ana", "email":"Ana@gmail.com"}
const [, ana] = empleados
console.log(ana)

//Extrae el email del empleado Luis --> Luis@gmail.com
const [luis] = empleados
const { email } = luis
console.log(email)

//Dado el siguiente objeto:
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
//Cambia el nombre de la propiedad “name” por “nombre
const { name: nombre } = pokemon
//Extrae el nombre del Pokemon
console.log(nombre)
//Extrae el tipo de Pokemon que es
const { type } = pokemon
console.log(type)
//Extrae el movimiento “Tackle”
const { moves } = pokemon
const [, trk] = moves
console.log(trk)


//////spread/rest////////
//Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const pokeGrup = { ...pikachu, ...pokemon }
console.log(pokeGrup)

//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

function sumEveryOther(...numeros) {
    let x = 0
    for (const iterator of numeros) {
        x += iterator
    }
    return x

}
console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26

//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

function addOnlyNums(...params) {
    let sum = 0

    for (const iterator of params) {
        if (typeof iterator === 'number') {
            sum += iterator
        }

    }
    return sum

}

console.log(addOnlyNums(1, 'perro', 2, 4)); //7


//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

function countTheArgs(...x) {
    return x.length

}

console.log(countTheArgs('gato', 'perro')); //2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); //4

//Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9,]

function combineTwoArrays(a, b) {
    return [...a, ...b]

}
console.log(combineTwoArrays(arr1, arr2))

////////////EXTRAS//////////////

//Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

//Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
const { today } = HIGH_TEMPERATURES
const { tomorrow } = HIGH_TEMPERATURES

const maximaHoy = today;
const maximaManana = tomorrow;
console.log(maximaHoy)
console.log(maximaManana)



//Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
function onlyUniques(...array) {
    const uniq = []
    for (let i = 0; i < array.length; i++) {
        if (!uniq.includes(array[i])) {
            uniq.push(array[i])
        }
    }
    return uniq
}

console.log(onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'))
//['gato', 'pollo', 'cerdo']
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)) //[1, 2, 3, 6, 7, 8]

//Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

function combineAllArrays(...arrays) {
    let arrNew = []
    for (const i of arrays) {
        arrNew.push(...i)
       }
return arrNew
}
console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]))
// [3, 6, 7, 8, 2, 7, 3, 1]
console.log(combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]))
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]


//Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

function sumAndSquare(...quads) {
    let arrNew = []
    for (const i of quads) {
        arrNew.push(...i)
       // console.log(arrNew)
    }
    //console.log(...arrNew)
    let nums = 0
    for (const x of arrNew) {
       // console.log(x)
        nums += x * 2
       // console.log(nums)
    }
    return nums
     
    }

console.log(sumAndSquare([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]))

