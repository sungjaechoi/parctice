const mUl = document.querySelector(".m-list");
console.log(mUl);
const mItem = document.querySelectorAll(".m-item");
console.log(mItem);
mUl.addEventListener("click", (e) => {
  //   console.log(e.target.parentElement);
  let currentEl = e.target;
  while (!condition) {
	  
  }
  while (!currentEl.classList.contains("m-item")) {
    //무조건 false 가 반환되고 -> 그걸 반대로 하니까 true
    //true가 반환되고 -> 그걸 반대로 하니까 false
    currentEl = currentEl.parentElement;
    console.log(currentEl);
  }
  
  //기존에 켜진걸 내가 눌렀을때
  if (currentEl.classList.contains("on")) {
    currentEl.classList.remove("on");
    return;
  }
  for (let i = 0; i < mItem.length; i++) {
    mItem[i].classList.remove("on");
  }
  //기존에 안켜진걸 누를때는?
  currentEl.classList.add("on");
});
// const mitemArray = [...mItem];
// console.log(mitemArray);
