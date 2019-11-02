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
  page.style.display = "block"
});
MyRouter.map("/SIGN_IN_UP", function() {
  pages.forEach((item) => {
    item.style.display = "none"
  })
  let page = document.querySelector(".sign_in_sign_up");
  page.style.display = "block"
});

MyRouter.map("/SIGN_UP", function() {
  pages.forEach((item) => {
    item.style.display = "none"
  })
  let page = document.querySelector(".sign_up");
  page.style.display = "block"
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
