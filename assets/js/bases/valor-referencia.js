
//Valor
let a =10;
let b = a;

a=30;

console.log({a,b});


//referencia
let fiona = { nombre: 'Fiona'};
// let lucrecia= fiona; // HASTA ESTE PUNTO TANTO FIONA COMO LUCRECIA APUNTAN AL MISMO OBJETO EN MEMORIA, CUALQUIER CAMBIO EN LUCECIA AFECTA A FIONA

let lucrecia= { ...fiona };// LUCRECIA ES UN NUEVO OBJETO CON LOS MISMOS VALORES DE FIONA PERO NO COMPARTE LA REFERENCIA EN MEMORIA

lucrecia.nombre='Lucrecia';// AL CAMBIAR EL NOMBRE SOLO AFECTA AL OBJETO LUCRECIA

console.log({fiona, lucrecia});

const cambiaNombre = ({...persona})=>{// TOMA UN OBJETO PERSONA COMO PARÁMETRO Y USA EL OPERADOR SPREAD PARA HACER UNA COPIA DEL OBJETO
    persona.nombre ='Tony'; // DENTRO DE LA FUNCION SE CAMBIA PERSONA.NBONMBRE A 'TONY'
    return persona;// COMO CAMBIA NOMBRE DEVUELVE UNA COPIA , RONY SERA YUN BVUEVO OBJETO CON EL NOMBRE CAMBIADO A TONY PERO PETER PERMANECERA
    // CON SU VALOR ORIGINAL
}


let peter = {nombre:'Peter'};
let tony = cambiaNombre(peter);

console.log({peter,tony});


// Arreglos
// tabla en donde se muestre manzana pera y banano ppara "frutas" y otra donde se muestre manzana pera banano y mango para otrasFrutas

const frutas =['Manzana','Pera', 'Banano'];

// const otrasFrutas = [...frutas];


///RENDIMIENTO ENTRE EL SLICE Y SPREAD EN TIEMPO
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');


console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');






// const otrasFrutas = frutas.slice(); // slice es un método de los arreglos para cortar un arreglo y regresar los elementos que se especifiquen , 



// hace lo mismo que la linea de arriba (linea 38)
// const otrasFrutas = frutas.slice(); // slice es un método de los arreglos para cortar un arreglo y regresar los elementos que se especifiquen , 
//pero si no se mandan argmentos manda un nuevo arreglo rompiendo la relación



otrasFrutas.push ('Mango');

console.table ({frutas, otrasFrutas});