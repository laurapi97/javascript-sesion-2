

const fiona ={
    nombre:'Fiona',
    edad: 10,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const lucrecia ={
    nombre:'Lucrecia',
    edad: 1,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}


// fiona.imprimir();

function Mascota (nombre,edad){ // la mayúscula es un indicativo de que 
    console.log('Se ejecutó esta línea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }

    return;
}

const romeo = new Mascota ('Romeo',10);
const philip = new Mascota ('Philip',11);
console.log(romeo);
romeo.imprimir();
philip.imprimir();
