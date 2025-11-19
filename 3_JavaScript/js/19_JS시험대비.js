const btn = document.querySelector("#applyBtn");
//onst box = document.querySelector("#textArea");


btn.addEventListener("click", () => {

  const boxWidth = document.querySelector("#boxWidth");
  const boxHeight = document.querySelector("#boxHeight");
  const fontColor = document.querySelector("#fontColor");
  const inputText = document.querySelector("#inputText");

  if (inputText.value.length == 0) {
    alert("적용할 내용을 입력해주세요");
    return;
  }

  const result = document.querySelector("#resultText");

  console.log(inputText.value);
  result.innerText = inputText.value;
  result.style.color = fontColor.value;
  result.style.fontSize = size.value + "px";


});
