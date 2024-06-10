const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;
    esconderSelecionado();


    cartaoAtual++;
    mostrarSelecionado();
});

btnVoltar.addEventListener("click", function () {
    if(cartaoAtual === 0) return;
    esconderSelecionado();

    cartaoAtual--;
    mostrarSelecionado();   

});

function esconderSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarSelecionado(){
    cartoes[cartaoAtual].classList.add('selecionado');
}