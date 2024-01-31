const buttonYes = document.querySelector("#button-yes");
const buttonNo = document.querySelector("#button-no");
const image = document.querySelector("#image");
const title = document.querySelector("#title");
const text = document.querySelector("#text");
const body = document.body;

var randomX = 0;
var randomY = 0;
var counter = 0;
var buttonFlag = false;

buttonYes.addEventListener("click", () => {
  image.setAttribute("src", "../../assets/chipi_chapa.gif");
  
  if (window.innerWidth < 768) {
    image.style.width = "400px";
  } else {
    image.style.width = "700px";
  }

  text.innerHTML = "Espléndido.";
  text.style.fontSize = "4rem";

  buttonYes.style.display = "none";
  buttonNo.style.display = "none";
  title.style.display = "none";
});

buttonNo.addEventListener("click", () => {

  if (buttonFlag == false) {
    buttonFlag == true;
    body.appendChild(buttonNo);
    buttonNo.style.position = "absolute";
    buttonNo.style.top = "0px";
    buttonNo.style.left = "0px";
  }

  counter++;

  // Sets margin from display borders in px
  const margin = 70;

  if (counter < 5) {
    randomX = Math.round(Math.random() * window.innerWidth) - margin;
    randomY = Math.round(Math.random() * window.innerHeight) - margin;
  
    buttonNo.style.top = randomY + "px";
    buttonNo.style.left = randomX + "px";

  } else {
    image.setAttribute("src", "../../assets/cat_with_gun.gif")
    text.innerHTML = '"No" nunca fue una opción 👹';
    buttonNo.setAttribute("class", "dvd");
    buttonNo.innerHTML = "";
    // body.appendChild(buttonNo);
  }
});