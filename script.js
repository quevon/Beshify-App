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
    // Create a hidden input element
    const hiddenInput = document.createElement("input");
    hiddenInput.style.position = "fixed";
    hiddenInput.style.top = "0";
    hiddenInput.style.left = "0";
    hiddenInput.style.opacity = "0";
    hiddenInput.value = textToCopy;
    document.body.appendChild(hiddenInput);

    // Select and copy the text from the hidden input
    hiddenInput.select();
    hiddenInput.setSelectionRange(0, hiddenInput.value.length);
    document.execCommand("copy");

    // Remove the hidden input from the DOM
    document.body.removeChild(hiddenInput);

    modal.style.display = "block";
    modalContent.style.backgroundColor = "#9ae6b5";
    modalMessage.innerText = "Text Copied Successfully!";
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
