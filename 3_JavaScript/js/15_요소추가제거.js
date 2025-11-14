// 1. 공통적으로 사용되는 요소를 전역변수로 선언
const addBtn = document.querySelector("#add");
const calcBtn = document.querySelector("#calc");
const container = document.querySelector(".container");
// div -> 동적으로 만들어진 요소를 최종적으로 붙여야하는 대상

// 추가 버튼 클릭 시
addBtn.addEventListener("click", () => {
  /*
    <div class="row">
      <input type="number" class="input-number">
    </div>
  */

  // 1. div 요소 생성하기 
  const row = document.createElement("div"); // <div></div>

  // 2. row 요소에 class 추가하기
  row.classList.add("row"); // <div class="row"></div>

  // 3. input 요소 생성하기
  const input = document.createElement("input"); // <input>

  // 4. input 요소에 속성 추가하기
  input.setAttribute("type", "number"); // <input type="nubmer">
  // == input.type = "number";

  // 5. 클래스 "input-number" 추가하기
  // input.setAttribyte("class", "input-number")
  input.classList.add("input-number");
  // <input type="number" class="input-number">



  // ----------------------------------------------

  // 6. span 요소 생성하기 <span class="remove-row">&times;</span>
  const span = document.createElement("span"); // <span></span>

  // 7. span xormdp zmffotm "remove-row" 축
  span.classList.add("remove-row"); // <span class="remove-row"></span>

  // 8. span 태그 내용으로 &times; 추가(
  // 
  HTML 사용)
  span.innerHTML = "&times:" // <span class="remove-row">&times;</span>



  // --------- 조립하기
  // 9. div.row 요소에 자식으로 input 추가
  row.append(input, span);
  /*
    <div class="row">
      <input type="number" class="input-number">
      <span class="remove-row">&times;</span>
    </div>
  */

  // 10. 완성된 div.row 를 container의 마지막 자식으로 추가
  container.append(row);


  // ********************   ---------------- 깃허브 확인

  // 클릭된 X 버튼의 부모 요소를 제거
  
  // 1. 만들어진 X버튼(span)에 이벤트리스너/핸들러 추가
  span.addEventListener("click", (e) => {
    
    // 2. 현재 이벤트가 발생한 요소(클릭된 X버튼)의 부모 요소를 탐색(선택)
    const parent = e.target.parentElement; // div.row
    // 화살표 함수 내에서는 this 쓰지 못한다 
    // 화살표 함수 내에서 this는 window객체로 인식하기 때문에

    // 3. 부모 요소를 제거하기
    parent.remove();

  })

})






// 계산 버튼 클릭 시 ---------------------------------------
calcBtn.addEventListener("click", () => {
  
  // 1. 모든 .input-number 요소 얻어오기
  const numbers = document.querySelectorAll(".input-number");
  
  // 2. for문으로 모든 요소 접근하여 작성된 값(value)을 얻어와 
  //    숫자로 변경한 후 합계 저장 변수에 누적
  let sum =0;

  for(let i = 0; i < numbers.length; i++){
    sum += Number(numbers[i].value);
  }
  // == for(let temp of numbers){}

  // 3. alert() 결과 출력
  alert("결과 : " + sum);

})





