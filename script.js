const filterButtons = document.querySelectorAll(".filter-button");
const quoteCards = document.querySelectorAll(".quote-card");
const heartButtons = document.querySelectorAll(".heart-button");
const shuffleButton = document.querySelector("#shuffle-button");
const shuffleResult = document.querySelector("#shuffle-result");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    const filter = button.dataset.filter;
    quoteCards.forEach((card) => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isFavorite = button.classList.toggle("is-favorite");
    button.textContent = isFavorite ? "♥" : "♡";
    button.setAttribute("aria-pressed", String(isFavorite));
  });
});

shuffleButton.addEventListener("click", () => {
  const visibleQuotes = [...quoteCards]
    .filter((card) => !card.classList.contains("is-hidden"))
    .map((card) => card.querySelector("blockquote").textContent);
  const randomQuote = visibleQuotes[Math.floor(Math.random() * visibleQuotes.length)];

  shuffleResult.textContent = randomQuote;
  shuffleResult.classList.remove("is-visible");
  requestAnimationFrame(() => shuffleResult.classList.add("is-visible"));
});
