function Nombre() {
    //Consulta el nombre y la guarda en una varible Nombre
    var Ing_Nombre = prompt('¿Cual es tu Nombre?');

    var Nombre = document.getElementById('nombre').innerHTML = "Hola " + Ing_Nombre;
}



var txtrespuesta = null;
var contador = 0;

function Adivinanza() {
    Respuesta = document.getElementsByName("txtrespuesta")[0].value;


    if (Respuesta == "") {

        alert('Ingrese una respuesta del 1 al 4');
        return
    }
    contador++

    //Ayuda 2 intento
    if (contador == 2) {

        var solucion = document.getElementById('ganaste').innerHTML = "Respuesta erronea!!! realizaste " + contador + " de 4 intentos";
        var Ayuda = document.getElementById('Ayuda').innerHTML = "Una de las sagas que realizo (Rambo)";
    }
    //ayuda 3 intento
    if (contador == 3) {

        var solucion = document.getElementById('ganaste').innerHTML = "Respuesta erronea!!! realizaste " + contador + " de 4 intentos";
        var Ayuda = document.getElementById('Ayuda').innerHTML = "Otra de las sagas que realizo (Roqui)";
    }
    if (contador == 4) {

        var solucion = document.getElementById('ganaste').innerHTML = "Respuesta erronea!!! realizaste " + contador + " de 4 intentos";
        alert('Has usado tus ' + contador + ' intentos perdiste!!!')
        var boton = document.getElementById('buuton');
        boton.style.display = 'none';
    }

    // verifica si la repuesta es correcta 
    if (Respuesta == 1) {
        var solucion = document.getElementById('ganaste').innerHTML = "Respuesta erronea!!! realizaste " + contador + " de 4 intentos";
    } else if (Respuesta == 2) {
        var solucion = document.getElementById('ganaste').innerHTML = "Respuesta erronea !!! realizaste " + contador + " de 4 intentos";
    } else if (Respuesta == 3) {
        var solucion = document.getElementById('ganaste').innerHTML = "Has ganado un descuento de 10%";
        contador = 0
    } else if (Respuesta == 4) {
        var solucion = document.getElementById('ganaste').innerHTML = "Respuesta erronea !!! realizaste " + contador + " de 4 intentos";
    }

}