function enableDark() {
    var x = document.body;
    x.classList.add('darktheme');
    x.classList.remove("lighttheme");
}

function enableLight() { 
    var y = document.body;
    y.classList.add("lighttheme");
    y.classList.remove("darktheme");
    y.classList.remove("dimmed-theme");
}

function openNav() {
    document.getElementById("navigation").style.display = "block";
}

function closeNav() {
    document.getElementById("navigation").style.display = "none";
}

function closeSidebar() {
    document.getElementById("sidenavigation").style.display = "none";
}

function fullNavigation() {
    document.getElementById("sidebar").style.width = "100%";
    document.querySelector("a").style.fontSize = "48px";
    document.getElementById("hyperlink-newsletter").style.fontSize = "48px";
    document.getElementById("hyperlink-reddit").style.fontSize = "48px";
    document.getElementById("hyperlink-youtube").style.fontSize = "48px"; 
    document.getElementById("full-sidebar").style.float = "left";
    document.getElementById("regular-size-navi").style.float = "left";
    if (document.getElementById("sidebar").style.width === "100%") {
        document.getElementById("regular-size-navi").style.display = "block";
        } else if (document.getElementById("sidebar") === "160px") {
            document.getElementById("regular-size-navi").style.display = "none";
            document.querySelector("a").style.fontSize = "24px";
        } 
}

function regularSize() {
    if (document.getElementById("sidebar").style.width === "100%") {
    document.getElementById("regular-size-navi").style.display = "block";
    }
    document.getElementById("sidebar").style.width = "160px";
}

function crushSidebar() {
    document.getElementById("sidebar").style.height = "10px";
    if (document.getElementById("sidebar").style.height === "10px") {
        document.getElementById("CHANGE-IT-BACK").style.display = "block";
    }
}

function CHANGEITBACK() {
    var y = document.getElementById("CHANGE-IT-BACK");
    if (document.getElementById("sidebar").style.height === "100%") {
        y.innerHTML = "Thank God it's back to normal";
    }
    y.innerHTML = "Thank God it's back to normal";
    document.getElementById("sidebar").style.height = "100%";
}

function dimmedBackground() {
    var x = document.body;
    x.classList.toggle('dimmed-background');
}

function openSettings() {
    document.getElementById("settings").style.display = "block";
    document.getElementById("settings-button").style.background = "skyblue";
}