function enableDark() {
    var x = document.body;
    x.classList.add('darktheme');
    x.classList.remove("lighttheme");
    document.getElementById("darkmode").style.background = "skyblue";
    document.getElementById("darkmode").style.color = "black";
    document.getElementById('lightmode').style.background = "white";
    document.getElementById("lightmode").style.color = "black";
}

function enableLight() { 
    document.getElementById("darkmode").style.background = "black";
    document.getElementById("darkmode").style.color = "white";
    document.getElementById('lightmode').style.background = "skyblue";
    document.getElementById("lightmode").style.color = "black";
    var y = document.body;
    y.classList.add("lighttheme");
    x.classList.remove("darktheme");
}

function openNav() {
    document.getElementById("navigation").style.display = "block";
}

function closeNav() {
    document.getElementById("navigation").style.display = "none";
}