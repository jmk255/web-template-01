//top버튼 선택
const btn = document.querySelector('.top');
//브라우저 내에서 스크롤 이벤트가 발생했을 때 실행
addEventListener('scroll',() => {
  let scrollTop = window.scrollY;//스크롤 이동값
  if(scrollTop > 20){//스크롤 이동값이 20보다 크면
    btn.style.display = "block";//버튼을 화면에 표시
  }else{//스크롤 이동값이 20보다 작으면
    btn.style.display = "none";//버튼을 화면에서 제거
  }
});
//버튼을 클릭하면 브라우저 최상단으로 이동
btn.addEventListener('click', (e) => {
  e.preventDefault();//링크 기능을 제거

  //window에 srollTo API를 사용하여 페이지 상단으로 부드럽게 스크롤 이동
  window.scrollTo({
    behavior: 'smooth',
    left:0,
    top:0
  })
})

//스크롤 이동시 member이미지가 나타남
addEventListener("scroll", () => {//브라우저 내에서 스크롤 이벤트 발생시
  let scrollTop = window.scrollY;//스크롤 이동값
  const works = document.querySelector("#works");
  const member = document.querySelector(".member");
  //브라우저 상단에서부터 요소의 top위치까지의 거리 + 스크롤 이동값 = 페이지 최상단에서부터 #works의 top위치까지의 거리
  let worksTop = works.getBoundingClientRect().top + scrollTop;
  if(scrollTop > worksTop){//스크롤 이동값이 works의 top위치값 보다 커지면
    member.classList.add("on");//멤버에 on클래스를 추가하여 화면에 나타나게 함
  }else{ //스크롤 이동값이 works의 top위치값 보다 작아지면
    member.classList.remove("on");
  }
})
