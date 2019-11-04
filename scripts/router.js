(function() {
  let Router = function() {
    this.routes = {}; // save router
    this.curUrl = ""; // get current hashRouter
  };
  Router.prototype.init = function() {
    //The hashchange event, when the hash changes, calls the reloadpage method
    //The first "this" points to the window, and "this" in bind points to the object calling this function
    window.addEventListener("hashchange", this.reloadPage.bind(this));
  };

  Router.prototype.reloadPage = function() {
    this.curUrl = location.hash.substring(1) || "/"; //Get the value of the current hash（Remove #）
    this.routes[this.curUrl](); //Run the function corresponding to the current hsah value
  };

  Router.prototype.map = function(key, callback) {
    //Save the function corresponding to the route：
    this.routes[key] = callback; //Key represents the value of hash (Remove #), and callback represents the function corresponding to the current hash.
  };
  window.oRou = Router;
})();

let MyRouter = new oRou();
MyRouter.init();

//get all pages div
let pages = document.querySelectorAll("sidebar>div");
console.log(pages)

MyRouter.map("/", function() {
  pages.forEach((item) => {
    item.style.display = "none"
  })
  let page = document.querySelector(".index_page");
  if(document.body.clientWidth > 960){
    closeFooter()
    closeHeader()
    page.style.display = "flex"
  }else{
    page.style.display = "block"
  }
});

MyRouter.map("/SIGN_IN_INDEX", function() {
  if(document.body.clientWidth > 960){
    location.hash = "#/SIGN_IN_UP"
  }else{
    pages.forEach((item) => {
      item.style.display = "none"
    })
    let page = document.querySelector(".sign_in_sign_up");
    page.style.display = "block"
    let title = document.getElementsByClassName("form_big_title")
    title[0].innerHTML = "SIGN IN"
    let form_sign_in = document.querySelector(".sign_in_form>form");
    form_sign_in.style.display = "block"
    let form_sign_up = document.querySelector(".sign_up_creat>form");
    form_sign_up.style.display = "none"
    let button = document.querySelectorAll(".current_customer_button")
    button[0].children[0].src = "./images/Icon arrow down.png"
    button[1].children[0].src = "./images/Icon arrow up.png"
    let circle = document.querySelector(".circle_wrapper")
    circle.style.visibility = "hidden"
    let formTitle = document.querySelector(".creat_form_title")
    formTitle.style.visibility = "hidden"
  }
});

MyRouter.map("/SIGN_UP_INDEX", function() {
  if(document.body.clientWidth > 960){
    location.hash = "#/SIGN_IN_UP"
  }else{
    pages.forEach((item) => {
      item.style.display = "none"
    })
    let page = document.querySelector(".sign_in_sign_up");
    page.style.display = "block"
    let title = document.getElementsByClassName("form_big_title")
    title[0].innerHTML = "SIGN UP"
    let form_sign_up = document.querySelector(".sign_up_creat>form");
    form_sign_up.style.display = "block"
    let form_sign_in = document.querySelector(".sign_in_form>form");
    form_sign_in.style.display = "none"
    let button = document.querySelectorAll(".current_customer_button")
    button[0].children[0].src = "./images/Icon arrow up.png"
    button[1].children[0].src = "./images/Icon arrow down.png"
    let circle = document.querySelector(".circle_wrapper")
    circle.style.visibility = "visible"
    let formTitle = document.querySelector(".creat_form_title")
    formTitle.style.visibility = "visible"
  }
});

MyRouter.map("/SIGN_IN_UP", function() {
  showHeader()
  showFooter()
  pages.forEach((item) => {
    item.style.display = "none"
  })
  let page = document.querySelector(".sign_in_sign_up");
  page.style.display = "flex"
  let title = document.getElementsByClassName("form_big_title")
    title[0].innerHTML = "SIGN IN / SIGN UP"
});

MyRouter.map("/SIGN_UP", function() {
  pages.forEach((item) => {
    item.style.display = "none"
  })
  let page = document.querySelector(".sign_up");
  page.style.display = "flex"
});

MyRouter.map("/about", function() {
  pages.forEach((item) => {
    item.style.display = "none"
  })
  let page = document.querySelector(".about_us");
  page.style.display = "block"
});

MyRouter.map("/program", function() {
  pages.forEach((item) => {
    item.style.display = "none"
  })
  let page = document.querySelector(".personal_trainong_program");
  page.style.display = "block"

});

MyRouter.map("/history", function() {
  pages.forEach((item) => {
    item.style.display = "none"
  })
  let page = document.querySelector(".reward_history");
  page.style.display = "block"

});

MyRouter.map("/community", function() {
  pages.forEach((item) => {
    item.style.display = "none"
  })
  let page = document.querySelector(".community");
  page.style.display = "block"

});

MyRouter.map("/contact", function() {
  pages.forEach((item) => {
    item.style.display = "none"
  })
  let page = document.querySelector(".contact");
  page.style.display = "block"

});

function showHeader(){
  let header = document.querySelector("header");
  header.style.display = "flex"
}
function closeHeader(){
  let header = document.querySelector("header");
  header.style.display = "none"
}

function showFooter(){
  let footer = document.querySelector("footer");
  footer.style.display = "flex"
}

function closeFooter(){
  let footer = document.querySelector("footer");
  footer.style.display = "none"
}

window.onload = function(){
  if(document.body.clientWidth < 960){
    showHeader()
    showFooter()
  }
}
