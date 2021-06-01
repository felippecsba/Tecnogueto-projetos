const imgBloqueada = document.getElementById("imgBloqueada");
const imgDesbloqueada = document.getElementById("imgDesbloqueada");
const tituloH1 = document.getElementById("titulo");



document.getElementById("btnDesbloquear").addEventListener("click", function() {
    imgBloqueada.setAttribute('class','esconder');
    imgDesbloqueada.setAttribute('class','mostrar');
    tituloH1.innerHTML = "Tablet Desbloqueado";
    document.getElementById("btnDesbloquear").disabled = true;
    
});

document.getElementById("btnBloquear").addEventListener("click", function() {
    imgBloqueada.setAttribute('class','mostrar');
    imgDesbloqueada.setAttribute('class','esconder');
    document.getElementById("titulo");
    tituloH1.innerHTML = "Tablet Bloqueado";
    document.getElementById("btnDesbloquear").disabled = false;
    
});
