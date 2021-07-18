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
    }
}