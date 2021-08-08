function openNav() {
    document.getElementById('navtop').style.display = 'block';
    document.getElementById('navtop').style.width = "100%";
    document.getElementById('navtop').style.height = "40%";
    document.getElementById('navtop').style.transition = "1s";
    if (document.body.background === black ) {
        document.getElementById('navtop').style.background = "gray";
    }
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
        .then(location.href="https://youtube.com/nyrangerfan88");
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
    var impact = document.body;
    impact.classList.toggle("impactfont");
    var x = document.getElementById('impact-font');
    x.innerHTML = "error while trying to use this";
}

var setcount = 0;
function settingsFunction() {
    // I want to add more functionality to my site
    // One of the functions are not working
    var change = document.getElementById("settingsbutton");
    change.classList.add("settingschange");
    document.getElementById('settings').style.display = "block";
    if (document.getElementById("settingsbutton").style.background === "white") {
        document.getElementById('settingsbutton').style.background = "skyblue";
    } else {
        document.getElementById('settings').style.display = " none";
        document.getElementById("settingsbutton").style.background = "white";
    }
}

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
}
