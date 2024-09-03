const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

const patern = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;

const FormUP = document.getElementById("formUP");
const NameInput = document.getElementById("nameinput");
const NameEror = document.getElementById("nameeror");
const MobileUP = document.getElementById("mobileUP");
const MobileEror = document.getElementById("mobileeror");

const FormIN = document.getElementById("formIN");
const MobileIN = document.getElementById("mobileIN");
const MobileErorIN = document.getElementById("mobileerorIN");

FormUP.addEventListener("submit", () => {
  if (!NameInput.value) {
    NameEror.innerHTML = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else {
    NameEror.innerHTML = "";
  }
  if (MobileUP.value && !patern.test(MobileUP.value)) {
    MobileEror.innerHTML = "لطفا مقدار صحیح وارد کنید";
  } else if (!MobileUP.value) {
    MobileEror.innerHTML = "لطفا شماره موبایل خود را وارد کنید";
  } else {
    MobileEror.innerHTML = "";
  }
});
FormIN.addEventListener("submit", () => {
  if (MobileIN.value && !patern.test(MobileIN.value)) {
    MobileErorIN.innerHTML = "لطفا مقدار صحیح وارد کنید";
  } else if (!MobileIN.value) {
    MobileErorIN.innerHTML = "لطفا شماره موبایل خود را وارد کنید";
  } else {
    MobileEror.innerHTML = "";
  }
});
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
