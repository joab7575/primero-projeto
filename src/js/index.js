/* 
objetivo- quando clicarmos no botão temos que mostrar a imagem de fundo correspondente 

- passo 1 - dar um jeito de pegar o elemento HTML dos botões

- passo 2 - dar um jeito de indentificar o clique do usuario no botão

- passo 3 - desmarcar o botão selecionado anterior 

- passo 4 - marcar o botão clicado como se estivesse selecionado 

- passo 5 - esconder a imagem de fundo anterior

- passo 6 - fazer aparecer a imagem de fundo  correspondente ao clicar no botão clicado 
*/


const botoesCarrossel = (document.querySelectorAll('.botao'));
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
})


function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoelecionado() {
    const botaoseleciondo = document.querySelector('.selecionado');
    console.log(botaoseleciondo.classList.remove('selecionado'));
}

