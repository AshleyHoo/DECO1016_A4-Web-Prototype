(function() {
  var Router = function() {
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

var MyRouter = new oRou();
MyRouter.init();
MyRouter.map("/", function() {
  var sidebarText = document.querySelector("sidebar");
  sidebarText.innerHTML = "Index";
});

MyRouter.map("/about", function() {
  var sidebarText = document.querySelector("sidebar");
  sidebarText.innerHTML = "About US";
});

MyRouter.map("/program", function() {
  var sidebarText = document.querySelector("sidebar");
  sidebarText.innerHTML = "Personal Training Program";
});

MyRouter.map("/history", function() {
  var sidebarText = document.querySelector("sidebar");
  sidebarText.innerHTML = "Reward History";
});

MyRouter.map("/community", function() {
  var sidebarText = document.querySelector("sidebar");
  sidebarText.innerHTML = "Community";
});

MyRouter.map("/contact", function() {
  var sidebarText = document.querySelector("sidebar");
  sidebarText.innerHTML = "Contact";
});
