function showMessage() {
  console.log("Portfolio loaded!");
}

function checkFadeIn() {
  document.querySelectorAll(".fade-in").forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
}

// Jalankan sekali saat halaman selesai dimuat
window.addEventListener("load", checkFadeIn);

// Jalankan lagi setiap kali scroll
window.addEventListener("scroll", checkFadeIn);