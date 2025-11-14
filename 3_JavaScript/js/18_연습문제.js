
const applyBtn = document.querySelector("#apply");
const registerBtn = document.querySelector("#register");
const result = document.querySelector("#result");

applyBtn.addEventListener("click", () =>{
  const inputSize = document.querySelector("#inputSize");
  const inputColor = document.querySelector("#inputColor");

  inputText.style.fontSize = inputSize.value;
  inputText.style.color = inputColor.value;

})

registerBtn.addEventListener("click", () => {
  
  const inputText = document.querySelector("inputText");

  
  result.innerText = inputText.value;
});