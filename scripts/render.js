import { HTML } from './models/questionario_html.js'
import { CSS } from './models/questionario_css.js'
import { JS } from './models/questionario_js.js'
import { rank } from './models/rank.js'

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

      
      // o aqui imprime todas as alternaticas, o valor de cada alternatica é seu próprio texto
        .map((resposta) => `
          <label>
          <input type="radio" name="pergunta${index + 1}" value="${resposta}">
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

  function dadosTabela(rankData) {
    const tabela = document.querySelector("#tabela-resultados");
  
    for (const rank of rankData) { // Renomeando 'rank' para 'rankData'
      const tabelaEstrutura = `
        <tr>
          <td>${rank.nome}</td>
          <td>${rank.tema}</td>
          <td>${rank.tempo_para_conclusao}</td>
          <td>${rank.data}</td>
          <td>${rank.acertos}/10</td>
        </tr>
      `;
      tabela.innerHTML += tabelaEstrutura;
    }
  }

  renderizarQuiz(HTML, "questionario-html");
  renderizarQuiz(CSS, "questionario-css");
  renderizarQuiz(JS, "questionario-js");
  dadosTabela(rank);

  