function dadosTabela() {
    const tabela = document.querySelector("#tabela-resultados")
    for(users of user) {
    tabela.innerHTML += `
    <td>${user.nome}</td>
    <td>${user.tema}</td>
    <td>${user.tempo_para_conclusao}</td>
    <td>${user.data}</td>
    <td>${user.acertos}/10 </td>
    `
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
    erro.innerHTML = `Média de erros: ${mediaNegativa.toFixed(2)}`
}



function topTemaHtml() {

}

function topTemaCss() {

}

function topTemaJs() {

}