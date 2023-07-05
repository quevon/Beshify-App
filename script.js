const input = document.getElementById("textInput");
const result = document.getElementById("result");
const modal = document.getElementById("myModal");
const closeModal = document.getElementsByClassName("close")[0];

input.addEventListener("input", function () {
  result.innerText = input.value.replace(/ /g, "🤸");
});

function copyText() {
  const textToCopy = result.innerText;
  navigator.clipboard.writeText(textToCopy);
  modal.style.display = "block";
}

function clearText() {
  result.innerText = "";
  input.value = "";
}

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
