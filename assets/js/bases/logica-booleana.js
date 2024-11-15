

const regresaTrue =()=>{
    console.log('Regresa True');
    return true;
}


const regresaFalse =()=>{
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negación');

// console.log(true);
// console.log(!true);
// console.log(!false);


console.log(!regresaFalse());

console.warn ('And &&'); // true si todos los valores son verdaderos
// Otro uso es disparar acciones si la primera condición se cumple
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(true && !false); // true

console.log('====&&====');
console.log(regresaFalse()&& regresaTrue ());// false e imprime un regresa false
console.log(regresaTrue ()&& regresaFalse());// false pero imprime un regresa true y regresa false

console.log('====&@@@@@====');
console.log(true && true && true && false); //false
console.log(true || true || true || false); //true

console.warn('OR');// true

console.log(true || false ); // true
console.log(false || true ); // true
console.log(false || false ); // false


console.log(regresaTrue () || regresaFalse()); // ejecuta el regresa tru y como ejecuta un true no hace falta ejecutar mas


console.warn('Asignaciones');


const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// const a1= true && 'Hola Mundo' && 150; // ejecuta el último valor cuando es true
const a1= false && 'Hola Mundo' && 150; // no ejecuta mas porque es false




// const a2='Hola '&& 'Mundo';// ejecuta solo el "Mundo"
const a2='Hola '&& 'Mundo' && soyFalso; // falso porque todas las condiciones tienen que ser tru para que salga verdadero
const a3= soyFalso || 'Ya no soy falso';
const a4= soyFalso || soyNull || soyUndefined || 'Ya no soy falso de nuevo';
const a5= soyFalso || soyUndefined  || regresaTrue()|| 'Ya no soy falso de nuevo' || true ;// deuelve true porque se llama a la función que es true



console.log({a1,a2,a3,a4,a5});

