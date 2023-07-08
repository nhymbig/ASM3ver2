"use strict";

const btn = document.querySelector(".submit");
const personalInfo = document.querySelector("#personal-info");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const titlename = document.querySelectorAll(".titlename");
const viewMore = document.querySelectorAll(".view");
const detail = document.querySelectorAll(".detail");
const viewless = document.querySelectorAll(".viewless");
const icon = document.querySelectorAll(".icon-skill");
let value = document.querySelector(".form-control");
let valid = true;

/*điền thông tin kiem tra email valid*/

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    alert("Valid email address!");

    document.form1.multiple.focus();

    return btn.addEventListener("click", function () {
      personalInfo.classList.remove("hidden");
    });
  } else {
    alert("Invalid email address!");

    document.form1.text1.focus();

    return false;
  }
}
// dong hop thong tin ca nhan
closeModal.addEventListener("click", function () {
  personalInfo.classList.add("hidden");
});
/*viewmore viewless*/
for (let i = 0; i < titlename.length; i++) {
  titlename[i].addEventListener("click", function () {
    viewMore[i].classList.remove("hidden");
  });

  viewMore[i].addEventListener("click", function () {
    detail[i].classList.remove("hidden");
    viewMore[i].classList.add("hidden");
    viewless[i].classList.remove("hidden");
  });
}
for (let i = 0; i < viewless.length; i++) {
  viewless[i].addEventListener("click", function () {
    detail[i].classList.add("hidden");
    viewless[i].classList.add("hidden");
  });
}
