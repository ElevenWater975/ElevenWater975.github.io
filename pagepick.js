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
