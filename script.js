const input = document.getElementById("textInput");
const result = document.getElementById("result");
const modal = document.getElementById("myModal");
const modalMessage = document.getElementById("message");
const modalContent = document.querySelector(".modal-content");

const closeModal = document.getElementsByClassName("close")[0];

input.addEventListener("input", function () {
  result.innerText = input.value.replace(/ /g, "🤸");
});

function copyText() {
  const value = input.value;
  const textToCopy = result.innerText;
  if (value === null || value.trim() === "") {
    modal.style.display = "block";
    modalContent.style.backgroundColor = "#ee6c6c";
    modalMessage.innerText = "Input Text First!";
    result.innerText = "";
    input.value = "";
  } else {
    navigator.clipboard.writeText(textToCopy);
    modal.style.display = "block";
    modalContent.style.backgroundColor = "#9ae6b5";
    modalMessage.innerText = "Text Copied Succesfully!";
    result.innerText = "";
    input.value = "";
  }
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
