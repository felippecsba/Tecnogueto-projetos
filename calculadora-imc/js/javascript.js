const botaoCalcular = document.getElementById("botaoCalcular");

botaoCalcular.addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    const mensagemSucesso = document.getElementById("mensagemSucesso");

    const resultadoDoCalculoIMC = (peso / (altura * altura)).toFixed(1);

    
    mensagemSucesso.textContent = `${nome} seu IMC é: ${resultadoDoCalculoIMC}`;
    mensagemSucesso.setAttribute("class", "alert alert-primary mt-5 mb-5 mostrar");


});

// peso / (altura * altura)