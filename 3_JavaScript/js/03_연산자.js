console.log('js file loaded') 
// HTML과 JS가 잘 연견 되었나 처음에 콘솔에 찍어보고 작성 시작하기

//------------------------------------------------------------
// document : HTML 문서 내에서
// get : 얻어오다
// Element : HTML 요소
// ById : 아이디로(아이디가 일치하는)
const number1 = document.getElementById("input1");
// HTML 에가 갖고온 변수는 주로 const에 담는다

console.log(number1);

const number2 = document.getElementById("input2");

const reslut = document.getElementById("calcResult");

// 두 수를 더해서 화면에 출력하는 함수
function plusFn(){

  // input요소.value : input 요소에 작성된 값 얻어오기
  const value1 = number1.value;
  const value2 = number2.value;

  console.log(value1, value2);
  // input 창에 2 수를 입력하고 콘솔창과 연결된 + 버튼 누르면 콘솔창에 나온다

  console.log(value1 + value2);
  // -> input 요소에 작성된 값은 무조건 문자열(string) 형태라서
  // 더했을 때 이어쓰기 되는 문제 발생한다.
  
  // [해결방법]
  // 문자열을 숫자로 변경하는 코드를 수행
  // 숫자만 작성된 문자열("123") 을 
  // 진짜 숫자 타입으로 변경하는 방법
  // -> Number("123") --> 123
  console.log(Number(value1) + Number(value2));

  // 두수의 합을 
  // result 변수(아이디가 calcResult인 span 요소)의 
  // 내부글자(<><>태그 사이 글자/ innerText, HTML 요소의 content)로 대입하기
  reslut.innerText = Number(value1) + Number(value2);
}


function minusFn(){
  const value1 = Number( number1.value);
  const value2 = Number( number2.value);

  reslut.innerText = Number(value1) - Number(value2);
}


function multiFn(){
  const value1 = Number( number1.value);
  const value2 = Number( number2.value);

  reslut.innerText = Number(value1) * Number(value2);
}


function divFn (){
  const value1 = Number( number1.value);
  const value2 = Number( number2.value);

  reslut.innerText = Number(value1) / Number(value2);
}


function modFn (){
  const value1 = Number( number1.value);
  const value2 = Number( number2.value);

  reslut.innerText = Number(value1) % Number(value2);
}

// 반복되는 아래의 구문을 function 밖으로 꺼내면 되지 않을까?
// const value1 = Number( number1.value);
// const value2 = Number( number2.value);
// 정상 작동하지 않는다! 왜?
// 전역에 있으면 
// 각 함수가 호출되는 시점에 input 창에 쓰여진 값을 얻어와야되서

/*
const number1 = document.getElementById("input1");
console.log(number1);
const number2 = document.getElementById("input2");
const reslut = document.getElementById("calcResult");
위 구문은 전역에 작성해도 되는 이유?

변하지 않는 요소 내용들이라서 전역에 작성해도 되지만
변할수 있는 값은 함수가 호출되는 시점에 얻어와야한다.
*/

