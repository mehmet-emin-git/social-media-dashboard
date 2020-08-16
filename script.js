// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");
const modeText = document.getElementById("mode");
const darkModeToggle = document.querySelector(".toggle-btn");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("dark");
  modeText.innerText = "Light Mode";
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("dark");
  modeText.innerText = "Dark Mode";
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});
