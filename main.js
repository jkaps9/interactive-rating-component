let rating = "0";

document.addEventListener("DOMContentLoaded", () => {
  const unselectAll = (buttonList) => {
    buttonList.forEach((btn) => {
      btn.classList.remove("selected");
    });
  };

  const ratingButtonContainer = document.querySelector(
    ".rating-component__rating-buttons",
  );
  const userRating = document.querySelector("#user-rating");

  ratingButtonContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn--rating");
    if (!btn) return;
    const ratingBtns = ratingButtonContainer.querySelectorAll(".btn--rating");
    unselectAll(ratingBtns);
    btn.classList.add("selected");
    rating = btn.dataset.rating;
    userRating.textContent = rating;
  });

  const submitButton = document.querySelector(".btn");
  const mainContent = document.querySelector(".rating-component__content");

  const successMessage = document.querySelector(
    ".rating-component__success-message",
  );

  submitButton.addEventListener("click", () => {
    if (rating === "0") {
      alert("Please select a rating before submitting.");
    } else {
      mainContent.setAttribute("aria-hidden", "true");
      successMessage.setAttribute("aria-hidden", "false");
      successMessage
        .querySelector(".success-message__rating-container > p")
        .focus();
    }
  });
});
