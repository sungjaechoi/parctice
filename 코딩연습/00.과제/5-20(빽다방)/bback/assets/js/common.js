setTimeout(() => {
  const qs = (el) => {
    //개수
    const length = document.querySelectorAll(el).length;
    console.log(length);

    //리턴
    if (1 == length) {
      return document.querySelector(el);
    }
    if (1 < length) {
      return document.querySelectorAll(el);
    }
  };

  //화면 사이즈에 대한 플레그 값. 깃발 / 표시
  let mobileSizeState = false;

  if (window.innerWidth < 1181) {
    mobileSizeState = true;
  } else {
    mobileSizeState = false;
  }
  //   console.log(mobileSizeState);

  //1181
  window.addEventListener("resize", () => {
    // console.log(window.innerWidth);
    if (window.innerWidth < 1181) {
      mobileSizeState = true;
    } else {
      mobileSizeState = false;
    }

    // console.log(mobileSizeState);
  });

  //리사이즈 댔을 때 플래그값 적어야 해염
  //처음에 새로고침해도 대야해여 -> 로드시점에 대야한다

  //   console.log("커몬제이에스");
  const minItem = document.querySelectorAll(".main-item");
  console.log(minItem);
  const subBg = document.querySelector(".sub-bg");
  //   consolwrappere.log(minItem);

  for (let i = 0; i < minItem.length; i++) {
    minItem[i].addEventListener("mouseenter", () => {
      //서브비쥐에 클래스 온을 달아라
      console.log(minItem[i]);
      const has = minItem[i].querySelector(".sub-menu-area");
      //   console.log(has);
      if (!mobileSizeState) {
        if (has) {
          subBg.classList.add("on");
        }
      }
    });

    minItem[i].addEventListener("mouseleave", () => {
      //서브비쥐에 클래스 온을 달아라
      if (!mobileSizeState) {
        subBg.classList.remove("on");
      }
    });
  }
  //m_btn 잡고 main-menu-area 잡고
  const mBtn = document.querySelector(".m_btn");
  const mainItem = document.querySelector(".main-menu-area");
  const wrapper = document.querySelector("#wrapper");
  //버튼 클릭하면 메인메뉴에 클래스 온 추가
  mBtn.addEventListener("click", () => {
    mainItem.classList.toggle("on");
    // subBg.classList.toggle("on");
    wrapper.classList.toggle("menu-opend");
  });
  //메인 아이템을 클릭하면 서브 아이템이 나와야 한다
  //전 체 메인 아이템이 이벤트를 단다
  //전체 메인 아이템에

  //눌럿을떄 펼처짐 , 단 이미 sub-menu라는 클레스가 있는 상태라면 그 클레스를 지우고 끝내야함.

  //눌렀을때, 전체리스트를 돌면서 리무브 해준다.

  //그리고 눌린놈한테 클레스 붙여준다.

  for (let i = 0; i < minItem.length; i++) {
    minItem[i].addEventListener("click", () => {
      if (minItem[i].classList.contains("sub-menu")) {
        minItem[i].classList.remove("sub-menu");
        return;
      }
      for (let j = 0; j < minItem.length; j++) {
        minItem[j].classList.remove("sub-menu");

        // console.log(minItem[j]);
      }
      minItem[i].classList.add("sub-menu");
      //   console.log(mainItem[i]);
    });
  }
  //   window.addEventListener("resize", () => {
  //     if (window.innerWidth < 1181) {
  //       console.log("동작했니");
  //       for (let i = 0; i < minItem.length; i++) {
  //         minItem[i].classList.add("a");
  //         console.log(minItem[i]);
  //       }
  //     }
  //   });

  // 버튼을 클릭하면 .toolbar-area 에 on을 붙여준다.
  // 변수로 버튼, on을 붙일 클래스를 잡아준다.
  // 버튼에 이벤트를 클릭을 달아준다.
  // on 을 붙일 클래스에 클래스 리스트에 접근에서 토글로 on 을 붙여준다.
  const toolberBtn = document.querySelector(".toolber-title");
  const toolbarArea = document.querySelector(".toolbar-area");
  toolberBtn.addEventListener("click", () => {
    toolbarArea.classList.toggle("on");
  });
  // top 버튼 클릭시 스크롤 맨위로 이동 시킨다.
  //top btn 을  변수로 잡아준다
  // addEventlistener 접근하여 클릭을 지정하고 함수 실행
  //함수내에   window.scrollto({top:0, left:0, behavior:'auto,smooth'}) 접근하여
  // 클릭하면 탑으로 올라가고 스크롤을 내리다 맨상위 화면이 되면 나타나고
  // 스크롤을 올리다 상위화면에서 벗어나면 나타난다.
  const topBtn = document.querySelector(".top-btn");
  console.log(topBtn);
  topBtn.addEventListener("click", () => {
    // if (window.scrollTo(0, 0) < 1000) {
    //   console.log(window.sroll);
    //   topBtn.style.display = "none";
    //   return;
    // }
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", (e) => {
    // console.log(window.scrollY);
    if (window.scrollY === 0) {
      topBtn.style.display = "none";
      return;
    }

    if (window.scrollY > 100) {
      topBtn.style.display = "block";
    }
  });
  // 버튼을 누르면 옆에 이미지로 100% 만큼 이동 하게 만듬
  // 리스트 와 버튼 변수잡기
  //  forEach 안에서 element 에 addEvetnListener "click" 걸기
  // btn.innerText 에 접근하여 변수 지정 = ㅣlength = textNumber
  // 변수로 지정해둔 리스트에 접근하여 스타일 트랜스폼 변경
  // 지정해둔 clickNumber로 수치 변경
  //   const slideList = document.querySelector(".slide-list");
  //   const slideBtn = document.querySelectorAll(
  //     ".slide-btn-area>.slide-btn-list>.slide-btn-item>a>.slide-btn"
  //   );
  //   console.log(slideBtn);
  //slideBtn.forEach((element,index,array)=>{};

  //for?
  //foreach(for가 기원임)
  //그럼 포이치가 하는 짓은?
  // ㅇㅇ 순회
  // forEach((btn)=>{}) 요기서 BTN은 뭐임?
  //어떤 배열 값 안에 원소를
  //FOR문에서는 array[i]
  //포이치에서는 내가 부르고 싶은대로 btn/potato로 부르는거
  //

  //   slideBtn.forEach((btn) => {
  //     // console.log(slideBtn);
  //     btn.addEventListener("click", () => {
  //       //   console.log(btn);
  //       const clickNumber = btn.innerText - 1;
  //       //   console.log(clickNuber);
  //       //   slideList.style.transform = `translatex(-${clickNumber * 100}%)`;
  //       slideList.style.transform = `translateX(-${clickNumber * 100}%)`;
  //       console.log(clickNumber);
  //     });
  //   });
  //윈도우에 innerwidth 줄어들면 translate3d 의 위치가 줄어듬
  document.addEventListener("load", () => {});

  $(".slide-list").slick({
    dots: true,
    arrows: false,
  });

  const popupModule = () => {
    const bodyEl = document.querySelector("body");
    const popupOn = document.querySelector(".btn-popup");
    const popupArea = document.querySelector(".layer-popup-area");
    const popupClose = document.querySelector(".layer-popup-close-btn");

    const popupInit = () => {
      popupOn.addEventListener("click", () => {
        bodyEl.classList.add("popup_on");
        popupArea.classList.toggle("popup_on");
      });
      popupClose.addEventListener("click", () => {
        bodyEl.classList.remove("popup_on");
        popupArea.classList.remove("popup_on");
      });

      const defaultOpenPopup = document.querySelectorAll(".default-opend");

      defaultOpenPopup.forEach((pop) => {
        pop.classList.add("popup_on");
      });
      if (window.innerWidth < 420) {
        popupArea.classList.add("sm");
      }
      if (window.innerWidth > 420) {
        popupArea.classList.remove("sm");
      }
    };

    const popupSizeWatch = () => {
      window.addEventListener("resize", () => {
        window.innerWidth < 420
          ? popupArea.classList.add("sm")
          : popupArea.classList.remove("sm");
      });
    };
    popupInit();
    popupSizeWatch();
  };

  popupModule();
}, 500);
