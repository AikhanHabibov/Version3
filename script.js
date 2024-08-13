function addItem(List) {
  const Otvet = prompt("Що додати?");
  if (Otvet) {
    const newItem = `<li>${Otvet}</li>`;
    document.getElementById("List").insertAdjacentHTML("beforeend", newItem);
  }
}
const button = document.querySelector(".js-button");
button.addEventListener("click", addItem);
