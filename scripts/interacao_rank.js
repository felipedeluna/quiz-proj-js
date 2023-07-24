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


function mediaAcertos() {
    for(user of user) {
        let contadorMedia = 0;
        let pontuacaoTotal = 0;
        let media = 0;
        contadorMedia ++;
        pontuacaoTotal += user.acertos;
        media = pontuacaoTotal/contadorMedia;
    }
}



function mediaErros() {

}


function topTemaHtml() {

}

function topTemaCss() {

}

function topTemaJs() {

}