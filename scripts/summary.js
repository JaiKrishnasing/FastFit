const userIcon = document.getElementById("user-icon-js");
const logOutButton = document.querySelectorAll(".logout");
const dropdown = document.getElementById("dropdown-js");
const userNameText = document.getElementById("user-name-js");
const userEmailText = document.getElementById("user-email-js");
const userName = localStorage.getItem("loggedUserName");
const greetingText = document.getElementById("greeting-text-js");
const userEmail = localStorage.getItem("loggedUserEmail");

let isDropDownActive = false;

function toggleDropDown() {
  userIcon.addEventListener("click", () => {
    if (!isDropDownActive) {
      isDropDownActive = true;
      dropdown.style.visibility = "visible";
    } else {
      isDropDownActive = false;
      dropdown.style.visibility = "hidden";
    }
  });
}

function clearLocalStorage() {
  logOutButton.forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.clear("logStatus");
      localStorage.clear("users");
      localStorage.clear("loggedUserEmail");
      localStorage.clear("loggedUserName");
    });
  });
}

clearLocalStorage();

function setUserInfo() {
  greetingText.innerText = userName;
  userNameText.innerText = userName;
  userEmailText.innerText = userEmail;
}

function redirect(input, location) {
  input.addEventListener("click", () => {
    window.location.href = location;
  });
}

const logo = document.getElementById("logo-js");

redirect(logo, "./index.html");

setUserInfo();

toggleDropDown();
