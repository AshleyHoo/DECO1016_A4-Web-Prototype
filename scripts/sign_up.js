function gobackFun(router){
  switch(router){
    case "#/":
        console.log(router)
        location.hash = "#/";
        return false
      break;
    case "#/SIGN_IN_UP":
        console.log(router)
        location.hash = "#/SIGN_IN_UP";
        return false
      break;
    default:
        console.log(router)
        location.hash = "#/SIGN_UP";
        changeSignUpPages(router)
        return false
        break;
  }
}


function clickSignIn() {
  location.hash = "#/SIGN_IN_INDEX";
}
function clickSignUp() {
  location.hash = "#/SIGN_UP_INDEX";
}

function changeCurrentCustomer() {
  location.hash = "#/SIGN_UP_INDEX";
}
function changeNewCustomer() {
  location.hash = "#/SIGN_IN_INDEX";
}

function backToTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function checkSigUp(object) {
  //test
  // location.hash = "#/SIGN_UP";
  // changeSignUpPages(".sign_up_billing_detial");
  // return false;

  let warning = document.getElementById("warning_sign_up");
  let name = object.name;
  let email = object.email;
  let password = object.password;
  let repassword = object.rePassword;
  if (!checkName(name)) {
    warning.innerHTML = "Username can not be empty";
    return false;
  }
  if (!checkEmail(email, warning)) {
    return false;
  }
  if (!checkPassword(password, warning)) {
    //check password
    return false;
  }
  if (!checkRePassword(repassword, password, warning)) {
    //recheck password
    return false;
  }
  warning.innerHTML = "";
  location.hash = "#/SIGN_UP";
  changeSignUpPages(".sign_up_billing_detial");
  return false;
}

function checkBillingDetail(object) {
  // location.hash = "#/SIGN_UP";
  // changeSignUpPages(".sign_up_personal_setting");
  // return false;

  let warning = document.getElementById("warning_billing_detail");
  let firstName = object.firstName;
  let lastName = object.lastName;
  let cardNumber = object.cardNumber;
  let securityCode = object.securityCode;
  let expirationDate = object.expirationDate;
  let birthday = object.birthday;

  if (!checkName(firstName)) {
    warning.innerHTML = "First name can not be empty";
    return false;
  }
  if (!checkName(lastName)) {
    warning.innerHTML = "Last name can not be empty";
    return false;
  }
  if (!checkCreditCard(cardNumber.value, warning)) {
    return false;
  }
  if (!checkName(securityCode)) {
    warning.innerHTML = "Security code can not be empty";
    return false;
  }
  if (!checkName(expirationDate)) {
    warning.innerHTML = "Expiration date can not be empty";
    return false;
  }
  if (!checkName(expirationDate)) {
    warning.innerHTML = "birthday can not be empty";
    return false;
  }
  warning.innerHTML = "";
  location.hash = "#/SIGN_UP";
  changeSignUpPages(".sign_up_personal_setting");
  return false;
}

function checkPersonalSetting(object) {
  // location.hash = "#/SIGN_UP";
  // changeSignUpPages(".sign_up_preferred_exercise");
  // return false;

  let warning = document.getElementById("warning_personal_setting");
  let street = object.street;
  let city = object.city;
  let postalcode = object.postalCode;
  let province = object.province;
  let country = object.country;

  if (!checkName(street)) {
    warning.innerHTML = "Street can not be empty";
    return false;
  }
  if (!checkName(city)) {
    warning.innerHTML = "City can not be empty";
    return false;
  }
  if (!checkPostalCode(postalcode.value, warning)) {
    return false;
  }
  if (!checkName(province)) {
    warning.innerHTML = "States/Province can not be empty";
    return false;
  }
  if (!checkName(country)) {
    warning.innerHTML = "Country can not be empty";
    return false;
  }
  warning.innerHTML = "";
  location.hash = "#/SIGN_UP";
  changeSignUpPages(".sign_up_preferred_exercise");
  return false;
}

function checkPreferredExercise(object) {
  location.hash = "#/SIGN_UP";
  changeSignUpPages(".sign_up_done");
  return false;
}

