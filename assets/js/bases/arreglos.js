


// la palabra reservada new crea una nueva instancia de arreglo
// const arr = new Array (10);
// const arr =[];
// console.log(arr);

let videoJuegos =['Mario Bros', 'Crash Bandicoot', 'Megaman'];
console.log({videoJuegos});

//para conocer el valor de la posición 0
console.log(videoJuegos[0]);

let cosas = [
    true,
    123,
    'Fiona',
    1+2,
    function(){},
    ()=>{},
    {a:1},
    ['X', 'Megaman','Zero', 'Dr light',
        ['Dr Stone', 'Eren']
     ]
];


// Para llamar un objeto de un arreglo que está dentro del arreglo cosas
console.log(cosas [7][4][0]);