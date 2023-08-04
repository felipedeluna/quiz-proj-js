let sec = 0;
let min = 0;
let hr = 0;
let interval;

function twoDigits(digit) {
    if (digit < 10) {
        return "0" + digit;
    } else {
        return digit;
    }
}

const btn_iniciar = document.getElementById("btn-iniciar");
btn_iniciar.addEventListener("click", () => {
    sec = 0;
    min = 0;
    hr = 0;
    clearInterval(interval);
    interval = setInterval(watch, 1000);

    function watch() {
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
            if (min === 60) {
                min = 0;
                hr++;
            }
        }

        // Seleciona o elemento com a classe "relogio" e define o conteúdo interno com o valor formatado do relógio.
        const relogioElement = document.querySelector(".relogio");
        relogioElement.innerHTML = `${twoDigits(hr)} : ${twoDigits(
            min
        )} : ${twoDigits(sec)}`;

        const relogioElement2 = document.querySelector(".relogio-css");
        relogioElement2.innerHTML = `${twoDigits(hr)} : ${twoDigits(
            min
        )} : ${twoDigits(sec)}`;

        const relogioElement3 = document.querySelector(".relogio-javascript");
        relogioElement3.innerHTML = `${twoDigits(hr)} : ${twoDigits(
            min
        )} : ${twoDigits(sec)}`;
    }

    function twoDigits(value) {
        return value.toString().padStart(2, "0");
    }

    watch(); // Chama watch inicialmente para exibir o relógio quando o botão é clicado.
});

function respostas_foram_respondidas(quiz) {
    const respostas = document.querySelectorAll(
        `#container-${quiz} input[type="radio"]:checked`
    );
    const totalPerguntas = document.querySelectorAll(
        `#container-${quiz} input[type="radio"]`
    );
    return respostas.length === totalPerguntas.length / 4;
}

const btn_concluir = document.querySelectorAll(".btn-concluir");

btn_concluir.forEach((btn) => {
    btn.addEventListener("click", () => {
        const quiz = btn.getAttribute("tema");
        if (respostas_foram_respondidas(quiz)) {
            sec = 0;
            min = 0;
            hr = 0;
            clearInterval(interval);
        }
    });
});
