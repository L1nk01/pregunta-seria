const buttonYes = document.querySelector("#button-yes");
const buttonNo = document.querySelector("#button-no");
const image = document.querySelector("#image");
const title = document.querySelector("#title");
const text = document.querySelector("#text");
const body = document.body;

const audio = new Audio("./assets/chipi_chapa.mp3");

var randomX = 0;
var randomY = 0;
var counter = 0;
var buttonFlag = false;

function stopAudio() {
  if (!audio.paused) {
    audio.pause();
    audio.currentTime = 0;
  }
}

window.addEventListener('beforeunload', function(event) {
  stopAudio();
});

window.addEventListener('unload', function(event) {
  stopAudio();
});

buttonYes.addEventListener("click", () => {
  image.setAttribute("src", "");
  image.setAttribute("src", "./assets/chipi_chapa.gif");
  text.innerHTML = "Espléndido.";

  if (window.innerWidth <= 768) {
    image.style.width = "400px";
    text.style.fontSize = "2rem";
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1600) {
    image.style.width = "550px";
    text.style.fontSize = "3rem";
  } else {
    image.style.width = "700px";
    text.style.fontSize = "4rem";
  }

  buttonYes.style.display = "none";
  buttonNo.style.display = "none";
  title.style.display = "none";

  // audio.loop = true;
  audio.play();
  audio.volume = 0.2;
});

buttonNo.addEventListener("click", () => {

  if (buttonFlag === false) {
    buttonFlag = true;
    body.appendChild(buttonNo);
    buttonNo.style.position = "absolute";
    buttonNo.style.top = "0px";
    buttonNo.style.left = "0px";
  }

  counter++;

  if (counter < 5) {
    randomX = Math.round(Math.random() * window.innerWidth);
    randomY = Math.round(Math.random() * window.innerHeight);
  
    buttonNo.style.top = randomY + "px";
    buttonNo.style.left = randomX + "px";

  } else {
    image.setAttribute("src", "./assets/cat_with_gun.gif")
    text.innerHTML = '"No" nunca fue una opción 👹';
    buttonNo.setAttribute("class", "dvd");
    buttonNo.innerHTML = "";
    buttonNo.disabled = true;
  }
});