// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Button feedback
document.querySelector("form button").addEventListener("click", function(e){
  e.preventDefault();
  this.textContent = "Sent ✓";
});