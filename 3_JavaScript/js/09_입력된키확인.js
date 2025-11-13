// 키보드를 누르고있을 떄 : keydown 
// 키보드를 떼었을 떄 : keyup


// toUpperCase() : 소문자 -> 대문자
// toLowerCase() : 대문자 -> 소문자

// 이벤트가 일어나는 대상 누구인가?
// 화면 자체(document) -> document.addEventListener 로 가야한다


/* ----------< 풀이 1>-----------------------------------------------------
// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 화면에서 키가 눌러지는걸 감지했을 때
document.addEventListener("keydown", function (e) {

  let idx; // 인덱스 값을 저장할 변수

  // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
  switch(e.key.toLowerCase){
    case 'q' : idx = 0; break;
    case 'w' : idx = 1; break;
    case 'e' : idx = 2; break;
    case 'r' : idx = 3; break;
    default : return; // 함수 종료
  }

  // idx 번호와 일치하는 keys 배열의 요소 배경색을 변경
  keys[idx].style.backgroundColor = "deepPink";

})


// 화면에서 키가 떼어지는걸 감지했을 때
document.activeElement("keyup", function(e){

  let idx; // 인덱스 값을 저장할 변수

  // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
  switch(e.key.toLowerCase){
    case 'q' : idx = 0; break;
    case 'w' : idx = 1; break;
    case 'e' : idx = 2; break;
    case 'r' : idx = 3; break;
    default : return; // 함수 종료
  }

  // idx 번호와 일치하는 keys 배열의 요소 배경색을 변경
  keys[idx].style.backgroundColor = "white";
});
*/


/* < 풀이2 : 더 깔끔하게 코드 쓰기 >---------------------------------------------------
 화면에 존재하는 key 모두 얻어오기 */
const keys = document.querySelectorAll(".key");
const keyMap = {'q': 0, 'w': 1, 'e': 2, 'r': 3 };

// 키보드 이벤트 핸들러 함수
// JS Object
// 객체명[key] -> 매핑된 value
// 객체명.key -> aovldehls value ****************  !!! 매우 중요!!! ******************
function changeKeyColor(e, color){
  const idx = keyMap[e.key.toLowerCase()]; 
  // e.key 누른 키가 넘어와 / toLowerCase로 소문자로 key 값에 들어와
  // keyMap['q'] -> 0
  // keyMap['w'] -> 1
  // keyMap['e'] -> 2
  // keyMap['r'] -> 3
  // keyMap['a'] -> undefined

  // keyMap에 없는 값 입력되면 idx 는 undefined
  if(idx != undefined){
    keys[idx].computedStyleMap.backgroundColor = color;
  }

}

// 키가 눌렸을때/ 떼어졌을 때
document.addEventListener("keydown", (e) => changeKeyColor(e, "deepPink") /*한줄이면 {} 생략 가능*/);// == function(e) {}
document.addEventListener("keyup", (e) => changeKeyColor(e, "white"));

// 이벤트가 감지되었을 떄 실행해야하는 함수(ex) changeKeyColor)
// 만약 해당 함수에 전달할 인자가 없는 경우
// -> 함수명만 써도 됨 ("keydown", changeKeyColor)
// -> changeKeyColor 함수 선언부의 매개변수에서 이벤트 객체 (e)를 가져다 쓸 수 있음


// 만약 해당 함수에 전달할 인자가 있는 경우
// -> 익명함수 형태로 작성할 것 (e) => {}
// -> 전달인자의 1번째 값은 e를 넘겨주기, 2번째 전달인자부터 내가 전달하고싶은 데인터 나열...
// -> ("keydown", (e) => changeKeyColor(e, "deepPink"))


/* < 풀이3 : 더 깔끔하게 코드 쓰기 >--------------------------------------------------
const keys = document.querySelectorAll(".key");
const keyMap = { q: 0, w: 1, e: 2, r: 3 };

document.addEventListener("keydown", handleKey);
document.addEventListener("keyup", handleKey);

function handleKey(e) {
  const idx = keyMap[e.key.toLowerCase()];
  if (idx === undefined) return;

  // event.type이 'keydown'일 때만 색 변경, 아닐 땐 white로 복귀
  keys[idx].style.backgroundColor = e.type === "keydown" ? "deeppink" : "white";
}
*/


// ----------------- *************** 뒷부분 강의 다시 듣기********************





/* 내 풀이! 너무 길다 ㅠㅠ
const qkey = document.querySelector(".key-box > div:nth-of-type(1)");
const wkey = document.querySelector(".key-box > div:nth-of-type(2)");
const ekey = document.querySelector(".key-box > div:nth-of-type(3)");
const rkey = document.querySelector(".key-box > div:nth-of-type(4)");

document.addEventListener("keydown", function (e) {
  if (e.key == "Q") {
    toLowerCase(e.key);
  }

  if (e.key == "q"){
    qkey.style.backgroundColor = "hotpink";
  }
})


document.addEventListener("keyup", function (e) {
  if (e.key == "Q") {
    toLowerCase(e.key);
  }

  if (e.key == "q"){
    qkey.style.backgroundColor = "";
  }
})

//--------------------------------
document.addEventListener("keydown", function (e) {
  if (e.key == "W") {
    toLowerCase(e.key);
  }

  if (e.key == "w"){
    wkey.style.backgroundColor = "hotpink";
  }
})


document.addEventListener("keyup", function (e) {
  if (e.key == "W") {
    toLowerCase(e.key);
  }

  if (e.key == "w"){
    wkey.style.backgroundColor = "";
  }
})

//--------------------------------
document.addEventListener("keydown", function (e) {
  if (e.key == "E") {
    toLowerCase(e.key);
  }

  if (e.key == "e"){
    ekey.style.backgroundColor = "hotpink";
  }
})


document.addEventListener("keyup", function (e) {
  if (e.key == "E") {
    toLowerCase(e.key);
  }

  if (e.key == "e"){
    ekey.style.backgroundColor = "";
  }
})

//-------------------------------
document.addEventListener("keydown", function (e) {
  if (e.key == "R") {
    toLowerCase(e.key);
  }

  if (e.key == "r"){
    rkey.style.backgroundColor = "hotpink";
  }
})


document.addEventListener("keyup", function (e) {
  if (e.key == "R") {
    toLowerCase(e.key);
  }

  if (e.key == "r"){
    rkey.style.backgroundColor = "";
  }
})
*/
