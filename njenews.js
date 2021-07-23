function openNav() {
    document.getElementById("links").style.display = "block";
    document.getElementById("settingsbutton").style.float = "left";
    document.getElementById("settingsbutton").style.left = "-0%";
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

function openSettings() {
    var button = document.body;
    document.getElementById("settings").style.display = "block";
    if (document.getElementById("links").style.display === "block") {
        alert("Please close the navigation / links bar");
        document.getElementById("settings").style.display = "none";
    } else if (document.getElementById("links").style.display === "none") {
        document.getElementById("settings").style.display = "block";
    }
}

function changeText() {
var green = document.body; 
green.classList.toggle("changeToGreen");
}

function moveImage() {
    var move = document.body;
    move = document.getElementById("NJE-Image").style.width = "150px";
    move = documemt.getElementById("moveable").style.display = "block";
}

function closeNav() {
    document.getElementById("links").style.display = "none";
}

function closeSettings() {
    document.getElementById("settings").style.display = "none";
}

function skyBlueText() {
    var skyblue = document.body;
    skyblue.classList.toggle("skytext");

    do {
        document.getElementById("skybluetext").style.display = "block";
        skyblue.classList.toggle("skytext");
    } while (document.body.background === "black") {
        do {
            document.getElementById("skybluetext").style.display = "none";
        skyblue.classList.remove("skytext");
        } while (document.body.background === "white") {
    
        }
    }
}

function buttonsappeared() {
    document.addEventListener("click", function() {
    document.getElementById("skybluetext").style.display = "block";
}
    )}
    var onscroll = function() {scrollFunction};
    function closeVid() {
        if (document.body.onclick === 1) {
        document.getElementById("video").className = "disnone";
    }
}

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.body.scrollTop > 50) {
            document.getElementById("video").className = "appearVideo";
        } else {
            document.getElementById('video').className = "";
        }
    }