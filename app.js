const campo_texto=document.querySelector("#texto-encriptado");
const campo_mensaje=document.querySelector("#campo-mensaje");
const divtexto=document.getElementById("textopredeterminado");
const botoncopiar=document.getElementById("btnCopiar");
const matriz_code=[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]
botoncopiar.style.display = "none";
function inicio(){
    divtexto.style.display = "none";
    botoncopiar.style.display = "inline";
    campo_mensaje.style.backgroundImage="none";
    if (window.innerWidth <= 768 || 1004 || 1204) {
        campo_mensaje.style.backgroundImage = "none"; 
    }
}
function btnEncriptar(){
    const texto= Encriptar(campo_texto.value)
    campo_mensaje.value=texto
    campo_texto.value="";
    
    inicio();
}
function btnDesencriptar(){
    const texto= Desencriptar(campo_texto.value)
    campo_mensaje.value=texto
    campo_texto.value="";
    inicio()
}

function btnCopiar() {
    const texto = copiar(campo_mensaje.value);
    campo_mensaje.value = "";

    if (window.innerWidth <= 768 || window.innerWidth <= 1004 || window.innerWidth <= 1204) {
        campo_mensaje.style.background = "none";
    } else {
        campo_mensaje.style.background = "url(img/Muñeco.png)"; 
    }
    
    divtexto.style.display = "block";
    botoncopiar.style.display = "none";
}
function Encriptar(fraseEncriptada){
    for (let i=0; i<matriz_code.length;i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada=fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return fraseEncriptada;
}
function Desencriptar(frasedesencriptada){
    for (let i=0; i<matriz_code.length;i++){
        if(frasedesencriptada.includes(matriz_code[i][1])){
            frasedesencriptada=frasedesencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return frasedesencriptada;
}
function copiar(fraseacopiar){
    const copia = document.createElement('textarea');
    copia.value = fraseacopiar;
    document.body.appendChild(copia);
    copia.select();
    document.execCommand('copy');
    document.body.removeChild(copia);
}