/* Días de semana abrimos a las 11,
pero los fines de semana abrimos a las 9*/

// Entrar a un sitio web, para consultar si está abierto hoy...

const dia = 2; // 0: domingo, 1: lunes...
const horaActual = 7;


let horaApertura;
let mensaje ;// Esta abierto, esta cerrrado, hoy abrimos a las xx


// if (dia === 0 || dia ===6 ){
// if([0,6].includes(dia)){ // otra manera de evaluar una expresión mas corta
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dias entre semana');
//     horaApertura = 11;
// }
// operador ternario
horaApertura = ([0,6].includes(dia)) ? 9 : 11;

// if (horaActual >= horaApertura){
//     mensaje ='Está abierto';
    
// } else{
//     // mensaje =` Está cerrado, hoy abrimos a las ` + horaApertura;
//     mensaje =` Está cerrado, hoy abrimos a las ${horaApertura} ` ;
    
// }

mensaje = ([horaActual].includes(horaApertura)) ? 'Está abierto' : `Está cerrado, hor abrimos a las ${horaApertura}`;



console.log({horaApertura, mensaje});



