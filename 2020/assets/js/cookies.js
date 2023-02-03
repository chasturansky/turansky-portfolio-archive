// Set cookie
var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);
var expired = new Date(today.getTime() - 24 * 3600 * 1000);
function setCookie(name, value) {
  document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}
function storeValues(form) {
  setCookie("user", form.user.value);
  window.location = 'home/';
  return true;
}

// Get cookie
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

// Check cookie for index
function checkCookieIndex() {
  var user = getCookie("user");
  if (user != "") {
    window.location = "home/";
  }
};

// Check cookie for home
function checkCookieHome() {
  var user = getCookie("user");
  if (user != "") {
    document.getElementById("userName").innerHTML += " " + user;
  } else {
    window.location = "../";
  }
};
