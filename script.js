const body = document.querySelector('body')
const img = document.querySelectorAll('.imgSlide')
const imgGrande = document.querySelector('.imgGrande')
const imgGrandeFilho = document.querySelector('.imgGrandeFilho')
const elemento = document.getElementById("swipe");
const click = document.getElementById('click')
const container = document.querySelector('#slide')


var contador = true

img.forEach(imagem => {
  imagem.addEventListener('click', () => {
    if (contador === true) {
      imgGrandeFilho.setAttribute('src', imagem.src);
      imgGrande.style.display = 'block';
      container.style.display = 'none';
      contador = false;

      click.style.opacity = '1'


    }
  });
});



imgGrande.addEventListener('click', () => {
  if (contador === false) {
    imgGrande.style.display = 'none'
    container.style.display = 'block';

    contador = true


    window.scrollTo(0, 1995)

  }
})

/*---------------------------------*/
//.swiper-container

document.addEventListener("DOMContentLoaded", function () {

  // Adicionar um ouvinte de evento de rolagem
  window.addEventListener("scroll", function () {


    if (window.scrollY >= 1995) {
      elemento.style.opacity = '1'
      ocultaElemento(elemento, 3000)

      setTimeout(() => {
        click.style.opacity = '1'

        ocultaElemento(click, 3000)
      }, 3500)

    }


  });
});

function ocultaElemento(elemento, tempo) {
  setTimeout(() => {
    elemento.style.opacity = '0'
    setTimeout(() => {
      elemento.style.display = 'none'
    }, 3500)
  }, tempo)
}

/*---------------WHATSAPP------------------*/

document.getElementById('whatsapp').addEventListener('click', enviaMsgWhats);
document.getElementById('whatsapp-2').addEventListener('click', enviaMsgWhats);
document.getElementById('whatsapp-3').addEventListener('click', enviaMsgWhats);
document.querySelector('.wppButton').addEventListener('click', enviaMsgWhats)

function enviaMsgWhats() {
  var message = ''
  var phone_number = "55" + "62996973771";
  var url = "https://api.whatsapp.com/send?phone=" + phone_number + "&text=" + encodeURIComponent(message);

  setTimeout(() => {
    window.open(url);
  }, 500)

}

/*--------------OFERTA------------------*/

function contadorOferta(dataExpiracao) {
  // Obtém a data atual
  const dataAtual = new Date();

  // Calcula a diferença entre as datas
  const diferenca = dataExpiracao - dataAtual;

  // Define um intervalo de 1 segundo
  const intervalo = setInterval(() => {
    // Atualiza a data atual
    const dataAtualAtual = new Date();

    // Calcula a nova diferença entre as datas
    const novaDiferenca = dataExpiracao - dataAtualAtual;

    // Converte a diferença em dias, horas, minutos e segundos
    const dias = Math.floor(novaDiferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((novaDiferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((novaDiferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((novaDiferenca % (1000 * 60)) / 1000);

    // Formata o resultado
    const mensagem = `Oferta expira em ${dias ? dias + " dias " : ""}${horas ? horas + " horas " : ""}${minutos ? minutos + " min " : ""}${segundos ? segundos + " s" : ""}`;

    // Exibe o resultado
    document.querySelector('#oferta').innerHTML = mensagem;
  }, 1000);

  // Retorna o intervalo
  return intervalo;
}

// Exemplo de uso
const dataExpiracao = new Date('2023-11-30');
const intervalo = contadorOferta(dataExpiracao);