import { rank } from "./models/rank.js";

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
export function preencherListas() {
    const usuariosHtml = ordenarMelhores(
        rank.filter((usuario) => usuario.tema === "html")
    );
    const usuariosCss = ordenarMelhores(
        rank.filter((usuario) => usuario.tema === "css")
    );
    const usuariosJs = ordenarMelhores(
        rank.filter((usuario) => usuario.tema === "javascript")
    );

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

function medias(rank, acertos) {
    let contadorMedia = 0;
    let pontuacaoTotal = 0;
    let media = 0;
    for (const user of rank) {
        contadorMedia++;
        pontuacaoTotal += user.acertos;
        media = pontuacaoTotal / contadorMedia;
    }
    contadorMedia++;
    pontuacaoTotal += acertos;

    function mediaErros() {
        const media = pontuacaoTotal / contadorMedia;
        const acerto = document.querySelector("#acertos");
        acerto.innerHTML = `Média de acertos: ${media.toFixed(2)}`;

        const mediaNegativa = 10 - media;
        const erro = document.querySelector("#erros");
        erro.innerHTML = `Média de erros: ${mediaNegativa.toFixed(2)}`;
    }
    mediaErros(medias);
}

medias(rank);

export { medias };
