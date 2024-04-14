const pedido = document.querySelector("h2");
const btnSim = document.querySelector("#sim");
const btnNao = document.querySelector("#nao");
const heart = document.querySelector(".heart");
const containerPedido = document.querySelector(".container");
const heartText = document.querySelector(".heartText");
const divBotoes = document.querySelector(".botoes");
const audio = new Audio(
    "./MEU LENÇOL DOBRADO JÁ TA TODO BAGUNÇADO BEAT DJ LUCAS.mp3"
);
const allImages = [1, 2, 3, 4, 5, 6, 7];
let el = 0;

btnSim.addEventListener("click", () => {
    pedido.classList.add("d-none");
    btnSim.classList.add("d-none");
    btnNao.classList.add("d-none");
    heart.classList.remove("d-none");
    containerPedido.style.width = "800px";
    containerPedido.style.height = "700px";
});

btnNao.addEventListener("mouseover", () => {
    const randomLeftMargin = Math.floor(Math.random() * 400);
    const randomTopMargin = Math.floor(Math.random() * 400);

    btnNao.classList.add("btn-moved"); // Adiciona a classe personalizada
    btnNao.style.marginLeft = `${randomLeftMargin}px`;
    btnNao.style.marginTop = `${randomTopMargin}px`;
});

btnNao.addEventListener("click", () => {
    btnNao.remove();
    divBotoes.style.justifyContent = "center";
});

heartText.addEventListener("click", () => {
    audio.play();
    heartText.innerHTML = `<div class="image-container">
        <img
            src="./fotos/foto7.jpeg"
            alt="Imagem"
        />
    </div>`;
    setInterval(() => {
        el++;
        heartText.innerHTML = `<div class="image-container">
        <img
            src="./fotos/foto${el}.jpeg"
            alt="Imagem"
        />
    </div>`;
        if (el === 2) {
            document.querySelector(".image-container img").style.bottom = "30%";
        }
        if (el === 7) {
            el = 0;
        }
    }, 1500);
});
