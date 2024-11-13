

// function crearPersona(nombre,apellido){
//     //objeto literal
//     return {nombre,apellido}
// }

// es lo mismo que la función de arriba pero hecho con una función de flecha
const crearPersona = (nombre,apellido) =>({nombre,apellido})
    // return {nombre,apellido}



const persona = crearPersona ('Fiona', 'Pinzon');

console.log(persona);


function imprimeArgumentos(){
    console.log(arguments);
}

//parámetro rest
const imprimeArgumentos2 = (edad,...args) => {
    // console.log(args);
    return (args);
}

// imprimeArgumentos(10, true, false, 'Fiona', 'Hola');

// imprimeArgumentos2(20, true, false, 'Lucrecia', 'Hola');


// variable que regresa un arreglo // extrae en la linea 24 la edad y por tanto no se está mostrando en la avriable argumentos
// const argumentos = imprimeArgumentos2(20, true, false, 'Lucrecia', 'Hola');



// Darle nombres a las posiciones del arreglo
const [casado,vivo,nombre,saludo] =  imprimeArgumentos2(20, true, false, 'Lucrecia', 'Hola');
console.log({casado, vivo, nombre, saludo});


//funcion que regresa un objeto .... apellido:nuevoApellido CAMBIA EL NOMBRE A UNO NUEVO
const {apellido:nuevoApellido}= crearPersona('Fiona', 'Pinzon');
console.log({nuevoApellido});



// DESTRUCTURACIÓN DE ARGUMENTOS
const mascota ={
    nombre: 'Fiona',
    edad: 9,
    codeName: 'Pachanga',
    color: 'gris',
    vivo: true,
    trajes: ['Saco cuello tortuga', 'falda','camisa'],
};


// const imprimePropiedades =(personaje) =>{
//     console.log('nombre', personaje.nombre);
//     console.log('edad',personaje.edad);
//     console.log('codeName',personaje.codeName);
//     console.log('color',personaje.color);
//     console.log('vivo',personaje.vivo);
//     console.log('trajes',personaje.trajes);
// }

const imprimePropiedades = ({nombre, edad, codeName, color, vivo, trajes})=>{
   console.log ({nombre});
   console.log ({edad});
   console.log ({codeName});
   console.log ({color});
   console.log ({vivo}); 
   console.log ({trajes});

}


imprimePropiedades(mascota);