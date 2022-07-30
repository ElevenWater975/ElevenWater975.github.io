function moveTop() {
    document.getElementById("top").style.display = "block";
    document.getElementById("sidebar").style.width = "0";
}
mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        //Not working
        mybutton.style.display = "none";
    }
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px"
    document.getElementById("sidebar").style.height = "100%"
    document.getElementById("Main").style.marginLeft = "250px";
    // Just in case some bug happens
    if (document.getElementById("sidebar").style.width < "250px") {
        document.getElementById("sidebar").style.width = "250px";
    } else if (document.getElementById("sidebar").style.height < "100%") {
        document.getElementById("sidebar").style.height = "100%";
    }
}

function closeNav() {
    // Close the sidebar
    document.getElementById("sidebar").style.height = "0";
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("Main").style.height = "0";
    document.getElementById("Main").style.width = "0";
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// For some reason it is not working
//I think I did something wrong in this code :( but I will fix it beacuse as I said there are so many bugs on my site. 
// I fixed the bug :)

function enableNJEQna() {
    document.getElementById("NJEQna").style.display = "block"
}

function moveside() {
    document.getElementById("top").style.display = "none";
    document.getElementById("sidebar").style.width = "250px"
    document.getElementById("sidebar").style.height = "100%"
    document.getElementById("Main").style.marginLeft = "250px";
    // Just in case some bug happens
    if (document.getElementById("sidebar").style.width < "250px") {
        document.getElementById("sidebar").style.width = "250px";
    } else if (document.getElementById("sidebar").style.height < "100%") {
        document.getElementById("sidebar").style.height = "100%";
    }
}

function enableSecurityIssues() {
    var y = document.getElementById("security");
    if (y.innerHTML === "What do I do if I experience a security issue?") {
        y.innerHTML = "Contact the owner of the page at nje.eleven34@outlook.com . We actually have a security policy over at our github repo";
    }
}

function bugsIssues() {
    var z = document.getElementById("bugs-issues");
    z.innerHTML = "Contact me at nje.eleven34@outlook.com or post an issue over at the github repository."
}

function enableProblem() {
    var x = document.getElementById("problems");
    x.style.display = "block";
}

function enableMobileHelp() {
    var w = document.getElementById("mobile-help");
    w.innerHTML = "Wait you use mobil- I mean Well it looks bad because this site is not supported for mobile users. But we are making a mobile vesion of the site (suggested by Perf)"
}