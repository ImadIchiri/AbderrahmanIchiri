import { lettersAr, lettersFr } from "./fillMains.js";

const audio = document.querySelector("audio");
const arMainContainer = document.querySelector("main#ar");
const frMainContainer = document.querySelector("main#fr");
const arBtn = document.getElementById("arBtn");
const frBtn = document.getElementById("frBtn");
const lettersTitle = document.getElementById("letters_title");

arBtn.addEventListener("click", () => {
  arMainContainer.style.display = "flex";
  frMainContainer.style.display = "none";
  lettersTitle.textContent = "حروف اللغة العربية";
});

frBtn.addEventListener("click", () => {
  arMainContainer.style.display = "none";
  frMainContainer.style.display = "flex";
  lettersTitle.textContent = "حروف اللغة الفرنسية";
});

// Append Arabic Letters
lettersAr.forEach((letter, index) => {
  arMainContainer.append(
    createElement(
      `
        <div class='letter' data-number='${index + 1}'>
          <span>${letter}</span>
        </div>
    `,
      "ar"
    )
  );
});

// Append French Letters
lettersFr.forEach((letter, index) => {
  frMainContainer.append(
    createElement(
      `
        <div class='letter' data-number='${index + 1}'>${letter}</div>
    `,
      "fr"
    )
  );
});

// Play Audio After Clicking Tha Letter
function addEvents(element, event, path) {
  element.addEventListener(event, () => {
    audio.setAttribute(
      "src",
      `audios/${path}/letter-${element.dataset.number}.aac`
    );
    audio.play();
  });
}

// Get The HTML Structure And The Language Of Letters And Return An Element That Has An Event ('click')
function createElement(html, language) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  const element = template.content.firstElementChild;
  const path = language === "ar" ? "arabicLetters" : "frenchLetters";
  addEvents(element, "click", path);

  return template.content.firstElementChild;
}
