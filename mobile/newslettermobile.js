var count = 0;

function egg() {
count++;
if (count === 10) {
    document.getElementById("nav").style.display = "none";
    document.getElementById("eggy").style.display = "block";
}
}

function appear() {
    document.getElementById("links").style.display = "block";
}