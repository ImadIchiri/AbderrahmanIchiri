import { imagesList } from "../javascript/images.js";
const cardsContainer = document.getElementById("imagesList");
const audio = document.getElementById("audio");

imagesList.forEach((object) => {
  cardsContainer.append(
    createCard(
      `<div class='card'>
          <img src='../images/animals/${object.image}' alt='' style='width: 250px' />
          <div class='titles'>
            <div class='title'>
              <h2 class='inArabic'>${object.inArabic}</h2>
              <i class="fa-solid fa-circle-play" data-number='${object.id}'></i>
              </div>
              <div class='title'>
              <h2 class='inFrench'>${object.inFrench}</h2>
              <i class="fa-solid fa-circle-play" data-number='${object.id}'></i>
            </div>
          </div>
      </div>`
    )
  );
});

function createCard(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  const content = template.content.firstElementChild;
  const [i1, i2] = content.querySelectorAll("i");
  i1.addEventListener("click", () => {
    setAudioSrc(i1.dataset.number, "ar");
  });
  // i2.addEventListener("click", () => {
  //   setAudioSrc(i2.dataset.number, "fr");
  // });
  return content;
}

function setAudioSrc(number, language) {
  const audioLanguage = language === "ar" ? "arabic" : "french";
  audio.setAttribute(
    "src",
    `../audios/${audioLanguage}Words/word-${number}.aac`
  );
  audio.play();
}
