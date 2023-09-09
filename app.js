/*Ejercicio 01*/

// const numero = prompt('Ingrese un número');

// if( Number( numero ) >= 0) {
//     alert('El numero es positivo');
// }else{
//     alert('El numero es negativo');
// }

/*Ejercicio 02*/


// const numero = prompt('Ingrese un número');

// if( Number( numero ) % 2 === 0) {
//     alert(`${numero} es divisible entre 2`);
// }else{
//     alert(`${numero} no es divisible entre 2`);
// }

/*Ejercicio 03*/


// const numero1 = prompt('Ingrese un número');
// const numero2 = prompt('Ingrese un número');


// if( Number( numero1 ) > Number( numero2 ) ) {
//     alert(`El número menor es ${ numero2 }`);
// }else{
//     alert(`El número menor es ${ numero1 }`);

// }


/*Ejercicio 04*/


// const numero = prompt('Ingrese un número');

// for( let i = 1; i <= numero; i++ ){
//     if( i % 5 === 0 ){
//         console.log( i );
//     }
// }

/*Ejercicio 05*/

// const añoNacido = prompt('Ingrese el año en que nacio');

// let edad;

// edad = new Date().getFullYear() - Number( añoNacido );

// console.log( edad )

/* Ejercicio 06*/

// const n1 = prompt('Ingrese un número');
// const n2 = prompt('Ingrese un número');
// const n3 = prompt('Ingrese un número');

// let numero1 = Number(n1);
// let numero2 = Number(n3);
// let numero3 = Number(n3);

// if(  numero1  >= numero2 && numero1 >= numero3 ) {
//     console.log(`El número mayor es ${ numero1 }`);
// }else if( numero2 >= numero1 && numero2 >= numero3 ){
//     console.log(`El número mayor es ${ numero2 }`);
// }else{
//     console.log(`El número mayor es ${ numero3 }`);
// }

/* Ejercicio 07*/
// let dia = prompt('Ingrese un día de la semana');

// let diaParsed = dia.trim().toLowerCase();

// const dias = {
//     'lunes'     : 'Hoy es lunes',
//     'martes'    : 'Feriado!!!!',
//     'miercoles' : 'Feriado!!!!',
//     'jueves'    : 'Feriado!!!!',
//     'viernes'   : 'Hoy es viernes',
//     'sabado'    : 'Fin de semana!!!',
//     'domingo'   : 'Fin de semana!!!',
// }

// if(  diaParsed === 'lunes' ){
//     console.log('Hoy es lunes');
// }
// else if( diaParsed === 'martes' ){
//     console.log('Feriado!!!!');
// }
// else if( diaParsed === 'miercoles' ){
//     console.log('Feriado!!!!');
// }
// else if( diaParsed === 'jueves' ){
//     console.log('Feriado!!!!');
// }
// else if( diaParsed === 'viernes' ){
//     console.log('Hoy es viernes');
// }
// else if( diaParsed === 'sabado' ){
//     console.log('Fin de semana!!!');
// }
// else if( diaParsed === 'domingo' ){
//     console.log('Fin de semana!!!');
// }else{
//     console.log('Ingrese un día valido');
// }

// const printDay = dias[diaParsed] || 'Ingrese un día valido';

// console.log( printDay )


/* Ejercicio 08*/

/*
let calificacion = prompt('Ingrese una calificación entre 1 y 10');
let caliParsed = Number(calificacion);

if( caliParsed >= 1 && caliParsed <= 10){

    if( caliParsed <= 6){
        alert('reprobado');
    }else if( caliParsed <= 8 ){
        alert('regular');
    }else if( caliParsed <= 9 ){
        alert('bien');
    }else{
        alert('excelente');
    }

}else{
    console.error('Ingrese un número valido');
}
*/

/* Ejercicio 09*/

// let edad = prompt('Ingrese su edad');

// if( Number(edad) >= 18 ){
//     alert('Si puede votar');
// }else {
//     alert('No puede votar');
// }



/* Ejercicio 10*/

// let numero1 = prompt('Ingrese un numero entre 1 y 50');
// let numero2 = prompt('Ingrese un numero entre 1 y 50');

// numero1 = Number(numero1);
// numero2 = Number(numero2);

// const numbers = 50;

