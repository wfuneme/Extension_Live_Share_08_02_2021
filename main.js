let mensaje = 'Hola compañeros. Bienvenidos al curso de JavaScript.'

//let resultado = mensaje.startsWith('Hola');      //Busca al inicio ... y devuelve un boolean
//let resultado = mensaje.endsWith('JavaScript');  //Busca al final ... y devuelve un boolean
//let resultado = mensaje.includes('Hola');        //Busca dentro de toda la cadena ... y devuelve un boolean
//let resultado = mensaje.indexOf('e');           //Busca de izquierda a derecha ... y devuelve un boolean
//let resultado = mensaje.lastIndexOf('e');       //Busca de derecha a izquierda ... y devuelve un boolean
//let resultado = mensaje.repeat(2);                //Repite la cadena de texto n veces
//let resultado = mensaje.split(' ',3);             //Divide la cadena por ' ' y muestra las 3 primeras partes
//let resultado = mensaje.substring(0,3);             //Se parece a la funcion EXTRAE de Excel
//let resultado = mensaje.substring(mensaje.lastIndexOf('Bien'),mensaje.lastIndexOf(' al'));
//let resultado = mensaje.toUpperCase();              //CONvierte mensaje a mayusculas
//let resultado = mensaje.toLowerCase();              //CONvierte mensaje a minusculas
//let resultado = mensaje.trim();                     //Remueve espacios al inicio o el final
//let resultado = mensaje.toLocaleUpperCase();            //Remueve espacios al inicio o el final

console.log(`Frase original: ${mensaje}`);
let ejercicio = mensaje.toUpperCase();
console.log(`Frase en mayúsculas: ${ejercicio}`);

ejercicio = ejercicio.split(' ');
console.log(`Frase en mayusculas dividida por ' ': ${ejercicio}`);

ejercicio = ejercicio.join('**');
console.log(`Frase en mayusculas unida con '**': ${ejercicio}`);

ejercicio = ejercicio.split('**');
ejercicio = ejercicio.join(' ');
console.log(`Frase reunida en minusculas : ${ejercicio}`);

ejercicio = ejercicio.toLowerCase();
console.log(`Frase reunida normal en minusculas: ${ejercicio}`);

ejercicio = ejercicio.split('.');
console.log(`Frase en minusculas dividida por '.': ${ejercicio}`);

let frase1 = ejercicio[0];
console.log(frase1);
let frase2 = ejercicio[1]
frase2 = frase2.trim();
console.log(frase2);
let frase3 = ejercicio[2];
console.log(frase3);
frase1 =  frase1.charAt(0).toUpperCase() + frase1.slice(1);
console.log(frase1);
frase2 =  frase2.charAt(0).toUpperCase() + frase2.slice(1);
console.log(frase2);
frase3 =  frase3.charAt(0).toUpperCase() + frase3.slice(1);
console.log(frase3);
ejercicio[0] = frase1;
ejercicio[1] = frase2;
ejercicio[2] = frase3;
console.log(`Frase normalizada dividida por '.': ${ejercicio}`);
ejercicio = ejercicio.join('.');
console.log(`Frase normalizada original '.': ${ejercicio}`);