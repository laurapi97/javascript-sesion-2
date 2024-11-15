

const heroes = ['Batman', 'Linterna Verde','Cyborg','Flash'];


// barer los elementos e imprimirlos en consola

console.warn('For tradicional');

// CICLO FOR TRADICIONAL 
// for ( donde se inicializa la variable; condición ;incrementador )
for (let i = 0 ; i<4 ; i++){
    console.log(heroes[i]);

}

// CICLO FOR IN // mismo resultado que arriba
console.warn('For in');
for (let i in heroes ){
    console.log(heroes[i]);

}


// CICLO FOR OF -> PARA OBTENER REFERENCIAS A VALORES DE OBBJETOS DE MANERA MAS SENCILLA

console.warn('For of'); // mismo resultado que las lineas de arriba en vez de i se usa el modo singular del arreglo 
for (let heroe of heroes){ // el for of extrae el valor que se encuentra en el arreglo y lo regresa en la variable singular
    console.log(heroe);
}