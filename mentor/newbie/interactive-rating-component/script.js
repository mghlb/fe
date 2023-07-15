window.addEventListener("DOMContentLoaded", () => {
  const scoreButtons = document.querySelectorAll(".score-btn");
  const submitButton = document.querySelector(".button");
  const rateCard = document.querySelector(".rate-card");
  const thankCard = document.querySelector(".thank-card");
  const thankYou = document.querySelector(".thank");

  scoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      buttonReset(scoreButtons);
      button.classList.add("active");
    });
  });

  submitButton.addEventListener("click", () => {
    for (const button of scoreButtons) {
      if (button.classList.contains("active")) {
        const selected = `<p class="selection">You selected ${button.dataset.score} out of 5</p>`;
        thankYou.insertAdjacentHTML("beforebegin", selected);
        rateCard.classList.add("hide");
        thankCard.classList.remove("hide");
      }
    }
  });
});

function buttonReset(buttons) {
  for (const button of buttons) {
    if (button.classList.contains("active")) button.classList.remove("active");
  }
}
