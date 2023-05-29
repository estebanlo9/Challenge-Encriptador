const textInput = document.querySelector(".text-input");
const textOutput = document.querySelector(".text-output");

function btnEncriptar(){
    const textoEncriptado = encriptar(textInput.value)
    textOutput.value=textoEncriptado
    textInput.value=""
    textOutput.style.backgroundImage="none"
}

//aqui el boton en html realiza un llamado a la funcoin btnDesencriptar()
function btnDesencriptar(){
    const textoDesencriptado= desencriptar(textInput.value)
    textOutput.value=textoDesencriptado
    textInput.value=""
}
//creando un evento de click sobre el boton copiar
document.querySelector(".btn-copiar").addEventListener("click",()=>{
    copiar(textOutput.value)
})

function copiar(texto){
    navigator.clipboard.writeText(texto)
}

function encriptar(textoAEncriptar){
    let claves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoAEncriptar = textoAEncriptar.toLowerCase()
    for(let i=0; i<claves.length; i++){
        if(textoAEncriptar.includes(claves[i][0])){//si textoAEncriptar incluye claves en su indice 1(primer arreglo), en la posicion 0(primer elemento del arreglo), entonces:
            textoAEncriptar=textoAEncriptar.replaceAll(claves[i][0],claves[i][1])
        }
    }
    return textoAEncriptar
}


function desencriptar(textoADesencriptar){
    let claves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoADesencriptar = textoADesencriptar.toLowerCase()
    for(let i=0;i<claves.length;i++){
        if(textoADesencriptar.includes(claves[i][1])){
            textoADesencriptar=textoADesencriptar.replaceAll(claves[i][1],claves[i][0])
        }
    }
    return textoADesencriptar
}