function checkDone(object) {
  location.hash = "#/SIGN_UP";
  changeSignUpPages(".choose_interest");

  let circle = document.querySelectorAll(".circleChange");
  circle.forEach(item => {
    item.style.animationName = "orbit";
    item.style.animationDuration = "3s";
    item.style.animationIterationCount = "infinite";
  });
  // setTimeout(() => {
  //   let imgCircle = document.querySelectorAll(".circleChange");
  //   imgCircle.forEach(item => {
  //     item.style.display = "none";
  //   });
  // }, 2000);

  return false;
}

function displayInterest(){
  let circle = document.querySelector(".loader");
  circle.style.display = "none"
  let interestForm = document.querySelector(".interest_form_wrapper");
  interestForm.style.display = "block"
}

function checkInterest(object) {
  let circle = document.querySelector(".loader");
  circle.style.display = "block"
  let interestForm = document.querySelector(".interest_form_wrapper");
  interestForm.style.display = "none"

  location.hash = "#/";
  return false;
}

function changeHumanBodyMap(bodyParts) {
  let bodyPartsImg = document.querySelector(".HumanBodyMap");
  switch (bodyParts) {
    case "back":
      bodyPartsImg.src = "./images/back.png";
      break;
    case "arm":
      bodyPartsImg.src = "./images/arm.png";
      break;
    case "hip":
      bodyPartsImg.src = "./images/hip.png";
      break;
    case "waist":
      bodyPartsImg.src = "./images/waist.png";
      break;
    default:
      bodyPartsImg.src = "./images/human.png";
      break;
  }
}

function heightChange(value){
  document.getElementById("height").innerHTML = value
}
function currentWeightChange(value){
  document.getElementById("weight").innerHTML = value
  let currentWeight = value
  let goalWeight =  document.getElementById("goal_weight_select").value
  document.getElementById("lose_weight").innerHTML = Number(currentWeight) - Number(goalWeight)
}
function goalWeightChange(value){
  let currentWeight = document.getElementById("current_weight_select").value
  let goalWeight =  value
  document.getElementById("lose_weight").innerHTML = Number(currentWeight) - Number(goalWeight)
}

//check name
function checkName(name) {
  if (name.value == "" || name.value == "null") {
    return false;
  } else {
    return true;
  }
}
//Check password for the first time
function checkPassword(password, warning) {
  let pattner = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (password.value == "" || password.value == null) {
    warning.innerHTML = "Password can not be blank";
    return false;
  }
  if (!pattner.test(password.value)) {
    console.log(password.value);
    // console.log()
    warning.innerHTML = "Wrong password format";
    return false;
  }
  return true;
}
//Second check password
function checkRePassword(rePassword, password, warning) {
  //   let pattner = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (rePassword.value == "" || rePassword.value == null) {
    warning.innerHTML = "The Second password can not be blank";
    return false;
  }
  if (rePassword.value !== password.value) {
    warning.innerHTML = "Two passwords are inconsistent";
    return false;
  }
  return true;
}

function checkEmail(email, warning) {
  let pattner = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
  if (email.value == "" || email.value == "null") {
    warning.innerHTML = "Email can not be blank";
    return false;
  } else if (!pattner.test(email.value)) {
    warning.innerHTML = "Email format is incorrect";
  } else {
    return true;
  }
}

function checkPostalCode(postalcode, warning) {
  let reg = /^[0-9]{4,6}$/;
  if (reg.test(postalcode)) {
    return true;
  } else if (postalcode == "" || postalcode.length == 0) {
    warning.innerHTML = "Please enter your zip code";
    return false;
  } else {
    warning.innerHTML = "The postal code format is incorrect, please re-enter";
    return false;
  }
}

let signUpPages = document.querySelectorAll(".sign_up>div");
console.log(signUpPages);

function changeSignUpPages(changePage) {
  signUpPages.forEach(item => {
    item.style.display = "none";
  });
  let page = document.querySelector(changePage);
  console.log(page);
  page.style.display = "block";
}

