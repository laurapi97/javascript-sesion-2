

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



// inicialización de instancias

const spiderman = new Persona ('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const batman = new Persona ('Bruce Wayne', 'Batman', 'Al final, el miedo es el que te hace fracasar' );

// Persona._conteo = 2;




// console.log(spiderman);
// console.log(batman);


// para ejecutar/utilizar el método
// spiderman.quienSoy();
batman.quienSoy();

// spiderman.miFrase();
// batman.miFrase();


// usando el set

batman.setComidaFavorita = 'la sopa maligatoni';
// console.log(batman.getComidaFavorita);
// console.log(batman);
console.log('Conteo estático', Persona._conteo);  // Forma para conocer cuantas instancias tengo de una clase
console.log(Persona.conteo);
Persona.mensaje();
