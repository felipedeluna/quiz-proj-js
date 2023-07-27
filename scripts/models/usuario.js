import { rank } from './rank.js'

const user = {
    nome: "",
    tema: "",
    data: new Date('2023-07-24'), //exemplo                            
    tempo_para_conclusao: "",
    acertos: 0,
}

function setNome(){
    const nome = document.getElementById("nome")
    user.nome = nome
}

function setTema(){
    const tema = document.getElementById("tema")
    user.tema = tema
}

function setData_inicio_quiz(){
    user.data = Date.now()
}

function setTempo_para_conclusao(){
    const tempo = Math.abs(Date.now() - user.data) // resultado em milesegundos

    const segundos = Math.floor(tempo / 1000);
    const minutos = Math.floor(segundos / 60);

    user.tempo_para_conclusao = `${minutos}:${segundos}`
}

function acertou(){
    user.acertos += 1
}

function limparUsuario(){
    user.nome = ""
    user.tema = ""
    user.data = ""
    user.tempo_para_conclusao = ""
    user.acertos = 0
}

function salvarResultado(){
    rank.push(user)
    limparUsuario()
}

export {user, setNome, setTema, setData_inicio_quiz, setTempo_para_conclusao, acertou, limparUsuario, salvarResultado};