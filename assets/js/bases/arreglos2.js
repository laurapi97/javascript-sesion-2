
//PROPIEDADES Y METODOS BASICOS DE LOS ARREGLOS 

let juegos =['Valorant', 'Roblox', 'Fall guys','Overwatch'];

console.log ('Largo:', juegos.length);

let primero =juegos[0];

// la cantidad de objetos en el arreglo son 4 pero como empieza desde 0 la ultima posición es 3
let ultimo = juegos[juegos.length -1 ];
console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr)=> {
    console.log({elemento, indice, arr});
} )


//Inserta un nuevo elemento al final de un arreglo
let nuevaLongitug=juegos.push('Spiderman');
console.log({nuevaLongitug, juegos});



// Inserta un nuevo elemento al inicio de un arreglo
nuevaLongitug= juegos.unshift('Fire Emblem');
console.log({nuevaLongitug, juegos});


//Borrar un juego al finalizar del arreglo
let juegoBorrado=juegos.pop();
console.log({juegoBorrado, juegos})



//Borrar un elemento en una posición especifica
let pos = 1;
//borrar dos elementos desde la posición 1
let elementosBorrados= juegos.splice(pos, 2);

console.log({elementosBorrados, juegos})


//Busca la posicion de un elemento en un arreglo
let fallGuysindex =juegos.indexOf('Fall guys'); // CaseSensitive
console.log({fallGuysindex,juegos});



// Valores por referencia y valor
