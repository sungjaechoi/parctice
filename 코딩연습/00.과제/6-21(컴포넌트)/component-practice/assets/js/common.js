setTimeout(() => {
  const tabList = qs(".tab-list > li", "array"); //하나더라도 유사배열 (option array)
  const tabContent = qs(".tab-content-item", "array");

  //텝 메뉴 중 하나를 클릭하면
  // 누른거에 불 들어오고 누른거에 해당하는 콘텐츠가 보인다.
  tabList.forEach((li) => {
    li.addEventListener("click", (e) => {
      const index = [...tabList].indexOf(e.target); // indexof->배열의 인덱스 반환 //숫자여
      tabList.forEach((li) => li.classList.remove("on")); //tabList내부 순회하면서 지움지움
      e.target.classList.add("on"); // 눌린놈 이벤트 객체에 target에 있음. 거기 접근해서 add
      tabContent.forEach((li) => li.classList.remove("on"));
      tabContent[index].classList.add("on");
    });
  });

  // 클릭하면 .on 이붙는다

  const pageItem = document.querySelectorAll(".page-item");
  console.log(pageItem);
  pageItem.forEach((item) => {
    item.addEventListener("click", () => {
      pageItem.forEach((item) => {
        item.classList.remove("on");
      });
      item.classList.add("on");
    });
  });

  //tab-list 변수로 잡고 click 시
  const tabListBtn = document.querySelector(".tab-list");
  console.log(tabListBtn);
  tabListBtn.addEventListener("click", () => {
    tabListBtn.classList.toggle("opend");
  });
}, 300);
