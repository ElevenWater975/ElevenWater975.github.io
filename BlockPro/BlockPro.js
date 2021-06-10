function homePage() {
    alert("Ok. Bye Bye!");
}

function popoutNav() {
    document.getElementById("popoutNav").style.display = "block";
}

function closeNav() {
    document.getElementById("popoutNav").style.display = "none";
}

function popoutSettings() {
    document.getElementById('settings').style.display = "block";

 
}

function closeSettings() {
    document.getElementById('settings').style.display = "none";
}

function darkMode() {
    var darkTheme = document.body;
    darkTheme.classList.toggle("darkMode");
}

function lightMode() {
    var lightTheme = document.body;
    lightTheme.classList.toggle("lightMode");
}