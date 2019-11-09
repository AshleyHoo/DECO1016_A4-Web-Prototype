function checkSignIn(object) {
  let warning = document.getElementById("warning_sign_in");

  let email = object.email;
  let password = object.password;

  if (!checkEmail(email, warning)) {
    return false;
  } else if (!checkPassword(password, warning)) {
    return false;
  } else {
    return true;
  }
}

//Check password for the first time
function checkPassword(password, warning) {
  let pattner = "/^[w_-]{6,16}$/";
  if (password.value == "" || password.value == null) {
    warning.innerHTML = "Password can not be blank";
    return false;
  } else {
    if (!pattner.test(password.value)) {
      console.log(password.value);
      // console.log()
      warning.innerHTML = "Wrong password format";
      return false;
    } else {
      return false;
    }
  }
}

function checkEmail(email, warning) {
  let pattner = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
  if (email.value == "" || email.value == "null") {
    warning.innerHTML = "Email can not be blank";
    return false;
  } else if(!pattner.test(email.value)){
    warning.innerHTML = "Email format is incorrect"
  } else {
    return true;
  }
}

