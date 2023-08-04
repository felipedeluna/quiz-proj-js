const concluir_html = document.querySelector("#concluir-html");

concluir_html.addEventListener("click", () => {
    const respostasCorretas = ["c", "b", "c"];

    const respostasUser = [
        document.querySelector('input[name="answer1"]:checked').value,
        document.querySelector('input[name="answer2"]:checked').value,
        document.querySelector('input[name="answer3"]:checked').value,
    ];

    for (let i = 0; i < respostasCorretas.length; i++) {
        if (respostasUser[i] === respostasCorretas[i]) {
            acertou();
            console.log(user);
        }
    }
});
