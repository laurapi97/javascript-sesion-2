

//strings
let nombre = 'Peter Parker';
console.log(nombre);

nombre ='Ben Parker';
console.log(nombre);

nombre ='Tía May';
nombre=123;

// para determinar el tipo de variable
console.log(typeof nombre);

let esMarvel = true;
console.log(typeof esMarvel);


let edad =33;
console.log(typeof edad);

let superPoderDeSpiderman;
console.log(typeof superPoderDeSpiderman); // retorna un undefined porque no está definida la variable aún

let soyNull =null;// retorrna un objeto ??
console.log(typeof soyNull);

let simbolo1 = Symbol('a');
let simbolo2 = Symbol('a');

console.log(typeof simbolo1 === simbolo2); // simbolo 1 y 2 son diferentes
