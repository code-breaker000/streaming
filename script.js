const button = document.getElementById("themeToggle");
const body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    button.textContent = "Thème sombre";
  } else {
    button.textContent = "Thème clair";
  }
});
