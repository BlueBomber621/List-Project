const form = document.querySelector(".items");
const msg = document.querySelector(".msg");
const productList = document.querySelector("#products");
const itemNameInput = document.querySelector("#itemText");
const itemDescInput = document.querySelector("#itemDesc");

productArray = [];

form.addEventListener("submit", submitItem);

function submitItem(e) {
  e.preventDefault();

  if (itemNameInput.value == "") {
    msg.innerHTML = "<h4>Please fill out required portions.</h4>";
    msg.querySelector("h4").classList.add("error");

    setTimeout(() => msg.querySelector("h4").remove(), 3000);
  } else {
    if (itemDescInput.value == "") {
      let input = document.createElement("li");
      input.innerHTML = `<h2>${itemNameInput.value}</h2>`;
      productList.appendChild(input);
      itemNameInput.value = "";
    } else {
      let input = document.createElement("li");
      input.innerHTML = `<h2>${itemNameInput.value}</h2>
      <p>${itemDescInput.value}</p>`;
      productList.appendChild(input);
      itemNameInput.value = "";
      itemDescInput.value = "";
    }
  }
}
