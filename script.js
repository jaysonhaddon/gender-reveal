const body = document.querySelector("body");
const main = document.querySelector(".main");
const revealBtn = document.querySelector(".reveal-btn");

revealBtn.addEventListener("click", () => {
  const revealTxt = document.createElement("h2");
  revealTxt.textContent = "It's a GIRL!";
  main.appendChild(revealTxt);
  body.classList.add("active");
  revealBtn.remove();
});
