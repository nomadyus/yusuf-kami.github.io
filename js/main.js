---
---
const USER_ON_PAGE_MSG = "{{ site.title }}";
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
  console.log("You have the power after all!!");
}