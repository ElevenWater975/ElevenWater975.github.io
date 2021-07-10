function buttonSupport() {
    var x = location.href = "https://elevenwater975.github.io/support";
}

function buttonNewsletter() {
    var y = location.href = "https://elevenwater975.github.io/newsletter"
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function swap() {
    var x = document.getElementById("swapT");
if (x.innerHTML === "If this page is not working properly, please contact nje.eleven34@icloud.com") {
x.innerHTML = "Swapped text!";
   newbutton = document.getElementById("anotherBtn");
   window.onscroll = function() {scrollFunction()};
}
}
       function soon() {
           alert("Coming soon");
       }

       function newBtnFunc() {
           document.body.scrollTop = 0;
           document.documentElement.scrollTop = 0;
       }


     function easteregg() {
         alert("A pointless easter egg")
     }
     function appear() {
         document.getElementById("links").style.display = "block";
     }

     function textStuff() {
         // Easter egg. Also I bet you are seeing this file through github so this egg may be easy.
         document.getElementById("egg") = document.body.innerHTML.repalce("p", "hello im an easter egg");
     }