/**
 * Check if the bank card number meets the rules
 * @param bankno Bank card number
 * @returns
 */
function checkCreditCard(bankno, warning) {
  //only check bankno length
  let reg = /^[0-9]{16,19}$/;
  if (reg.test(bankno)) {
    return true;
  } else if (bankno == "" || bankno.length == 0) {
    warning.innerHTML = "Please fill in the bank card number";
    return false;
  } else {
    warning.innerHTML = "Wrong bank card number length";
    return false;
  }
  // use luhn check algorithm
  var bankno = bankno.replace(/\s/g, "");
  if (bankno == "") {
    warning.innerHTML = "Please fill in the bank card number";
    return false;
  }
  if (bankno.length < 16 || bankno.length > 19) {
    warning.innerHTML = "Wrong bank card number length";
    return false;
  }
  // The first two bits
  var strBin =
    "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
  if (strBin.indexOf(bankno.substring(0, 2)) == -1) {
    warning.innerHTML =
      "The first two digits of the bank card number do not conform to the specification";
    return false;
  }
  // Luhn check
  if (!luhnCheck(bankno, warning)) {
    return false;
  }
  return true;
}

/**
 * Bank card number luhn check algorithm
 * Luhn check rule: 16-digit bank card number (19-bit universal):
 * 1. Number the 15 (or 18) card numbers without the check digits from the right to 1 to 15 (18), and the number on the odd digits multiplied by 2.
 * 2. Add all the ten bits of the odd product, plus the numbers on all even bits.
 * 3. Divide and add the check digits to be divisible by 10.
 * @param bankno Bank card number
 * @returns
 */
function luhnCheck(bankno, warning) {
  var lastNum = bankno.substr(bankno.length - 1, 1); // Take the last bit (compared to luhn)
  var first15Num = bankno.substr(0, bankno.length - 1); // Top 15 or 18
  var newArr = new Array();
  for (var i = first15Num.length - 1; i > -1; i--) {
    // The first 15 or 18 bits are stored in reverse order in the array
    newArr.push(first15Num.substr(i, 1));
  }
  var arrJiShu = new Array(); // The product of the odd digit *2 <9
  var arrJiShu2 = new Array(); // Product of odd digits *2 >9
  var arrOuShu = new Array(); // Even array
  for (var j = 0; j < newArr.length; j++) {
    if ((j + 1) % 2 == 1) {
      // Odd number
      if (parseInt(newArr[j]) * 2 < 9) {
        arrJiShu.push(parseInt(newArr[j]) * 2);
      } else {
        arrJiShu2.push(parseInt(newArr[j]) * 2);
      }
    } else {
      arrOuShu.push(newArr[j]); // Even number
    }
  }

  var jishu_child1 = new Array(); // Single digits of the array after the odd-numbered *2 >9 segmentation
  var jishu_child2 = new Array(); // Odd number of array after odd-numbered *2 >9
  for (var h = 0; h < arrJiShu2.length; h++) {
    jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
    jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
  }
  var sumJiShu = 0; // Sum of odd-numbered bits *2 < 9
  var sumOuShu = 0; // The sum of even-numbered arrays
  var sumJiShuChild1 = 0; // The sum of the single digits of the array after the odd-numbered bits *2 >9
  var sumJiShuChild2 = 0; // The sum of the tens digits of the array after the odd-numbered bits *2 >9
  var sumTotal = 0;
  for (var m = 0; m < arrJiShu.length; m++) {
    sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
  }
  for (var n = 0; n < arrOuShu.length; n++) {
    sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
  }
  for (var p = 0; p < jishu_child1.length; p++) {
    sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
    sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
  }
  // Calculated sum
  sumTotal =
    parseInt(sumJiShu) +
    parseInt(sumOuShu) +
    parseInt(sumJiShuChild1) +
    parseInt(sumJiShuChild2);
  // Calculate the luhn value
  var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
  var luhn = 10 - k;
  if (lastNum == luhn) {
    return true;
  } else {
    warning.innerHTML = "Bank card verification failed";
    return false;
  }
}
