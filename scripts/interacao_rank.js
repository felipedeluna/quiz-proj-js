import rank from "./models/rank.js";

export function dadosTabela(rank) {
    const tabela = document.querySelector("#tabela-resultados");

    for (const rank of rankData) {
        // Renomeando 'rank' para 'rankData'
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

// faz a media de todos os dados da tabela e subtrai ela para pegar quantos erros tem, depois imprime os 2
function medias(users) {
    let contadorMedia = 0;
    let pontuacaoTotal = 0;
    for (const user of users) {
        contadorMedia++;
        pontuacaoTotal += user.acertos;
    }
    const media = pontuacaoTotal / contadorMedia;
    const acerto = document.querySelector("#acertos");
    acerto.innerHTML = `Média de acertos: ${media.toFixed(2)}`;

    const mediaNegativa = 10 - media;
    const erro = document.querySelector("#erros");
    erro.innerHTML = `Média de erros: ${mediaNegativa.toFixed(2)}`;
}

function topTemaHtml() {}

function topTemaCss() {}

function topTemaJs() {}
