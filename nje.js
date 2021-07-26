function openNav() {
    document.getElementById("navtop").style.display = "block";
}

var count = 0;
function notice() {
    alert("This feature isn't available right now, that's why it says hol up real quick.")
    count++;
    if (count === 5) {
        alert("As I said many times. hol up real quick the feature isn't available.");
    } else if (count === 7) {
        alert("please go away, the feature isn't available.");
    } else if (count === 10) {
        alert("So you're just gonna keep clicking to see what happens huh?");
    } else if (count === 11) {
        alert("gullible");
    } else if (count === 12) {
        alert("go away");
    }
}

function darkMode() {
    var dark = document.body;
    dark.classList.toggle("darkmode");
    var x = document.getElementById("full-dark");
    if (x.innerHTML === "Dark Mode") {
        x.innerHTML = "Light Mode"
        x.style.background = "white";
        x.style.color = "black";
    } else {
        x.innerHTML = "Dark Mode";
        x.style.background = "black";
        x.style.color = "white";
}
}
function impactFont() {
    var impact = document.body;
    impact.classList.toggle("impactfont");
}

var setcount = 0;
function settingsFunction() {
    // I want to add more functionality to my site
    // One of the functions are not working
    var sb = document.getElementById("settingsbutton");
    sb.classList.toggle("settingschange");
    document.getElementById("settingsbutton").style.width;
    var fd = document.getElementById("full-dark");
    var settingsshow = document.getElementById("settings");
    settingsshow.classList.toggle("settingsbackground");
    settingsshow.document.getElementById("settings").toggle.style.display = 'block';
    document.getElementById('settings').style.display = "block";
    for (let i = 0; setcount < 1; i++) {
        document.getElementById("settingsbutton").style.background = "skyblue";
    }
}
