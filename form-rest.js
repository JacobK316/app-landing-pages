document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    // Wait a moment to let Formspree process the submission
    setTimeout(() => {
      form.reset(); // This clears all the fields
    }, 500);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const birthYear = 2008;
  const birthMonth = 3;
  const birthDay = 28;

  const today = new Date();
  let age = today.getFullYear() - birthYear;

  // Check if birthday has occurred yet this year
  const hasHadBirthday =
    today.getMonth() + 1 > birthMonth ||
    (today.getMonth() + 1 === birthMonth && today.getDate() >= birthDay);

  if (!hasHadBirthday) {
    age -= 1;
  }

  document.getElementById("dev-age").textContent = age;
});