// for( let i = 1; i <= numbers; i++ ){

//    if( numero1  === i || numero2 === i){
//     console.log(`${i} : ¡Loteria! `);
//    }else{
//     console.log(i)
//    }
   
// }

// let antiguedad = prompt("Ingrese la antigüedad del empleado en años");

/* Ejercicio 11 */
// antiguedad = Number( antiguedad );

// let bono;

// if( antiguedad === 1){
//     bono = 100;
// }else if ( antiguedad === 2){
//     bono = 200;
// }else if ( antiguedad === 3){
//     bono = 300;
// }else if( antiguedad === 4) {
//     bono = 400;
// }else if ( antiguedad === 5){
//     bono = 1000;
// }else{
//     bono = 0;
// }



/* Ejercicio 12 */

// let salarioInicial = 1500;
// let sumsalario;
// let incremento = 0.10;
// let salarioPorAño = [];

// for( let i = 1; i <= 6; i++ ){
//     salarioInicial = salarioInicial * incremento + salarioInicial;
//     salarioPorAño.push( Math.round( salarioInicial) )
// }
// console.log( `El salario al cabo de 6 años: ${Math.round( salarioInicial )}` )

// for( let i = 0 ; i < salarioPorAño.length ; i++){
//     console.log( `Salario ${ i + 1 } año: ${ salarioPorAño[i] }` )
// }


/* Ejercicio 13 */

// let topping = prompt('Que helado desea comprar: oreo , kitkat, brownie');

// let heladoPrecio = 50;
// let precioTopping = 0;
// let costoTotal;

// switch( topping.trim().toLowerCase() ){
//     case 'oreo':
//         precioTopping = 10;
//         costoTotal = precioTopping + heladoPrecio;
//         console.log(`El precio del helado con topping de ${ topping } es de: ${ costoTotal }`)
//         break;
//     case 'kikat':
//         precioTopping = 15;
//         costoTotal = precioTopping + heladoPrecio;
//         console.log(`El precio del helado con topping de ${ topping } es de: ${ costoTotal }`)
//         break;
//     case 'brownie':
//         precioTopping = 20;
//         costoTotal = precioTopping + heladoPrecio;
//         console.log(`El precio del helado con topping de ${ topping } es de: ${ costoTotal }`)
//         break;
//     default:
//         console.log('no tenemos este topping, lo sentimos');
//         costoTotal = precioTopping + heladoPrecio;
//         console.log(`El precio del helado sin topping es de : ${ costoTotal }`)
//         break;
// }



/* Ejercicio 14 */
// const nivelEducativo = prompt('Qué nivel desea estudiar: Course, Carrera, Master?').toLowerCase();

// let costoMensual;

// if (nivelEducativo === 'course') {
//   costoMensual = 4999;
// } else if (nivelEducativo === 'carrera') {
//   costoMensual = 3999;
// } else if (nivelEducativo === 'master') {
//   costoMensual = 2999;
// } else {
//   console.warn('Ingrese un nivel educativo válido: Course, Carrera, Master');
// }

// if (costoMensual !== undefined) {
//   const beca = prompt('Cuenta con alguna beca: Facebook, Google, Jesua?').trim().toLowerCase();
//   let descuento = 0;

//   if (beca === 'facebook') {
//     descuento = 0.20;
//   } else if (beca === 'google') {
//     descuento = 0.15;
//   } else if (beca === 'jesua') {
//     descuento = 0.50;
//   } else {
//     console.warn('No se aplicó ningún descuento de beca.');
//   }
//   const costoMensualConDescuento = costoMensual - costoMensual * descuento;

//   let duracion;

//   if (nivelEducativo === 'course') {
//     duracion = 2;
//   } else if (nivelEducativo === 'carrera') {
//     duracion = 6;
//   } else if (nivelEducativo === 'master') {
//     duracion = 12;
//   }

//   const costocostoTotal = costoMensualConDescuento * duracion;

//   console.log(`El costo mensual con descuento es: $${costoMensualConDescuento.toFixed(2)} MXN`);
//   console.log(`El costo costoTotal del programa es: $${costocostoTotal.toFixed(2)} MXN `);
//   console.log(`Duración del programa es de: ${duracion} meses`);
// }



