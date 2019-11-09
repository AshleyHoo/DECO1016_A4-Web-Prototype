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
console.log(pages);

MyRouter.map("/", function() {
  pages.forEach(item => {
    item.style.display = "none";
  });
  let page = document.querySelector(".index_page");
  if (document.body.clientWidth > 960) {
    closeFooter();
    closeHeader();
    page.style.display = "flex";
  } else {
    page.style.display = "block";
  }
});

//mobile router
MyRouter.map("/SIGN_IN_INDEX", function() {
  if (document.body.clientWidth > 960) {
    location.hash = "#/SIGN_IN_UP";
  } else {
    pages.forEach(item => {
      item.style.display = "none";
    });
    let page = document.querySelector(".sign_in_sign_up");
    page.style.display = "block";
    let title = document.getElementsByClassName("form_big_title");
    title[0].innerHTML = "SIGN IN";
    let form_sign_in = document.querySelector(".sign_in_form>form");
    form_sign_in.style.display = "block";
    let form_sign_up = document.querySelector(".sign_up_creat>form");
    form_sign_up.style.display = "none";
    let button = document.querySelectorAll(".current_customer_button");
    button[0].children[0].src = "./images/Icon arrow down.png";
    button[1].children[0].src = "./images/Icon arrow up.png";
    let circle = document.querySelector(".circle_wrapper");
    circle.style.visibility = "hidden";
    let formTitle = document.querySelector(".creat_form_title");
    formTitle.style.visibility = "hidden";
  }
});
//mobile router
MyRouter.map("/SIGN_UP_INDEX", function() {
  if (document.body.clientWidth > 960) {
    location.hash = "#/SIGN_IN_UP";
  } else {
    pages.forEach(item => {
      item.style.display = "none";
    });
    let page = document.querySelector(".sign_in_sign_up");
    page.style.display = "block";
    let title = document.getElementsByClassName("form_big_title");
    title[0].innerHTML = "SIGN UP";
    let form_sign_up = document.querySelector(".sign_up_creat>form");
    form_sign_up.style.display = "block";
    let form_sign_in = document.querySelector(".sign_in_form>form");
    form_sign_in.style.display = "none";
    let button = document.querySelectorAll(".current_customer_button");
    button[0].children[0].src = "./images/Icon arrow up.png";
    button[1].children[0].src = "./images/Icon arrow down.png";
    let circle = document.querySelector(".circle_wrapper");
    circle.style.visibility = "visible";
    let formTitle = document.querySelector(".creat_form_title");
    formTitle.style.visibility = "visible";
  }
});

MyRouter.map("/SIGN_IN_UP", function() {
  showHeader();
  showFooter();
  pages.forEach(item => {
    item.style.display = "none";
  });
  let page = document.querySelector(".sign_in_sign_up");
  page.style.display = "flex";
  let title = document.getElementsByClassName("form_big_title");
  title[0].innerHTML = "SIGN IN / SIGN UP";
});

MyRouter.map("/SIGN_UP", function() {
  pages.forEach(item => {
    item.style.display = "none";
  });
  let page = document.querySelector(".sign_up");
  page.style.display = "flex";
});

MyRouter.map("/about", function() {
  pages.forEach(item => {
    item.style.display = "none";
  });
  let page = document.querySelector(".about_us");
  page.style.display = "block";
});

MyRouter.map("/program", function() {
  pages.forEach(item => {
    item.style.display = "none";
  });
  let page = document.querySelector(".personal_trainong_program");
  page.style.display = "block";
});

MyRouter.map("/history", function() {
  pages.forEach(item => {
    item.style.display = "none";
  });
  let page = document.querySelector(".reward_history");
  page.style.display = "block";
});

MyRouter.map("/community", function() {
  pages.forEach(item => {
    item.style.display = "none";
  });
  let page = document.querySelector(".community");
  page.style.display = "block";
});

MyRouter.map("/contact", function() {
  pages.forEach(item => {
    item.style.display = "none";
  });
  let page = document.querySelector(".contact");
  page.style.display = "block";
});

function showHeader() {
  let header = document.querySelector("header");
  header.style.display = "flex";
}
function closeHeader() {
  let header = document.querySelector("header");
  header.style.display = "none";
}

function showFooter() {
  let footer = document.querySelector("footer");
  footer.style.display = "flex";
}

function closeFooter() {
  let footer = document.querySelector("footer");
  footer.style.display = "none";
}

window.onload = function() {
  if (document.body.clientWidth < 960) {
    showHeader();
    showFooter();
  }
//add height option
  let heightOptionFrag = document.createDocumentFragment();
  for (var i = 40; i < 200; i += 0.5) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i + " cm";
    if(i === 167){
      option.setAttribute("selected","")
    }
    heightOptionFrag.appendChild(option.cloneNode(true));
  }
  document.getElementById("height_select").appendChild(heightOptionFrag);
  //add current weight option
  let currentWeightOptionFrag = document.createDocumentFragment();
  for (var i = 30; i < 100; i += 0.5) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i + " kg";
    if(i === 58){
      option.setAttribute("selected","")
    }
    currentWeightOptionFrag.appendChild(option.cloneNode(true));
  }
  document.getElementById("current_weight_select").appendChild(currentWeightOptionFrag);
  //add goal weight option
  let goalWeightOptionFrag = document.createDocumentFragment();
  for (var i = 30; i < 100; i += 0.5) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i + " kg";
    if(i === 50){
      option.setAttribute("selected","")
    }
    goalWeightOptionFrag.appendChild(option.cloneNode(true));
  }
  document.getElementById("goal_weight_select").appendChild(goalWeightOptionFrag);

  //add country option
  let country = ["Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bonaire Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos [Keeling] Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "DR Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "North Korea",
  "North Macedonia",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn Islands",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Samoa",
  "San Marino",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and South Sandwich Islands",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St Kitts and Nevis",
  "St Vincent and Grenadines",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syria",
  "São Tomé and Príncipe",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "U.S. Minor Outlying Islands",
  "U.S. Virgin Islands",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland",]
  let countryOptionFrag = document.createDocumentFragment();
  country.map(item =>{
    let option = document.createElement("option");
    option.value = item;
    option.innerHTML = item;
    if(item == "Australia"){
      option.setAttribute("selected","")
    }
    countryOptionFrag.appendChild(option.cloneNode(true));
  })
  document.getElementById("country").appendChild(countryOptionFrag);
};
