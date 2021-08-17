let settingsMenu = document.getElementById('settings'); /* To define the settings menu */
let settingsButton = document.getElementById("settingsbutton"); /* To define the button to open settings */
settingsMenu = false; 
//For navigation above

let menu = document.getElementById('navtop');
menu = false;


function openNav() {
    document.getElementById('navtop').style.display = 'block';
    document.getElementById('navtop').style.width = "100%";
    document.getElementById('navtop').style.height = "40%";
    document.getElementById('navtop').style.transition = "1s";

    if (document.body.background === "black") {
        document.getElementById('navtop').style.background = "gray";
    }
    menu = true;
    console.log(menu);
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
    } else if (count === 17) {
        alert("enjoy a lifetime of cringe!")
            .then(location.href = "https://youtube.com/nyrangerfan88");
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
        x.background = "skyblue";

    } else {
        x.innerHTML = "Dark Mode";
        x.style.background = "black";
        x.style.color = "white";
    }
}
function impactFont() {
    document.querySelector("h1").style.cssText = "font-family: Impact";
    document.querySelector(".heading-1").style.cssText = "font-family: Impact";
    document.querySelector("button").style.cssText = "font-family: Impact";
    document.getElementById("select-all").style.cssText = "font-family: Impact";
}

// Count variable
var setcount = 0;
function settingsFunction() {
    // Settings menu function
    var change = document.getElementById("settingsbutton"); /*change variable*/
        document.getElementById("settings").style.display = "block";
        document.getElementById("box2").style.display = "none";
        document.getElementById("select-all").style.display = "none";
        document.getElementById("contact-me").style.display = "none";
        document.getElementById("the-links").style.display = "none";
        
        change.classList.toggle("settingschange");
        settingsMenu = true;
        console.log(settingsMenu);
}
// I didn't know If I Was doing something right so this took me a while

function dimmedMode() {
    document.getElementById('dimmedtheme').style.background = "skyblue";
    var dim = document.body;
    dim.classList.add('dimmedMode');

}

function showVideo() {
    var show = document.getElementById("latest-video");
    show.classList.toggle('showvideo');
    document.getElementById('latest-video').style.display = 'block';
    document.getElementById("showvideo").style.display = "none";
}

function closeNav() {
    document.getElementById('navtop').style.display = "none";
    menu = false;
    console.log(menu);
}

function closeMenu1() {
    document.getElementById("settings").style.display = "none";
    document.getElementById("select-all").style.display = "block";
    document.getElementById("box").style.display = "block";
    document.getElementById("contact-me").style.display = "block";
    document.getElementById("the-links").style.display = "block"; 
    settingsMenu = false;
    console.log(settingsMenu);
}