function clickSign(){
    location.hash = "#/SIGN_UP"
}

function checkSigUp(object) {
    location.hash = "#/SIGN_UP"
    changeSignUpPages(".sign_up_billing_detial")
        return false;
  //传进来的是form表单对象
  //获取提示框的id
  let warning = document.getElementById("warning_sign_up");
  //声明对象下面的三个input对象
  //   let title = object.title;
  let name = object.name;
  let email = object.email;
  let password = object.password;
  let repassword = object.repassword;
  //调用检查name方法，传进来的是name输入框对象
  if (!checkName(name, warning)) {
    warning.innerHTML = "Username can not be empty";
    return false;
  } else if (!checkEmail(email, warning)) {
    return false;
  } else {
    //检查密码
    if (!checkPassword(password, warning)) {
      return false;
    } else {
      //再次检查密码
      if (!checkRePassword(repassword, password, warning)) {
        return false;
      } else {
          changeSignUpPages(".sign_up_billing_detial")
        return true;
      }
    }
  }
}

function checkBillingDetail(object){
    location.hash = "#/SIGN_UP"
    changeSignUpPages(".sign_up_personal_setting")
    return false
}

function checkPersonalSetting(object){
    location.hash = "#/SIGN_UP"
    changeSignUpPages(".sign_up_preferred_exercise")
    return false
}

function checkPreferredExercise(object){
    location.hash = "#/SIGN_UP"
    changeSignUpPages(".sign_up_done")
    return false
}

function checkDone(object){
    location.hash = "#/SIGN_UP"
    changeSignUpPages(".choose_interest")
    return false
}

function checkInterest(object){
    location.hash = "#/"
    return false
}

//检查name
function checkName(name) {
  if (name.value == "" || name.value == "null") {
    return false;
  } else {
    return true;
  }
}
//第一次检查密码
function checkPassword(password, warning) {
  let pattner = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (password.value == "" || password.value == null) {
    warning.innerHTML = "password can not be blank";
    return false;
  } else {
    if (!pattner.test(password.value)) {
      console.log(password.value);
      // console.log()
      warning.innerHTML = "Wrong password format";
      return false;
    } else {
      return true;
    }
  }
}
//第二次检查密码
function checkRePassword(rePassword, password) {
  let pattner = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (rePassword.value == "" || rePassword.value == null) {
    warning.innerHTML = "password can not be blank";
    return false;
  } else {
    if (!pattner.test(rePassword.value)) {
      warning.innerHTML = "Wrong password format";
      return false;
    } else {
      if (rePassword.value !== password.value) {
        warning.innerHTML = "Two passwords are inconsistent";
        return false;
      } else {
        return true;
      }
    }
  }
}

function checkEmail(email, warning) {
  let pattner = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
  if (email.value == "" || email.value == "null") {
    warning.innerHTML = "email can not be blank";
    return false;
  } else if (!pattner.test(email.value)) {
    warning.innerHTML = "email format is incorrect";
  } else {
    return true;
  }
}

function checkCreditCard(cardNumber) {}

function checkNumber(number) {}
window.onload = function() {
  var radioObj = document.querySelectorAll(".radioTitle");
  for (var i = 0; i < radioObj.length; i++) {
    console.log(radioObj[i].checked);
    // if (radioObj[i].checked == true) {
    //   console.log(radioObj[i].value); //获取选中的值
    //   radioObj[i].checked = false; //设置取消选中
    // } else {
    //   //radioObj[i].checked = true;//设置选中
    // }
  }
};

let signUpPages = document.querySelectorAll(".sign_up>div");
console.log(signUpPages);

function changeSignUpPages(changePage) {
  signUpPages.forEach(item => {
    item.style.display = "none";
  });
  let page = document.querySelector(changePage);
  console.log(page)
  page.style.display = "block";
}
