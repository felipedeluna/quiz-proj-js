import { HTML } from './models/questionario_html.js'
import { CSS } from './models/questionario_css.js'
import { JS } from './models/questionario_js.js'

function render(quiz){

    // remover todos os quizes da tela
    document.getElementById("container-pagina-inicial").classList.add("display-none")
    document.getElementById("container-html").classList.add("display-none")
    document.getElementById("container-css").classList.add("display-none")
    document.getElementById("container-javascript").classList.add("display-none")
    document.getElementById("container-rank").classList.add("display-none")


    // adiciona apenas o quiz solicitado
    const quiz_container = document.getElementById(`container-${quiz}`)
    quiz_container.classList.remove("display-none");

}


const btn_iniciar = document.getElementById("btn-iniciar")
btn_iniciar.addEventListener("click", ()=>{
    const tema = document.getElementById("tema").value
    render(tema)
})

const btn_novo_quiz = document.getElementById("btn-novo-quiz")
btn_novo_quiz.addEventListener("click", ()=>{
    render("pagina-inicial")
})

const btn_voltar_inicio = document.querySelectorAll(".btn-voltar-inicio");
btn_voltar_inicio.forEach((btn) => {
    btn.addEventListener("click", () => render("pagina-inicial"));
});

const btn_concluir = document.querySelectorAll(".btn-concluir");
btn_concluir.forEach((btn) => {
    btn.addEventListener("click", () => render("rank"));
});






// recebe o "modulo" para fazer um ForEach e renderizar os dados no container "id_container"
function renderizarQuiz(modulo, id_container) {

    const containerQuiz = document.getElementById(id_container)

    modulo.forEach((pergunta, index) => {

      const alternativasQuiz = pergunta.respostas

      
      // o "String.fromCharCode(97 + i)" retorna um caractere da tabela ASCII com base em um valor numérico.
        .map((resposta, i) => `
          <label>
          <input type="radio" name="pergunta${index}" value="${String.fromCharCode(97 + i)}">
          ${resposta}
          </label>
        `)
        .join("");

      const perguntaQuiz = `
        <div class="quiz-container">
          <h3>Pergunta ${index + 1}:</h3>
          <p>${pergunta.pergunta}</p>
          <form>
            ${alternativasQuiz}
          </form>
        </div>
      `;
      containerQuiz.innerHTML += perguntaQuiz;

    });

    
  }

  renderizarQuiz(HTML, "questionario-html");
  renderizarQuiz(CSS, "questionario-css");
  renderizarQuiz(JS, "questionario-js");