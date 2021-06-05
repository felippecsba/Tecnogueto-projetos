const botaoCalcular = document.getElementById("botaoCalcular");
botaoCalcular.addEventListener("click", function() {
    validarForms();
});

function msgResultadoCalcIMC(nome, peso, altura) {
    const resultadoDoCalculoIMC = (peso / (altura * altura)).toFixed(1);
    let classificaco = '';

    if (resultadoDoCalculoIMC < 18.5 ) {
        classificaco = "Abaixo do peso"
    } else if (resultadoDoCalculoIMC < 25 ) {
        classificaco = "Peso ideal"
    } else if (resultadoDoCalculoIMC < 30 ) {
        classificaco = "Acima de peso"
    } else if (resultadoDoCalculoIMC < 35 ) {
        classificaco = "Com obseidade grau I"
    } else if (resultadoDoCalculoIMC >= 35 ) {
        classificaco = "Com obesidade alta "
    }

    showMensagemSucesso(nome, resultadoDoCalculoIMC, classificaco);

}

function validarForms() {
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    const convertPesoNum = parseInt(peso);
    const convertAlturaNum =  parseInt(altura);

    if (nome != '' && altura != '' && peso != '') {
        if (Number.isInteger(convertAlturaNum) && Number.isInteger(convertPesoNum) ) {

            msgResultadoCalcIMC(nome, peso, altura);

        } else {
            showMesangemErro (`Os campos Altura e Peso  precisam ser número`); 
        }
    } else {   
        showMesangemErro (`Preencha todos os campos`);
    }

}

function showMensagemSucesso(nome, resultadoCalculo, classificaco) {
    const mensagemSucesso = document.getElementById("mensagemSucesso");
    mensagemSucesso.textContent = `${nome} seu IMC é: ${resultadoCalculo}, e você está ${classificaco}`;
    mensagemSucesso.setAttribute("class", "alert alert-primary mt-5 mb-5 mostrar");
    mensagemErro.setAttribute("class", "esconder");
}

function showMesangemErro(msgErro) {   
    const mensagemErro = document.getElementById("mensagemErro"); 
    mensagemErro.textContent = msgErro;
    mensagemErro.setAttribute("class", "alert alert-danger mt-5 mb-5 mostrar");
    mensagemSucesso.setAttribute("class", "esconder");

}

