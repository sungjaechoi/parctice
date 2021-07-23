const timer = setTimeout(() => {
  // 	버튼을 누르면 메뉴가 열리고 닫힌다.
  // 매인 메뉴를 누르면 서브메뉴가 열린다.
  // .m-main-btn 누르면 .nav-area 에 토글로 on	을 붙여준다.
  //  클릭시 메뉴 버튼에 .close 를 붙여준다
  // #wapper 에 .dim 을 붙여준다
  // 포문을 돌려서 .main-menu-item
  // 이벤트를 달고  전체 리무버 하고
  // 클릭시 .on이 붙을수 있게 한다.
  const mainBtn = document.querySelector(".m-main-btn");
  const wapper = document.querySelector("#wapper");
  const navArea = document.querySelector(".nav-area");
  const mainTitle = document.querySelectorAll(".main-menu-title");
  mainBtn.addEventListener("click", () => {
    mainBtn.classList.toggle("close");
    navArea.classList.toggle("on");
    wapper.classList.toggle("dim");
  });
  mainTitle.forEach((li) => {
    li.addEventListener("click", (e) => {
      //만약 열렸다면, 다시 꺼라.
      const itemEl = closest(e.target, "main-menu-item");
      //상위요소 아이템을 찾음

      console.log(itemEl);

      if (itemEl.tagName !== "HTML") {
        //클로셋의 반환요소는 내가 찾는것을 찾았거나, 에이치티엠엘 요소.
        //에이치티엠엘요소라면 실행 안되어야함.
        if (itemEl.classList.contains("on")) {
          console.log(itemEl.classList.contains("on"));
          //찾아온 메인메뉴아이템이 온 클레스를 가지고 있는지 검사.
          // 트루라면 실행, 아니면 해당 이프문 코드는 실행안됨
          //contains = 인자로 받은 클레스를 가지고 있으면 트루반환, 없으면 펄스 반환
          itemEl.classList.remove("on");
          return;
          //아이템의 온클레스 지움. 그리고 함수 종료.
        }
      }

      mainTitle.forEach((item) => {
        //포문
        const itemEl = closest(item, "main-menu-item");
        //각 타이틀을 기준으로 메인메뉴아이템을 잡아옴
        itemEl.classList.remove("on");
        //잡아온 메인메뉴아이템 온 클레스 삭제
      });
      itemEl.classList.add("on");
      //눌린 메인메뉴아이템 클레스 부여
    });
  });
}, 1000);
