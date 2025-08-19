document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    // Wait a moment to let Formspree process the submission
    setTimeout(() => {
      form.reset(); // This clears all the fields
    }, 500);
  });
});