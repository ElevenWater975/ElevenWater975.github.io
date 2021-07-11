function emailFunction() {
    document.addEventListener('click', function(){
document.getElementById("emails").style.display='block';
    
    })
}

function discordFunction() {
document.addEventListener('click', function(){
    document.getElementById("discord").style.display='block';
})
}

function enableNav() {
    document.getElementById("navbar").style.display = "block";
}

function closeNav() {
    var close = document.getElementById("navbar");
document.addEventListener('click', function(){
    close.classList.add = "animation";
})
}