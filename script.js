function scrollToForm() {
  document.getElementById("form").scrollIntoView({ behavior: "smooth" });
}

function submitForm() {
  alert("Booking received! We will contact you.");
}

/* SCROLL ANIMATION */
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});