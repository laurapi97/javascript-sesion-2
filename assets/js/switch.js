

const dia = 20; // 0: Domingo

// cuando se tienen valores especificos y exactos

switch (dia){
    case 0:
        console.log('Domingo');
        break;
    case 1: 
        console.log('Lunes');
        break;
    case 2: 
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('No es un valor válido para un día de la semana');

}

