

// FUNCIONES
//Primera forma de definir una funcion

function saludar(nombre){
    //llama a todos los argumentos que se encuentren enviados a la función
    console.log (arguments);
    console.log('Hola ' + nombre);
    return 10;// completa la función y retorna un 1
    


    //Esto no se ejecuta porque está despues del return
    console.log('Hola')
}

//Segunda forma "Función anonima" es la forma en como el nombre no pueda ser reutilizado en otra función, ya que se define como una constante
const saludar2 = function (nombre, edad, color){
    console.log('Hola '+ nombre+" "+edad+" "+color);
}



//Funciones de flecha

const saludarFlecha = () =>{
    console.log('Hola flecha');
}


const saludarFlecha2 = (nombre) =>{
    console.log('Hola flecha '+nombre);
}


// saludar('Fiona',9, 'gris');
const retornoDeSaludar= saludar('Fiona',9, 'gris');// retorno de la funcion 1
console.log({retornoDeSaludar});

// saludar2('Fiona', 9, 'gris');
// saludarFlecha();

// saludarFlecha2('Fionita');





function sumar(a,b){
    return a+b;
}

console.log(sumar(1,2));


// const sumar2 =(a,b) =>{
//     return a+b;
// }

// esta es la mismaa manera para hacer la funcion de flecha de arriba, si existiera otro procedimiento despues no se puede realizar
const sumar2 =(a,b) =>  a+b;


// imprimir un numero aleatorio
function getAleatorio(){
    return Math.random();
}


// transformar funcion de get aleatorio en una funcion de flecha sin llaves
getAleatorio1 = () => Math.random();

// console.log(sumar2(2,2));
console.log(getAleatorio());
console.log(getAleatorio1());


//  