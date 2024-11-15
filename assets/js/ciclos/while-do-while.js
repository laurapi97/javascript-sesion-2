

// CICLOS

const carros = ['Mercedes', 'Audi', 'Bmw', 'Porsche', 'Ferrari'];


let i =0;

// ciclo while tradicional
// while (i < carros.length){ // ti: la condición definida tiene que ser verdadera para que el resto se ejecute

//     console.log(carros[i]);
//     // i = i+1;
//     i++; // es lo mismo que la línea de arriba , toma i e incrementa en 1
//     // i +=2// incrementa en 2 o en n veces que lo defina


// }

//CONDICIONES FALSAS QUE HARÍAN QUE EL CICLO NO SE EJECUTE
// undefined
// null
// false

console.warn('While');

while (carros [i]){
    if (i===1){
        // break;
        i++;
        continue;
        
    }
    console.log(carros[i]);
    i++;
}


console.warn('Do While');
let j=0;

do{
    console.log(carros[j]);
    j++;

} while(carros [j]);