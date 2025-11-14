// 정규표현식 객체 생성 + 확인하기
document.querySelector("#btn1").addEventListener("click", () => {

  // 정규표현식 객체 생성
  // 방법1
  const regExp1 = new RegExp("script");
  // "script"와 일치하는 문자열이 있는지 검사하는 정규표현식
  
  // 방법2
  const regExp2 = /java/; 
  // "java"와 일치하는 문자열이 있는지 검사하는 정규표현식

  // 확인하기
  const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
  const str2 = "jsp(java server page)도 곧 할겁니다.";
  const str3 = "java, java, java";

  console.log( regExp1.test(str1) );
  console.log( regExp1.exec(str1) );

  console.log( regExp2.test(str2) );
  console.log( regExp2.exec(str2) );

  console.log( regExp2.test(str3) );
  console.log( regExp2.exec(str3) );


});



// 메타문자 확인하기 ---------------------------
document.querySelector("#btn2").addEventListener("click", () => {

  // [abcd]
  const regExp1 = /[abcd]/;
  console.log( regExp1.test("apple") ); // true
  console.log( regExp1.test("ssbss") ); // true
  console.log( regExp1.test("qwerty") ); // false
  
  // ^ (캐럿)
  const regExp2 = /^group/; // 문자열의 시작이 group인지 확인
  console.log(regExp2.test("group100") ); // true
  console.log(regExp2.test("100group") ); // false

  // $ (달러)
  const regExp3 = /group$/; // 문자열의 끝이 group인지 확인
  console.log(regExp3.test("group100") ); // false
  console.log(regExp3.test("100group") ); // true


});



// 이름 유효성 검사 ----------------------------------
document.getElementById("inputName").addEventListener("keyup", (e) => {
  
  // 결과 출력용 span 요소 얻어오기
  const span = document.getElementById("inputNameResult");

  // gksrmf 2~5글자 정규표현식 객체 만들기
  const regExp = /^[ㄱ-힣]{2,5}$/;
  
  // 빈칸인지 검사
  if(e.target.value.length ==0 ){
    span.innerText="";
    return;
  }
  
  // 유효성 검사
  if(regExp.test(e.target.value)) { // 한글 2~5글자 유효한 값을 작성한 경우
    span.innerText = "유효한 이름 형식입니다.";
    span.style.color="green";
    span.style.fontWeight="bold";

  } else{ // 유효하지 않은 값 작성한 경우
    span.innerText = "이름 형식이 유효하지 않습니다.";
    span.style.color="red";
    span.style.fontWeight="bold";
  }

});


// 생년월일(숫자 6자리)-고유번호(숫자7자리) ----------
document.getElementById("inputPno").addEventListener("keyup", (e) => {

  const span = document.getElementById("inputPnoResult");
  
  if(e.target.value.length == 0){
    span.innerText = "주민등록번호를 작성해주세요.";
    span.classList.remove("confirm", "error");
    return;
  } 
  // 생년월일(숫자 6자리)-고유번호(숫자7자리)
  const regExp1 = /^[0-9]{6}-[0-9]{7}$/;
  const regExp2 = /^\d{6}-\d{7}$/;
  //---------------------------------------------------------엄격히 만드는것 깃허브 추가
  
  if(regExp1.test(e.target.value)){
    span.innerText ="유효한 주민등록번호 형식입니다.";
    // span.classList.add("confirm"); // HTML 위에 style에 정의한 클래스 이용
    // span.classList.remove("error"); // 유효하지 않았다가  유효한 상태로 바뀐 경우

    span.classList.toggle("confirm", true); // 토글 형태로도 만들수 있다
    span.classList.toggle("error", flase);

  } else{
    span.innerText ="주민등록번호 형식이 유효하지 않습니다.";
    span.classList.add("error");
    span.classList.remove("confirm"); // 유효했다가 유효하지 않은 상태로 바뀐 경우
  }
  
});










