

let personaje ={
    nombre: 'Fiona',
    edad: 9,
    codeName: 'Pachanga',
    color: 'gris',
    coord:{
        lat: 34.034,
        long:-118.70
    },
    vivo: true,
    trajes: ['Saco cuello tortuga', 'falda','camisa'],
    direccion: {
        zip: '10229, 198731',
        ubicacion: 'casa'
    }
};


console.log(personaje);

console.log('Nombre:', personaje.nombre); //es igual a poner console.log('Nombre:', personaje ['nombre']);

console.log('Color:', personaje.color)

console.log('Edad', personaje.edad);

//Coordenadas y latitud

console.log('Coord:', personaje.coord);

console.log('Latitud:', personaje.coord.lat);//concateno


//Numero de trajes de fiona
console.log('No. trajes:', personaje.trajes.length);

//Ultimo traje
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length-1]);

//variable para obtener información de un objeto
const x= 'vivo';
console.log('Vivo', personaje[x]);


// borrar una propiedad del objeto


delete personaje.edad;
console.log(personaje);

// crear una nueva propiedad en el objeto

personaje.pequeño =true;

//trabajar un objeto como si fuera un arreglo
const entriesPares = Object.entries(personaje);
console.log(entriesPares);


console.log(personaje);


// bloqueo de las propiedades

Object.freeze (personaje);

personaje.dinero=1271927917291;
personaje.pequeño=false;
console.log(personaje);


// los objetos que se encuentren dentro de un objeto si se pueden cambiar
personaje.direccion.ubicacion ='apartamento';
console.log(personaje);


// listado de todas las propiedades
const propiedades =Object.getOwnPropertyNames(personaje);
console.log(propiedades);

//listado de valores
const valores =Object.values(personaje);
console.log(valores);