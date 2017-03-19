const USER_ON_PAGE_MSG = "Yusuf Fadairo";
const USER_OUT_OF_PAGE_MSG = "Come back, Please!";

window.onload = window.onfocus = userBackOnPage;
window.onblur = userNotOnPage;
window.onmousemove = userMouseMoved;

function userNotOnPage()  {
  document.title = USER_OUT_OF_PAGE_MSG;
}

function userBackOnPage() {
  document.title = USER_ON_PAGE_MSG;
}

function userMouseMoved() {
  console.log("your have the power after all!!");
}