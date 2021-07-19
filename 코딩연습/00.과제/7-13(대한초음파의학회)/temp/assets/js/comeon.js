const timer = setTimeout(() => {
  const MainBtn = document.querySelector(".m-main-btn");
  const Wapper = document.querySelector("#wapper");
  const navArea = document.querySelector(".nav-area");
  const menuItem = document.querySelectorAll(".main-menu-item");
  //모바일 메뉴 버튼
  //메뉴 버튼 이벤트 달아준다.
  //서브메뉴 토글,  dim 토글
  MainBtn.addEventListener("click", () => {
    navArea.classList.toggle("on");
    Wapper.classList.toggle("opend");
  });

  //메인 메뉴 아이템 포문으로 전부 이벤트 달아준다.
  //토글 로 각 아이템에 클래스 on 붙여준다.

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("on");
    });
  });
}, 1000);
