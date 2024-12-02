

class Persona {

    static porObjeto ({nombre, apellido, pais}){ // creación de un método estático que regresa una nueva instancia de persona
        return new Persona (nombre, apellido, pais);
    }

    constructor (nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }


        getInfo() {
            console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
        }
}

const nombre1 = 'Pedro',
      apellido1 = 'Flores',
      pais1 = 'Noruega';


const laura ={
    nombre:    'Laura',
    apellido:  'Pinzon',
    pais :     'Colombia'
}

const persona1 = new Persona (nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto (laura);

persona1.getInfo();
persona2.getInfo();
