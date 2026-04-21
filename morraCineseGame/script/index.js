const btn = document.getElementById("inizia");
const scelta = document.getElementById("scelta");

const foglia = document.getElementById("foglia");
const forbice = document.getElementById("forbice");
const sasso = document.getElementById("sasso");

const boxYou = document.getElementById("you");
const boxCpu = document.getElementById("cpu");

const risultato = document.getElementById("risultato");

const puntiYou = document.getElementById("punteggioYou");
const puntiCpu = document.getElementById("punteggioCpu");

let totYou = 0;
let totCpu = 0;

btn.onclick = function () {
    scelta.style.display = "flex";
    btn.style.display = "none";
    risultato.style.display = "none";

    boxYou.style.backgroundImage = "none";
    boxCpu.style.backgroundImage = "none";
};

foglia.onclick = function () {
    gioca("foglia");
};

forbice.onclick = function () {
    gioca("forbice");
};

sasso.onclick = function () {
    gioca("sasso");
};

function gioca(mossaYou) {
    let numero = Math.floor(Math.random() * 3);
    let mossaCpu = "";

    if (numero === 0) {
        mossaCpu = "foglia";
    } else if (numero === 1) {
        mossaCpu = "forbice";
    } else {
        mossaCpu = "sasso";
    }

    boxYou.style.backgroundImage = "url(immagini/" + mossaYou + ".png)";
    boxCpu.style.backgroundImage = "url(immagini/" + mossaCpu + ".png)";

    risultato.style.display = "block";
    risultato.className = "";

    if (mossaYou === mossaCpu) {
        risultato.textContent = "PATTA";
        risultato.classList.add("patta");
    } 
    else if (
        (mossaYou === "foglia" && mossaCpu === "sasso") ||
        (mossaYou === "forbice" && mossaCpu === "foglia") ||
        (mossaYou === "sasso" && mossaCpu === "forbice")
    ) {
        totYou++;
        puntiYou.textContent = totYou;
        risultato.textContent = "HAI VINTO";
        risultato.classList.add("vinta");
    } 
    else {
        totCpu++;
        puntiCpu.textContent = totCpu;
        risultato.textContent = "HAI PERSO";
        risultato.classList.add("persa");
    }

    scelta.style.display = "none";
    btn.style.display = "inline-block";
    btn.textContent = "Gioca ancora";
}