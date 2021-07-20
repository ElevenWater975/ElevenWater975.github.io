function openNav() {
    document.getElementById("navtop").style.display = "block";
}

var count = 0;
function notice() {
    alert("This feature isn't available right now, that's why it says hol up real quick.")
    count++;
    if (count === 5) {
        alert("As I said many times. hol up real quick the feature isn't available.");
    } else if (count === 7) {
        alert("please go away, the feature isn't available.");
    } else if (count === 10) {
        alert("So you're just gonna keep clicking to see what happens huh?");
    } else if (count === 11) {
        alert("gullible");
    }
}

function darkMode() {
    document.getElementById("darkmode").style.background = "black";
    document.getElementById("darkmode").style.color = "white";
    document.getElementById("external-links").style.background = "black";
    document.getElementById("footer").style.background = "black";
    document.getElementById("footer").style.padding = "50px"
}
document.getElementById("external-links").style.padding = "50px;"