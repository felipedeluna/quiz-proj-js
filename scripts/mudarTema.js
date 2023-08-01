const botaoMudarTema = document.querySelector("#mudarTema")
const formInicial = document.querySelector(".form-inicial")

botaoMudarTema.addEventListener("change", function() {
    document.body.classList.toggle("dark-body");
    formInicial.classList.toggle("dark-container");
    formInicial.classList.toggle("form-inicial");
    document.body.i.toggle("dark")
})
