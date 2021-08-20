function emailFunction() {
    count++;
    if (count === 10) {
        document.getElementById("easter-egg").style.display = "block";
        document.getElementById("email-function").style.display = "none";
    }
    document.addEventListener('click', function () {
        document.getElementById("emails").style.display = 'block';

    })
}
function easterEggTwo() {
    document.getElementById("email-function").style.display = "block";
    document.getElementById("easter-egg").style.display = "none";
    document.getElementById("email-function").style.position = "relative";
    document.getElementById("email-function").style.right = "-50%";
}
var count = 0;
function discordFunction() {
    count++;
    if (count === 10) {
        alert("You clicked the button 10 times!");
    } else if (count === 20) {
        alert("You clicked the button 20 times! so many clicks!");
    } else if (count === 21) {
        alert("Whats 9 + 10? 21! Thats how many times you clicked");
    }
    document.getElementById("discord").style.display = 'block';
    document.getElementById("youtube-function").style.top = "-20px";
    document.getElementById("twitch-function").style.top = "-20px";
}
function enableNav() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar").style.width = "100%"
    document.getElementById("sidebar").style.height = "100%";
}

function closeNav() {
    document.getElementById("sidebar").style.display = "none";
}

function youtubeFunction() {

    count++;
    document.getElementById("youtube").style.display = "block";
    if (count === 5) {


        alert("that tickles!");


    } else if (count === 10) {


        confirm("that tickled a bit less");
    } else if (count === 20) {
        alert("its starting to pinch a little bit...");
    } else if (count === 30) {
        alert("OW it hurts!");
    } else if (count === 40) {
        alert("I beg you, stop clicking!");
    }
    
}


function easterHint() {
    confirm("Clicking buttons is fun right?");
}

function twitchFunction() {
    document.getElementById("ttv").style.display = "block";
    document.getElementById("youtube").style.margin = "10px";
    document.getElementById("discord").style.margin = "10px";
}

function lightMode() {
    var x = document.body;
    x.classList.add('light-mode');
    x.classList.remove("dark-mode");
    document.getElementById("light-mode").style.background = "skyblue";
    document.getElementById("light-mode").style.color = "black";
    document.getElementById("dark-mode").style.background = "black";
    document.getElementById("dark-mode").style.color = "white";
    document.getElementById("dark-mode").style.right =  "-50px";
    document.getElementById("dark-mode").style.position = "relative";
    document.querySelector("a").style.color = "black";
    document.getElementById('light-mode').innerHTML = "Rip eyes.";
    document.getElementById('dark-mode').innerHTML = "BRO CLICK ME CHANGE IT BACK TO DARK MODE";
}

function showDark() {
    document.getElementById("dark-mode").style.display = "block";
}

function darkMode() {
    var x = document.body;
    x.classList.add("dark-mode");
    x.classList.remove('light-mode');
    document.getElementById("light-mode").style.background = "white";
    document.getElementById('light-mode').style.color = "black";
    document.getElementById("dark-mode").style.background = "skyblue";
    document.getElementById("dark-mode").style.color = "black";
    document.querySelector("a").style.color = "black";
    document.getElementById('light-mode').innerHTML = "Light mode";
    document.getElementById('dark-mode').innerHTML = "Dark Mode";
}

