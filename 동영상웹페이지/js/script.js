const items = document.querySelectorAll('article');
const aside = document.querySelector('aside');
const close = document.querySelector('aside span');

//items의 갯수만큼 반복
for(const el of items){
  console.log(el)
  //현재 반복돌고 있는 article요소에 mouseenter이벤트 발생
  el.addEventListener("mouseenter",() => {
    //자식인 video를 재생
    el.querySelector('video').play();
  })
  //현재 반복으로 돌고 있는 article요소에 mouseleave이벤트 발생
  el.addEventListener('mouseleave', () => {
    //자식인 video를 멈춤
    el.querySelector('video').pause();
  })

  //현재 반복돌고 있는 article요소에 click이벤트 발생
  el.addEventListener('click', () => {
    //제목과 본문의 내용, video요소의 src값을 변수에 저장
    let tit = el.querySelector("h2").innerText;
    let txt = el.querySelector("p").innerText;
    let vidSrc = el.querySelector("video").getAttribute("src");

    //aside요소 안쪽의 콘텐츠에 위의 변수 내용을 적용
    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSrc);

    //aside요소 안쪽의 동영상을 재생하고 aside요소에 on을 붙여 팝업패널 활성화
    aside.classList.add("on");
    aside.querySelector("video").play();
  });
}

//닫기 버튼 클릭시
close.addEventListener("click", () => {
  //aside요소에 on클래스를 제거하고 안쪽의 영상을 재생 중지
  aside.classList.remove("on");
  aside.querySelector("video").pause();
})