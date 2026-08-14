const body = document.body;
const titulo = document.getElementById('titulo');
const botao = document.getElementById('botaoTema');

let temaEscuro = false;

botao.addEventListener('click',() => {
temaEscuro = !temaEscuro;

if (temaEscuro) {
 body.style.backgroundColor ='#121212';
 titulo.style.color ='#f5f5f5';
} else {
 body.style.backgroundColor ='#ffffff';
 titulo.style.color ='#1a1a1a';
  }
});