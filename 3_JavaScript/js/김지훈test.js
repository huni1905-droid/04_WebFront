console.log("확인");

const btn = document.querySelector("#applyBtn");


btn.addEventListener("click", () => {

  const boxWidth = document.querySelector("#inputwidth");
  const boxHeight = document.querySelector("#inputhight");
  const textSize = document.querySelector("#textSize");
//  const 굵기 = document.querySelector("");
  const fontColor = document.querySelector("#fontColor");
  const backColor = document.querySelector("#backColor");
 // const 가로정렬 = document.querySelector("");
 // const 세로정렬 = document.querySelector("");
 
 const inputText = document.querySelector("#inputText");
  

  let result = document.querySelector("#result");
  let resultBox = document.querySelector("#resultBox");
  
  // console.log(inputText.value);

  //resultBox.background-color = backColor.value;
  resultBox.style.width = boxWidth.value + "px";
  resultBox.height = boxHeight.value + "px";

  result.innerText = inputText.value;
  result.style.color = fontColor.value;
  result.style.fontSize = textSize.value + "px";


});
