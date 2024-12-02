

class Singleton {


    // tiene valor de undefined o null cuando no se asigna un valor
    static instancia; // la instancia inicializada de la clase, 
    nombre = '';


    constructor (nombre = ''){ // si no hay nombre se asigna lo que esté en la instancia de la linea 6

        
        
        const a = undefined;
        console.log(a); // undefined
        console.log(!a); // true
        console.log(!!a); // false

        if (!!Singleton.instancia){ // comprobar si esto no existe
            return Singleton.instancia; // Asegura que siempre haya solo una instancia de la clase
            // sin importar cuantas veces se intente crear o instanciar una nueva
        }

        // si la instancia no existe se asigna de esta manera
        Singleton.instancia = this;
        this.nombre=nombre;

        

    }
}


const instancia1 = new Singleton ('Flash');
const instancia2 = new Singleton ('Superman');
const instancia3 = new Singleton ('Wonder Woman');

console.log(` Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(` Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(` Nombre en la instancia3 es: ${instancia3.nombre}`);