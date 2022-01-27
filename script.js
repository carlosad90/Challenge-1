
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


var form = document.querySelector("form");
var msgBox = document.querySelector("#msg");



var btnEncriptar = form.querySelector("#btn-encriptar").addEventListener("click",function(event){
    event.preventDefault()
    var texto = form.querySelector("#input-texto").value;
    var ValidaMayuscula = false
    var ValidaCaracteres = false

    var flag1 = validaMayuscula(texto);
    var flag2 = validaCaracter(texto);

    if(flag1 === true){
        msgBox.value = "No se permite letras mayusculas!!!";

    }

    if(flag2 === true){
        msgBox.value = "No se permite caracteres especiales!!!";
      
    }

    if (flag1 === false && flag2 === false){
        var encripta = texto.replace(/a|e|i|o|u/g, encriptar)
        msgBox.value = encripta;
    }




    
})

var btnDesencriptar = form.querySelector("#btn-desencriptar").addEventListener("click",function(event){
    event.preventDefault()
    var texto = form.querySelector("#input-texto").value;
    var desenCriptado = texto.replace(/ai|enter|imes|ober|ufat/g,desEncriptar);
    
    msgBox.value = desenCriptado;

})



var btnCopiar = document.querySelector("#btn-copy").addEventListener("click",copy);
   


function copy() { 
    msgBox.select();
    document.execCommand("copy"); 
  }
  

function validaMayuscula(texto){

    if (texto.match(/[A-Z]/)){

        return true
    }
   
    return false

}



function validaCaracter(texto){
   
    if(texto.match(/!|ó|á|é|í|ú/)){
          
        return true
    }
   
    return false
}


function encriptar(letra){
    
    if(letra ==="a"){
        texto = "ai"
    }else if(letra ==="e"){
        texto = "enter"
    }else if(letra ==="i"){
        texto = "imes"
    }else if(letra ==="o"){
        texto = "ober"
    }else if(letra ==="u"){
        texto = "ufat"
    }

    return texto
}



function desEncriptar(letra){

    if(letra ==="ai"){
        texto = "a"
    }else if(letra ==="enter"){
        texto = "e"
    }else if(letra ==="imes"){
        texto = "i"
    }else if(letra ==="ober"){
        texto = "o"
    }else if(letra ==="ufat"){
        texto = "u"
    }

    return texto
}



