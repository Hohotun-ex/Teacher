function toggleMenu() {
  document.getElementById("menu").classList.toggle("open");
}

function demoButton(button) {
  const oldText = button.textContent;
  button.textContent = "Демо";
  setTimeout(() => { button.textContent = oldText; }, 700);
}

function demoForm() {
  document.getElementById("form-message").textContent = "Це демонстраційна форма — дані нікуди не надсилаються.";
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => document.getElementById("menu").classList.remove("open"));
});
