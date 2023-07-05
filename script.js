const input = document.getElementById("textInput");
const result = document.getElementById("result");

input.addEventListener("input", function () {
  result.innerText = input.value.replace(/ /g, "🤸");
});

function copyText() {
  const textToCopy = result.innerText;
  navigator.clipboard.writeText(textToCopy);
}
function clearText() {
  result.innerText = "";
  input.value = "";
}
