import { HTML, respostas_html } from './scripts/models/questionario_html.js'
import { CSS, respostas_css } from './scripts/models/questionario_css.js'
import { JS, respostas_js } from './scripts/models/questionario_js.js'

const btn_relatorio = document.querySelectorAll(".btn-relatorio");

function respostas_foram_respondidas(quiz) {
    const respostas = document.querySelectorAll(`#container-${quiz} input[type="radio"]:checked`);
    const totalPerguntas = document.querySelectorAll(`#container-${quiz} input[type="radio"]`);
    return respostas.length === totalPerguntas.length/4;
}

const formularioHtml = document.querySelectorAll(".quiz-container-html")
const formularioCss = document.querySelectorAll(".quiz-container-css")
const formularioJs = document.querySelectorAll(".quiz-container-js")


btn_relatorio.forEach((btn) => {
    btn.addEventListener("click", () => {
      const quiz = btn.getAttribute("tema");
      if (respostas_foram_respondidas(quiz)) {
        const respostasCliente = [
          document.querySelector('input[name="pergunta1"]:checked').value,
          document.querySelector('input[name="pergunta2"]:checked').value,
          document.querySelector('input[name="pergunta3"]:checked').value,
          document.querySelector('input[name="pergunta4"]:checked').value,
          document.querySelector('input[name="pergunta5"]:checked').value,
          document.querySelector('input[name="pergunta6"]:checked').value,
          document.querySelector('input[name="pergunta7"]:checked').value,
          document.querySelector('input[name="pergunta8"]:checked').value,
          document.querySelector('input[name="pergunta9"]:checked').value,
          document.querySelector('input[name="pergunta10"]:checked').value,
        ]
        for(let i = 0; i < 10; i++){
          if(respostasCliente[i] === respostas_html[i]){
            formularioHtml[i].classList.add("acertou")
          } else if(respostasCliente[i] === respostas_css[i]){
            formularioCss[i].classList.add("acertou")
          } else if(respostasCliente[i] === respostas_js[i]){
            formularioJs[i].classList.add("acertou")
          } else {
            formularioHtml[i].classList.add("errou")
            formularioCss[i].classList.add("errou")
            formularioJs[i].classList.add("errou")
          }
        }      
      } 
    });
  });


