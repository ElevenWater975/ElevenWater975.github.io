var caps = document.getElementById("caps-warning");
var input = document.getElementById("login2");

input.addEventListener("keyup", function(event) { 
if (event.getModifierState("CapsLock")) {
    caps.style.display = "block";
  } else {
    caps.style.display = "none"
  }
})

if (event.getModifierState("CapsLock")) {
    caps.style.display = "block";
} else {
    caps.style.display = "block";
}
// Causes bugs
function darkMode() {
    // Dark mode for the login page
    var dark = document.body;
    dark.classList.toggle("darktheme");
}