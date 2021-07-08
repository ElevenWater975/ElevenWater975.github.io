function homePage() {
    confirm("Ok. Bye Bye!");
}

function popoutNav() {
    document.getElementById("popoutNav").style.display = "block";
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.width = "0";
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

function appear() { 
document.getElementById("links").style.display = "block";
}