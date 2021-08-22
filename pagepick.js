function nextPage() {
    var hide = document.getElementById("page1");
    hide.classList.toggle('hideanimation');
    var show = document.getElementById("page2");
    show.classList.toggle('showanimation');
    document.getElementById("page2").style.display = "flex";
    document.getElementById("page1").style.display = "none";
        document.getElementById("go-back").style.display = "block";
    document.getElementById('go-back').style.left = "300px";
  document.getElementById('next-page').style.display = "none";
}

function goBack() {
    // Go back to the last page
    document.getElementById("page1").style.display = 'flex';
    document.getElementById('page2').style.display = 'none';
    document.getElementById('go-back').style.display = 'none';
    document.getElementById('next-page').style.display = 'block';
}

var count = 0;
function soonEgg() {
count++; 
if (count <= 9 || count === 9) {
    alert("Sorry, this feature is not available yet.")
} else if (count === 10) {
    alert("Seriously, turn back the feature is not ready.")
} else if (count === 20) {
    alert("Are you just clicking to see what happens? Gullible, very very gullible.")
} else if (count === 1) {
    alert("It's a secret");
}
}

function dimmedMode() {
    var dim = document.body;
    dim.classList.toggle("dimmedmode");
}

function showSettings() {
    document.getElementById("settings").style.display = "block";
    document.getElementById("settings").style.float = "none";
    document.getElementById("settings").style.right = "30px"; 
    document.getElementById("settingsbutton").style.display = "none";
} 

function changeMobileBackground() {
var change = document.body;
change.classList.toggle('changebackground');
}

function enableTextSettings() {
    document.getElementById('textsettings').style.display = "block";
}

// This code is not working
function changeToImpact() {
    var impact = document.body;
    impact.classList.add('change-impact');
    // Due to a bug, I have to add in this code:
    document.body.font = "Impact";
}

function lightMode() {
    var light = document.body;
    light.classList.toggle('lightmode');

    var x = document.getElementById('lightmodebtn'); 
    if (x.innerHTML === "Light Mode (just don't)") {
        x.innerHTML = "Change it back, change it back!"
    }
}

function closeSettings() {
    document.getElementById("settingsbutton").style.display = "block";
    document.getElementById("settings").style.display = "none";
}

function maybeSoon() {
    if (count === 2) {
        document.getElementById('hmm').style.display = 'block';
    }
}
    function everythingAway() {
        var x = document.body;
        x.classList.toggle('snapeverythingout');
        document.getElementById("literally-everthing").style.display = "none";
    }
    
    function borderRemove() {
        var y = document.getElementById("settingsbutton");
        if (y.style.display === "block") {
            document.getElementById("settingswrap").style.border = "none";
        }
    }
function nextPage2() {

}

function changeBorderColor() {
    if (document.body.background === "white") {
        document.getElementById('window1').style.border = "3px solid black";
        document.getElementById('window2').style.border = "3px solid black";
        document.getElementById('window3').style.border = "3px solid black";
    }
}

function goNextOne() {
    document.getElementById("winone").style.display = "none";
    document.getElementById("wintwo").style.display = "block";
}

function goBackOne() {
    document.getElementById("winone").style.display = "block";
    document.getElementById("wintwo").style.display = "none";
}

function goNextTwo() {
    document.getElementById("wintwo").style.display = "none";
    document.getElementById("winthree").style.display = "block";
}

function goBackTwo() {
    document.getElementById("winthree").style.display = "none";
    document.getElementById("wintwo").style.display = "block";
    document.getElementById("winone").style.display = "none";
}

function goNextThree () {
    document.getElementById("winthree").style.display = "none";
    document.getElementById("page2").style.display = "block";
    document.getElementById("page1").style.display = "none";
    document.getElementById("winfour").style.display = "block";
}

function goBackThree() {
    document.getElementById("winfour").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "block";
    document.getElementById("winthree").style.display = "block";
}

function goNextFour() {
    document.getElementById("winfour").style.display = "none";
    document.getElementById("winfive").style.display = "block";
}

function goNextFive() {
    document.getElementById("winfive").style.display = "none";
    document.getElementById("winsix").style.display = "block";
}

function goBackFour() { 
    document.getElementById("winfive").style.display = "none";
    document.getElementById("winfour").style.display = "block";
}

function goBackFive() {
    document.getElementById("winsix").style.display = "none";
    document.getElementById("winfive").style.display = "block";
}

function threeByThree() {
    var x = document.body; 
    x.classList.toggle("gridstyle");
    document.getElementById("window1").style.display = "grid";
    document.getElementById("window2").style.display = "grid";
    document.getElementById("window3").style.display = "grid";
    document.getElementById("window4").style.display = "grid";
    document.getElementById("window5").style.display = "grid";
    document.getElementById("window6").style.display = "grid";
    document.getElementById("window7").style.display = "grid";
    document.getElementById("winone").style = "display: block; float: left;"
    document.getElementById("wintwo").style = "display: block; float: left;"
    document.getElementById("winthree").style = "display: block; float: left;"
    document.getElementById("winfour").style = "display: block; float: left;"
}

function floatThreeLeft() {
    var x = document.getElementById("next-back-button");
    document.getElementById("window1").style = "float: left; display: grid;";
    document.getElementById("window2").style = "float: left; display: grid;";
    document.getElementById("window3").style = "float: left; display: grid;";
    document.getElementById("winone").style = "display: block; float: left; position: relative; right: 0%";
    document.getElementById("wintwo").style = "display: block; float: left; position: relative; right: 0%";
    document.getElementById("winthree").style = "display: block; float: left; position: relative; right: 0%;";
    document.getElementById("next-window-1").style.display = "none";
    document.querySelector("button").style.display = "none";
    document.getElementById("next-back-button").style.display = "none";
    document.getElementById("next-window-1 next-back-button").style.display = "none";
}

function showAsCircle() {
    document.getElementById("window1").style.borderRadius = "100%";
    document.getElementById("window2").style.borderRadius = "100%";
    document.getElementsById("window3").style.borderRadius = "100%";
    document.getElementById("window4").style.borderRadius = "100%";
    document.getElementById("window5").style.borderRadius = "100%";
    document.getElementById("window6").style.borderRadius = "100%";
    document.getElementById("window7").style.borderRadius = "100%";
    document.getElementById("circle").style.display = "none";
    document.getElementById("square").style.display = "block";
}

function showAsSquare() {
    document.getElementById("window1").style.borderRadius = "0%";
    document.getElementById("window2").style.borderRadius = "0%";
    document.getElementById("window3").style.borderRadius = "0%";  
    document.getElementById("window4").style.borderRadius = "0%";
    document.getElementById("window5").style.borderRadius = "0%";
    document.getElementById("window6").style.borderRadius = "0%";
    document.getElementById("window7").style.borderRadius = "0%";
}

var click = 0;
function soon() {
click++;
var x = document.body;
if (click === 1) {
    alert("click");
} else if (click === 10) {
    x.innerHTML = "You clicked so many times that this text is only visible";
    x.style.fontSize = "50px";
    x.style.color = "white";
    x.style.fontFamily = "sans-serif";
    x.style.background = "black"; 
}
}