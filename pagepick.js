function nextPage() {
    document.getElementById("page2").style.display = "flex";
    document.getElementById("page1").style.display = "none";
    document.getElementById("go-back").style.display = "block";
  document.getElementById('next-page').style.display = "none";
}

function goBack() {
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
}
}

function dimmedMode() {
    var dim = document.body;
    dim.classList.toggle("dimmedmode");
    if (document.body.background-color === "black") {
        document.body.background = "white";
        document.body.color = "black";
    }
}

function showSettings() {
    document.getElementById("dimmedthemebtn").style.display = "block";
}