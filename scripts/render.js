import { HTML, respostas_html } from './models/questionario_html.js'
import { CSS, respostas_css } from './models/questionario_css.js'
import { JS, respostas_js } from './models/questionario_js.js'
import { rank } from './models/rank.js'
import { User } from './models/usuario.js'
import { preencherListas } from './interacao_rank.js'
import { medias } from './interacao_rank.js'

//Função que renderiza a parte do HTML desejada, removendo todas as outras com o display-none

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

//verificação da página inicial

let usuario

const btn_iniciar = document.getElementById("btn-iniciar")
btn_iniciar.addEventListener("click", ()=>{
    
    btn_concluir.forEach(btnR => {
      btnR.classList.remove("display-none")
    })
    btn_relatorio.forEach(btnR => {
      btnR.classList.add("display-none")
    })
    const tema = document.getElementById("tema").value
    const nome = document.querySelector("#nomeusu").value
    if( tema == "null"){
      window.alert("Selecione um tema válido!")
    }
    if(nome == ""){
      window.alert("Digite o seu nome!")
    }
    if(nome != "" && tema != "null"){
        usuario = new User(nome, tema, Date.now())

        render(tema)
    }
})

//botão localizado na página do rank, ele renderiza a seleção dos quizes

const btn_novo_quiz = document.getElementById("btn-novo-quiz")
btn_novo_quiz.addEventListener("click", ()=>{
    render("pagina-inicial")
})

//botão localizado na página do quiz, ele renderiza a seleção dos quizes

const btn_voltar_inicio = document.querySelectorAll(".btn-voltar-inicio");
btn_voltar_inicio.forEach((btn) => {
    btn.addEventListener("click", () => render("pagina-inicial"));
});

// recebe o "modulo" para fazer um ForEach e renderizar os dados no container "id_container"
function renderizarQuiz(modulo, id_container, tema) {

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
        <div class="quiz-container-${tema} quiz-container">
          <h3>Pergunta ${index + 1}:</h3>
          <p>${pergunta.pergunta}</p>
          <div id="questao-${index + 1}-${tema}">
            ${alternativasQuiz}
          </div>
        </div>
      `;
      containerQuiz.innerHTML += perguntaQuiz;

    });

    
  }

  //botão localizado na página do quiz, ele finaliza o quiz
const btn_concluir = document.querySelectorAll(".btn-concluir")

btn_concluir.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quiz = btn.getAttribute("tema");
    if (respostas_foram_respondidas(quiz)) {
      let p = 0
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
          p++
        } else if(respostasCliente[i] === respostas_css[i]){
          p++
        } else if(respostasCliente[i] === respostas_js[i]){
          p++
        } 
      }     
      medias(rank, p)
      usuario.setAcertos(p)
      usuario.salvarResultado()
      btn.classList.add("display-none")
      btn_relatorio.forEach(btnR => {
        btnR.classList.remove("display-none")
      })
    } else {
      alert("Por favor, responda todas as perguntas antes de concluir o quiz.");
    }
  });
});
function respostas_foram_respondidas(quiz) {
    const respostas = document.querySelectorAll(`#container-${quiz} input[type="radio"]:checked`);
    const totalPerguntas = document.querySelectorAll(`#container-${quiz} input[type="radio"]`);
    return respostas.length === totalPerguntas.length/4;
};

//botão localizado na página do quiz, ele vai para a página de relatórios
    const btn_relatorio = document.querySelectorAll(".btn-relatorio");
    btn_relatorio.forEach((btn) => {
      btn.addEventListener("click", () => {
        dadosTabela(rank)
      });
    });

  function dadosTabela(rankData) {
    const tabela = document.querySelector("#tabela-resultados");
    tabela.innerHTML = ""

    for (const rank of rankData) { // Renomeando 'rank' para 'rankData'
      let tabelaEstrutura = `
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
    preencherListas()
    render("rank");
    
  }

  renderizarQuiz(HTML, "questionario-html", "html");
  renderizarQuiz(CSS, "questionario-css", "css");
  renderizarQuiz(JS, "questionario-js", "js");
  


  