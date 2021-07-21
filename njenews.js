function openNav() {
    document.getElementById("links").style.display = "block"
}

function darkMode() {
    var v = document.body;
    v.classList.toggle("darkmode");
    var x = document.getElementById("darkbutton");
    if (x.innerHTML === "Dark Mode") {
    x.innerHTML = "Light Mode";
} else if (x.innerHTML === "Light Mode") {
        v.onclick = v.classList.toggle("lightmode");
        x.innerHTML = "Dark Mode";
        v.onclick = alert("Good luck out there in light mode soldier.");
}
}

function buttonColor() {
    var button = document.getElementById("darkbutton");
    button.classList.toggle("darkmodebutton");

}