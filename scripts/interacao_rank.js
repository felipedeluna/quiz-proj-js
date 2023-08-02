import  { rank } from "./models/rank.js";


// faz a media de todos os dados da tabela e subtrai ela para pegar quantos erros tem, depois imprime os 2

// ordena por nota e tempo os melhores usuarios
function ordenarMelhores(usuarios) {
    return usuarios.sort((a, b) => {
        if (a.acertos === b.acertos) {
            return a.tempo_para_conclusao - b.tempo_para_conclusao;
        }
        return b.acertos - a.acertos;
    });
}
// pegando cada lista no html
const listaHtml = document.querySelector(".lista-html");
const listaCss = document.querySelector(".lista-css");
const listaJs = document.querySelector(".lista-js");

// essa funcao faz o filtro para que não se repitam diversas vezes, limpa para não duplicar e depois mostra na tela
function preencherListas() {
    const usuariosHtml = ordenarMelhores(rank.filter((usuario) => usuario.tema === "html"));
    const usuariosCss = ordenarMelhores(rank.filter((usuario) => usuario.tema === "css"));
    const usuariosJs = ordenarMelhores(rank.filter((usuario) => usuario.tema === "javascript"));

    preencherLista(listaHtml, usuariosHtml);
    preencherLista(listaCss, usuariosCss);
    preencherLista(listaJs, usuariosJs);

    function preencherLista(lista, usuarios) {
        lista.innerHTML = ""; // Limpar antes de adicionar outra coisa

        for (const usuario of usuarios) {
            lista.innerHTML += `<li>${usuario.nome} - ${usuario.acertos} acertos</li>`;
        }
    }
}



preencherListas();

