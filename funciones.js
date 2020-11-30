function Nombre() {
    //Consulta el nombre y la guarda en una varible Nombre
    var Ing_Nombre = prompt('¿Cual es tu Nombre?');

    if (Ing_Nombre == null) {

    } else if (Ing_Nombre == "") {
        alert('Ingrese su nombre para Jugar')

    } else {

        $('#exampleModal').modal('show');
        var boton = document.getElementById('buuton');
        boton.style.display = 'block';
        document.getElementById('Ayuda').innerHTML = "";
        document.getElementById('Ayuda1').innerHTML = "";
        document.getElementById('ganaste').innerHTML = "";
        document.getElementById('ganaste').style.color = 'black';
        contador = 0;
        document.getElementById('nombre').innerHTML = "Hola " + Ing_Nombre;
    }
}


var txtrespuesta = "";
var contador = 0;

function Adivinanza() {
    Respuesta = document.getElementsByName("txtrespuesta")[0].value;


    if (Respuesta == "" || Respuesta == 0 || Respuesta > 6) {

        alert('Ingrese una respuesta del 1 al 6');
        $('#txtrespuesta').val('');
        return
    }
    contador++



    // verifica si la repuesta es correcta 
    if (Respuesta == 1) {
        document.getElementById('ganaste').innerHTML = "Respuesta erronea!!! realizaste " + contador + " de 4 intentos";
        $('#txtrespuesta').val('');

    } else if (Respuesta == 2) {
        document.getElementById('ganaste').innerHTML = "Respuesta erronea !!! realizaste " + contador + " de 4 intentos";
        $('#txtrespuesta').val('');

    } else if (Respuesta == 3) {
        document.getElementById('ganaste').innerHTML = "Has ganado un descuento de 10%";
        var ganador = document.getElementById('ganaste');
        ganador.style.color = 'red';
        contador = 0
        var boton = document.getElementById('buuton');
        boton.style.display = 'none';
        $('#txtrespuesta').val('');




    } else if (Respuesta == 4) {
        document.getElementById('ganaste').innerHTML = "Respuesta erronea !!! realizaste " + contador + " de 4 intentos";
        $('#txtrespuesta').val('');

    } else if (Respuesta == 5) {
        document.getElementById('ganaste').innerHTML = "Respuesta erronea !!! realizaste " + contador + " de 4 intentos";
        $('#txtrespuesta').val('');
    } else if (Respuesta == 6) {
        document.getElementById('ganaste').innerHTML = "Respuesta erronea !!! realizaste " + contador + " de 4 intentos";
        $('#txtrespuesta').val('');
    }

    //Ayuda 2 intento
    if (contador == 2) {

        document.getElementById('ganaste').innerHTML = "Respuesta erronea!!! realizaste " + contador + " de 4 intentos";
        document.getElementById('Ayuda').innerHTML = "Ayuda 1 - Una de las sagas que realizo (Rambo)";
    }
    //ayuda 3 intento
    if (contador == 3) {

        document.getElementById('ganaste').innerHTML = "Respuesta erronea!!! realizaste " + contador + " de 4 intentos";
        document.getElementById('Ayuda1').innerHTML = "Ayuda 2 - Otra de las sagas que realizo (Rocky)";
    }
    if (contador == 4) {

        document.getElementById('ganaste').innerHTML = "Respuesta erronea!!! realizaste " + contador + " de 4 intentos";
        var boton = document.getElementById('buuton');
        boton.style.display = 'none';
        alert('Has usado tus ' + contador + ' intentos perdiste!!!')
    }


}

//Solo permite introducir numeros.
function soloNumeros(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}