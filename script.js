const body = document.querySelector('body')
const img = document.querySelectorAll('.imgSlide')
const imgGrande = document.querySelector('.imgGrande')
const imgGrandeFilho = document.querySelector('.imgGrandeFilho')
const elemento = document.getElementById("swipe");
const click = document.getElementById('click')

var contador = true

img.forEach(imagem => {
  imagem.addEventListener('click', () => {
    if (contador === true) {
      imgGrandeFilho.setAttribute('src', imagem.src);
      imgGrande.style.display = 'block';
      contador = false;

      click.style.opacity = '1'


    }
  });
});



imgGrande.addEventListener('click', () => {
  if (contador === false) {
    imgGrande.style.display = 'none'
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
document.querySelector('.wppButton').addEventListener('click', enviaMsgWhats)

function enviaMsgWhats(){
  var message = ''
  var phone_number = "55" + "62996973771";
  var url = "https://api.whatsapp.com/send?phone=" + phone_number + "&text=" + encodeURIComponent(message);

  setTimeout(()=>{
    window.open(url);
  }, 500)
  
}