/* Ejercicio 15 */

// const vehiculo = prompt('Ingrese su vehículo: coche, moto, autobus.')
// let precioKilometro;
// let totalPagar;
// let extraLitrosConsumindos;

// switch( vehiculo.trim().toLowerCase() ){
//     case 'coche':
//         precioKilometro = 0.20;
//         break;
//     case 'moto':
//         precioKilometro = 0.10;
//         break;
//     case 'autobus':
//         precioKilometro = 0.50;
//         break;
//     default:
//         console.warn(`Ingrese un vehículo válido`)
//         break;
// }


// if( precioKilometro !== undefined ){
//     let kmsRecorridos = prompt('Ingrese los kilometros recorridos');
//     let litrosConsumidos = prompt( 'Ingrese los litros consumidos:' );
//     litrosConsumidos = Number( litrosConsumidos )

//     if( litrosConsumidos >= 0 && litrosConsumidos  <= 100 ){
//         extraLitrosConsumindos = 5;
//     }else{
//         extraLitrosConsumindos = 10;
//     }

//     totalPagar = (precioKilometro * kmsRecorridos) + extraLitrosConsumindos;
//     console.log( `Total a pagar es de: ${totalPagar}` )
// }



/* Reto // Parte 2 */

/* Ejercicio 1 */

// const contraseñaUsuario = prompt('Ingrese la contraseña:');

// let contraseña = '123456';

// if( contraseña === contraseñaUsuario.trim().toLowerCase() ){
//     console.log('Contraseña correcta');
// }else{
//     console.error('Contraseña incorrecta');
// }


/* Ejercicio 2*/

// const edad = prompt('Ingrese su edad:');
// const ingresoMensual = prompt('Ingrese su ingreso mensual:');

// if( edad >= 18 && ingresoMensual >= 1000 ){
//     console.log('Usted puede tributar');
// }else{
//     console.log('Usted no puede tributar');
// }

/* Ejercicio 3 */

// let nombre = prompt('Ingrese su nombre:');
// let sexo = prompt('Ingrese su ingreso sexo: M o F');

// sexo = sexo.trim().toLowerCase();
// nombre = nombre.trim().toLowerCase();

// if( sexo === 'f' && nombre <= 'm' || sexo === 'm' && nombre >= 'n' ){
//     grupo = 'A';
// }else{
//     grupo = 'B';
// }

// console.log(`Usted pertenece al grupo ${grupo}`);

/* Ejercicio 4 */


// let numero1 = prompt('Ingrese un numero entero');
// let numero2 = prompt('Ingrese un numero entero');
// let res;
// numero1 = Number(numero1)
// numero2 = Number(numero2)

// const mayor = Math.max( numero1, numero2 );
// const menor = Math.min( numero1, numero2 );

// if(Number.isInteger( numero1 ) && Number.isInteger( numero2 )){
//     if (mayor % menor === 0) {
//         console.log(`${mayor} es múltiplo de ${menor}.`);
//       } else {
//         console.log(`${mayor} no es múltiplo de ${menor}.`);
//       }

// }else{
//     console.log('Ingrese un numero entero');
// }

/* Ejercicio 5 */

// let edad = prompt('Ingrese su edad:');
// edad = Number( edad );

// if( edad <= 4  ){
//     entrada = 0;
// }else if( edad > 4 && edad < 18){
//     entrada = 5;
// }else if( edad >= 18 ){
//     entrada = 10;
// }

// console.log(`El precio de su entrada es ${entrada}€`)

/* Ejercicio 6 */

// let diametro = prompt('Ingrese el diametro de su rueda:');
// let grosor   = prompt('Ingrese el grosor de su rueda:');
// diametro = Number( diametro )
// grosor = Number( grosor )
// if( diametro > 1.4 ){
//     console.log('La rueda es para un vehículo grande');
// }else if (  diametro >= 0.8 && diametro <= 1.4 ){
//     console.log('la rueda es para un vehículo mediano');
// }else{
//     console.log('La rueda es para un vehículo pequeño');
// }

// if( diametro > 1.4 && grosor < 0.4 ||  diametro > 0.8 && diametro <= 1.4 && grosor < 0.25 ){
//     console.log('“El grosor para esta rueda es inferior al recomendado');
// }
