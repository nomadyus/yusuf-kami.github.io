---
---
const USER_ON_PAGE_MSG = "{{ site.title }}";
const USER_OUT_OF_PAGE_MSG = "{{ site.message.bye }}";
const USER_MADE_A_MOVE = "{{ site.message.move }}";

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
  console.log(USER_MADE_A_MOVE);
}