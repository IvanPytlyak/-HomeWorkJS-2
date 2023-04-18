const form = document.querySelector("form");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalOk = document.getElementById("modal-ok");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const surname = document.getElementById("surname").value.trim();
  const age = document.getElementById("age").value.trim();

  if (name === "" || surname === "" || age === "") {
    alert("Заполните все поля");
    return;
  }
  modalText.textContent = `Имя: ${name}\n || Фамилия: ${surname}\n || Возраст: ${age}`;
  modal.style.display = "block";
});

modalOk.addEventListener("click", () => {
  modal.style.display = "none";
});
