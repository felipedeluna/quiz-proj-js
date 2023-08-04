let sec = 0;
let min = 0;
let hr = 0;
let interval;

function twoDigits(digit){
    if(digit < 10){
        return('0' + digit);
    }else{
        return(digit);
    }
}


const btn_iniciar = document.getElementById("btn-iniciar");
btn_iniciar.addEventListener("click", () => {
    
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
        relogioElement.innerHTML = `${twoDigits(hr)} : ${twoDigits(min)} : ${twoDigits(sec)}`;

        const relogioElement2 = document.querySelector(".relogio-css");
        relogioElement2.innerHTML = `${twoDigits(hr)} : ${twoDigits(min)} : ${twoDigits(sec)}`;

        const relogioElement3 = document.querySelector(".relogio-javascript");
        relogioElement3.innerHTML = `${twoDigits(hr)} : ${twoDigits(min)} : ${twoDigits(sec)}`;
    }

    function twoDigits(value) {
        return value.toString().padStart(2, "0");
    }

    watch(); // Chama watch inicialmente para exibir o relógio quando o botão é clicado.
});



// Botão concluir do tema HTML
const btn_concluir = document.getElementById("concluir-html");
btn_concluir.addEventListener("click", () => {
    
    sec = 0;
    min = 0;
    hr = 0;
        clearInterval(interval);
        window.alert("Você parou em: " + document.querySelector(".relogio").innerHTML);
        document.querySelector(".relogio").innerHTML = "00:00:00";
});


// Botão concluir do tema CSS
const btn_concluir2 = document.getElementById("concluir-css");
btn_concluir2.addEventListener("click", () => {
    
    sec = 0;
    min = 0;
    hr = 0;
        clearInterval(interval);
        window.alert("Você parou em: " + document.querySelector(".relogio").innerHTML);
        document.querySelector(".relogio").innerHTML = "00:00:00";
});


// Botão concluir do tema JavaScript
const btn_concluir3 = document.getElementById("concluir-js");
btn_concluir3.addEventListener("click", () => {
    
    sec = 0;
    min = 0;
    hr = 0;
        clearInterval(interval);
        window.alert("Você parou em: " + document.querySelector(".relogio").innerHTML);
        document.querySelector(".relogio").innerHTML = "00:00:00";
});