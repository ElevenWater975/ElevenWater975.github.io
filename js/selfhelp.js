function lightmode() {
var x = document.body;
x.classList.toggle('ldt');
}

function soon() {
    alert("This feature is coming soon");
}

function fixingUp() {
    alert("I am fixing up this feature");
}

function closeNav() {
    var x = document.getElementById("navother");
    var y = document.getElementById("navbar");
    x.classList.toggle("togglenav");
    y.classList.toggle("togglenavtwo");
}

function closeVNav() {
    var x = document.getElementById("vnavother");
    var y = document.getElementById("vnavbar");
    x.classList.add("vtogglenav");
    y.classList.add("vtogglenavtwo");
}

function comingSoon() {
    alert("This feature is currently being worked on.");
}