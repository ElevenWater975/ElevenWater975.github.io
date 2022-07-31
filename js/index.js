var click = 0;
function alreadyHere() {
    click++
    confirm("You are already here. I am going to fade away now.");
    var x = document.getElementById("homepage");
    var y = document.body;
    x.style.opacity = "0%";
    x.style.transition = "3s"
    if (click === 10) {
        alert("You have clicked this invisible link too many times. The whole site will now fade away. (You can reload to change it back to  normal)");
        y.style.opacity = "0%";
        y.style.transition = "3s";
    } else if (click === 20) {
        alert("You have clicked this invisible link so many times that this page will now go into light mode. (You can reload to change it back to normal)");
        y.style.background = "white";
    } 
}

function ldt() {
    var x = document.body;
    x.classList.toggle("LightDarkToggle")
}

function currentTheme() {
    let currentTheme = document.body;
    if (currentTheme.style.background === "rgb(42, 42, 42,)") {
        document.getElementById("theme1").style.display === "none";
    }
}