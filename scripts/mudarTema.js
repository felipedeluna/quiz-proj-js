const botaoMudarTema = document.querySelector("#mudarTema");

botaoMudarTema.addEventListener("change", function () {
    document.body.classList.toggle("dark-body");
});
