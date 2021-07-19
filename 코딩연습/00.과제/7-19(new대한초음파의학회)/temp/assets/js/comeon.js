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
