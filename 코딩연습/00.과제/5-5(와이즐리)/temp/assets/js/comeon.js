const qs = (el) => {
  //개수
  const length = document.querySelectorAll(el).length;

  //리턴
  if (1 == length) {
    return document.querySelector(el);
  }
  if (1 < length) {
    return document.querySelectorAll(el);
  }
};

//일단 갯수 구하기
//개수가 1보다크면 쿼리셀렉터올
//개수가 1이면 쿼리셀랙터

setTimeout(() => {
  const a = qs(".sb-area a");
  a.addEventListener("click", () => {
    qs(".side-bg").classList.toggle("on");
  });

  const b = qs(".side-bg-dim");
  b.addEventListener("click", () => {
    qs(".side-bg").classList.toggle("on");
  });

  const btn = qs(".product-page");
  btn.addEventListener("click", () => {
    qs(".bg100").classList.toggle("on");
  });
  const depth1Btn = document.querySelectorAll(".btn-item");
  const tapContents = qs(".content-raper>.content-area");

  console.log(tapContents);

  for (let i = 0; i < depth1Btn.length; i++) {
    //depth1Btn 과자봉지 말고, 아이템 하나하나 돌면서 이벤트 달기위해 쓰는 포문
    depth1Btn[i].addEventListener("click", () => {
      //자, 클릵될 때마다. 이거 할꺼야.
      for (let j = 0; j < depth1Btn.length; j++) {
        depth1Btn[j].classList.remove("on");
        //일단, depth1Btn 원소 다 순회하면서 클레스 on지우자.
      }
      for (let k = 0; k < tapContents.length; k++) {
        tapContents[k].classList.remove("on");
        //일단, depth1Btn 원소 다 순회하면서 클레스 on지우자.
      }

      depth1Btn[i].classList.add("on");
      tapContents[i].classList.add("on");
      //클릭된 놈 (생각해보기, 왜 클릭한 놈이지?)
    });
  }
}, 300);
