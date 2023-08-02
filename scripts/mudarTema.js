const botaoMudarTema = document.querySelector("#mudarTema")
const formInicial = document.querySelector(".form-inicial")
const icones = document.querySelectorAll(".bi")

botaoMudarTema.addEventListener("change", function() {
    document.body.classList.toggle("dark-body");
})
