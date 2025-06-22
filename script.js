let hamburger = document.querySelector(".hamburger");

let navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

document.querySelectorAll(".nav-list").forEach((n) =>
  n.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  })
);

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwGwIOdqcMcphbKq_h6zztNkJ79OYrSqFb8rxHaECJztRyU5ipFJ9-vkYLAqh9yxqLN/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Thank you for your submission.");
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
