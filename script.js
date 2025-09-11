function showMessage() {
  console.log("Portfolio loaded!");
}

window.addEventListener("scroll", function () {
  document.querySelectorAll(".fade-in").forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});
