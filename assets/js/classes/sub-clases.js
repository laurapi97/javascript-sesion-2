

class Persona{

    static _conteo =0;

    // get estático
    static get conteo (){
        return Persona._conteo + ' Instancias';
    }

// método estático
    static mensaje (){
        console.log(this.nombre); // undefined
        console.log('Hola a todos soy un método estático');
    }

    // nombre;
    // codigo;
    // frase;
    comida="";

    constructor(nombre ='Sin nombre', codigo = 'Sin código', frase= 'Sin frase'){

        if (!nombre) throw Error('Se necesita el nombre');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;


        Persona._conteo ++;
    }



// SETS Y GETS

 // los set solo reciben 1 argumento
    set setComidaFavorita (comida){
        this.comida=comida.toUpperCase();

    }
    get getComidaFavorita (){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }


    //método
    quienSoy (){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy(); // se pueden llamar otros métodos dentro de un método
        console.log(`${this.codigo} dice ${this.frase}`);
    }
}

class Heroe extends Persona{
 
    clan = ' sin clan';

    constructor (nombre, codigo, frase){

        
        super(nombre, codigo, frase); // esto hace que cuando se cree una nueva isntancia de Heroe se dispara el constructor de heroe
        this.clan = 'Liga de la justicia';
    }
    quienSoy(){
        console.log(`So ${this.nombre}, ${this.clan} `);
        super.quienSoy(); // para llamar un método de la clase Padre se usa la palabra reservada super
    }
}



// inicialización de instancias


const batman = new Heroe ('Bruce Wayne', 'Batman', 'Al final, el miedo es el que te hace fracasar');
console.log(batman);
batman.quienSoy();