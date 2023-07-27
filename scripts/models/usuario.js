import { rank } from "./rank.js"
import { getDataAtualFormatada } from "../calc_data.js"


export class User {
    constructor(nome, tema, tempo_de_inicio) {
        this.nome = nome || ""
        this.tema = tema || ""
        this.data = getDataAtualFormatada()
        this.tempo_de_inicio = tempo_de_inicio || ""
        this.tempo_para_conclusao = ""
        this.acertos = 0
    }

  setTempo_para_conclusao() {
    const tempo = Math.abs(Date.now() - this.tempo_de_inicio) // Resultado em milissegundos
    const segundos = Math.floor(tempo / 1000)
    const minutos = Math.floor(segundos / 60)

    this.tempo_para_conclusao = `${minutos}:${segundos}`
  }

  acertou() {
    this.acertos += 1
  }


  salvarResultado() {
    this.setTempo_para_conclusao()
    rank.push(this)
  }
}
