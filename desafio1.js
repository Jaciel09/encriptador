textoEntrada = document.querySelector(".texto-mensaje");
textoEntrada.focus();

//Esta función es para que hacer click en el input se muestre la pagina en su forma original
function inicio () {
    document.querySelector(".muñeco").style.display = "block";
    document.querySelector(".msg-box").style.display = "none";
}

var boton0 = document.querySelector("#introducirMensaje");
boton0.onclick = inicio;



if (screen.width > 480) {

function encriptar (){

 // arr = e.value.match(/[A-Z]/g)   -> https://es.stackoverflow.com/questions/129404/validar-que-solo-contenga-una-may%C3%BAscula

    var texto = document.querySelector("#introducirMensaje").value;

    if (texto == "") {
        alert("Introduce un texto");
        textoEntrada.focus();   
    } else if (texto.value = textoEntrada.value.match(/[A-Z]/)) {
        alert("Solo acepta minusculas");
        textoEntrada.focus();   
    }
    else if (texto.value = textoEntrada.value.match(/[ÁÉÍÓÚáéíóú]/)) {
        alert("No se permiten acentos");
        textoEntrada.focus();   
    }
    
//Genera la encriptación 
    else {
     
        document.querySelector(".muñeco").style.display = "none";
        document.querySelector(".msg-box").style.display = "block";

    var textoSinCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    console.log(textoSinCifrado);

    var resultado = document.querySelector(".texto-input-salida");
    resultado.value = textoSinCifrado;

    document.querySelector("#introducirMensaje").value = "";
    textoEntrada.focus();

    // textoCifrado = document.querySelector(".texto-input-salida").value;
    // document.querySelector("#introducirMensaje").value;

    }
    }
   
var boton1 = document.querySelector(".btn-encriptar");
boton1.onclick = encriptar;





function desencriptar () { 

    var texto = document.querySelector("#introducirMensaje").value; 
//Evita que se envíe el input vacío
    if(texto == "") {
        alert("Ingresa un Texto");
        textoEntrada.focus();   
//Valida el uso exclusivo de minusculas
    } else if (texto.value = textoEntrada.value.match(/[A-Z]/)) {
        alert("Solo acepta minusculas");
        textoEntrada.focus();   
    }
//Restrine uso de acentos     
    else if (texto.value = textoEntrada.value.match(/[ÁÉÍÓÚáéíóú]/)) {
        alert("No se permiten acentos");
        textoEntrada.focus();   
    }

//Genera la desencriptación
    else {
        document.querySelector(".muñeco").style.display = "none";
        document.querySelector(".msg-box").style.display = "block";

    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    console.log(textoCifrado);
    
    var resultado = document.querySelector(".texto-input-salida");
    resultado.value = textoCifrado;
    
    document.querySelector("#introducirMensaje").value = "";
    textoEntrada.focus();    

    // textoCifrado = document.querySelector(".texto-input-salida").value; 
    // document.querySelector("#introducirMensaje").value;
    }
}

var boton2 = document.querySelector(".btn-desencriptar"); 
boton2.onclick = desencriptar;





function copiar () {
   document.querySelector(".muñeco").style.display = "block";
   document.querySelector(".msg-box").style.display = "none";

   textoParaCopiar = document.querySelector(".texto-input-salida").value;
   navigator.clipboard.writeText(textoParaCopiar);

   document.querySelector(".texto-input-salida").value = "";
   document.querySelector("#introducirMensaje").value = textoParaCopiar;
  }

  var boton3 = document.querySelector(".btn"); 
  boton3.onclick = copiar;

}




















//   SCRIPT PARA CELULAR

 else {

function encriptar (){

 // arr = e.value.match(/[A-Z]/g)   -> https://es.stackoverflow.com/questions/129404/validar-que-solo-contenga-una-may%C3%BAscula

    var texto = document.querySelector("#introducirMensaje").value;

    if (texto == "") {
        alert("Introduce un texto");
        textoEntrada.focus();   
    } else if (texto.value = textoEntrada.value.match(/[A-Z]/)) {
        alert("Solo acepta minusculas");
        textoEntrada.focus();   
    }
    else if (texto.value = textoEntrada.value.match(/[ÁÉÍÓÚáéíóú]/)) {
        alert("No se permiten acentos");
        textoEntrada.focus();   
    }
    
//Genera la encriptación 
    else {
     
        document.querySelector(".mostrar-mensaje").style.display = "none";
        document.querySelector(".msg-box").style.display = "block";

    var textoSinCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    console.log(textoSinCifrado);

    var resultado = document.querySelector(".texto-input-salida");
    resultado.value = textoSinCifrado;

    document.querySelector("#introducirMensaje").value = "";
    textoEntrada.focus();

    // textoCifrado = document.querySelector(".texto-input-salida").value;
    // document.querySelector("#introducirMensaje").value;

    }
    }
   
var boton1 = document.querySelector(".btn-encriptar");
boton1.onclick = encriptar;





function desencriptar () { 

    var texto = document.querySelector("#introducirMensaje").value; 
//Evita que se envíe el input vacío
    if(texto == "") {
        alert("Ingresa un Texto");
        textoEntrada.focus();   
//Valida el uso exclusivo de minusculas
    } else if (texto.value = textoEntrada.value.match(/[A-Z]/)) {
        alert("Solo acepta minusculas");
        textoEntrada.focus();   
    }
//Restrine uso de acentos     
    else if (texto.value = textoEntrada.value.match(/[ÁÉÍÓÚáéíóú]/)) {
        alert("No se permiten acentos");
        textoEntrada.focus();   
    }

//Genera la desencriptación
    else {
        document.querySelector(".mostrar-mensaje").style.display = "none";
        document.querySelector(".msg-box").style.display = "block";

    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    console.log(textoCifrado);
    
    var resultado = document.querySelector(".texto-input-salida");
    resultado.value = textoCifrado;
    
    document.querySelector("#introducirMensaje").value = "";
    textoEntrada.focus();    

    // textoCifrado = document.querySelector(".texto-input-salida").value; 
    // document.querySelector("#introducirMensaje").value;
    }
}

var boton2 = document.querySelector(".btn-desencriptar"); 
boton2.onclick = desencriptar;





function copiar () {
   textoParaCopiar = document.querySelector(".texto-input-salida").value;
   navigator.clipboard.writeText(textoParaCopiar);

   document.querySelector(".texto-input-salida").value = "";
   document.querySelector("#introducirMensaje").value = textoParaCopiar;
  }

  var boton3 = document.querySelector(".btn"); 
  boton3.onclick = copiar;


  }
