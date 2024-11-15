

let a = 6;

if (a>=10){
    console.log('El valor de a es mayor o igual al valor de 10');

} else{
    console.log('El valor de a es menor a el valor de 10');
}


// console.log('Fin del programa');

const hoy = new Date(); // la palabra reservada new crea una nueva instancia de un objeto date

// console.log(hoy); // imprime la fecha actual
let dia = hoy.getDay(); //0 es Domingo, 1 es lunes, 2 es martes .... 6

console.log({dia});


// console.log(2 ==='2');  //false
// console.log(2=='2'); // true


if (dia === 0 ){
    console.log('Domingo');
} else if (dia ===1){
    console.log('Lunes');






    // // console.log('No es Domingo') 
    // if (dia === 1){
    //     console.log('Lunes');
    // } else { 
    //     console.log('No es lunes ni domingo');
    // }
} else if (dia ===2){
    console.log('Martes');
}else {
    console.log('No es lunes, martes o domingo...');
}





// TAREA // Sin usar If, else o siwtch, unicamente objetos para realizar la misma tarea e imprimir en consola la misma tarea

dia = 6; //miercoles


const diasSemana= {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado',
};
const diasSemana2= ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];



// EJECUTAR FUNCIONES DENTRO DE UN ARREGLO
// const diasSemana= {
//     0: () => 'domingo -0',
//     1: ()=>'lunes - 1',
//     2: ()=>'martes - 2',
//     3: ()=>'miércoles - 3',
//     4: ()=>'jueves - 4 ',
//     5: ()=>'viernes - 5',
//     6: ()=>'sábado - 6',
// };


// console.log(diasSemana[dia]()); // para ejecutar la función de flecha que esta dentro del arreglo

console.log({diasSemana});


// dia de la semana
console.log(diasSemana[dia] || 'Día no definido'); //La línea console.log(diasSemana[dia]); accede al valor del objeto diasSemana utilizando la notación de corchetes con la clave dia.
//En este caso, dia = 1, por lo que diasSemana[1] devuelve 'lunes'.

