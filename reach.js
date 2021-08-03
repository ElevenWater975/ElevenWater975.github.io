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
}
function enableNav() {
    document.getElementById("navbar").style.display = "block";
}

function closeNav() {

    var close = document.getElementById("navbar");

    document.addEventListener('click', function () {

        close.classList.add = "animation";

    })
}

function youtubeFunction() {

    count++;

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
    document.getElementById("youtube").style.display = "block";
}


function easterHint() {
    confirm("Clicking buttons is fun right?");
}

function twitchFunction() {
    document.getElementById("ttv").style.display = "block";
    document.getElementById("youtube").style.margin = "10px";
    document.getElementById("discord").style.margin = "10px";
}