var count = 1;

function buttonSupport() {
    var x = location.href = "https://elevenwater975.github.io/support";
}

function buttonNewsletter() {
    var y = location.href = "https://elevenwater975.github.io/newsletter"
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("")
}

function openNav() {
    var hide = document.body;
    hide.classList.toggle("hideall");
    document.getElementById("sidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "100%";
    document.getElementById("sidebar").style.height = "100%";
    document.getElementById('about-soon').style.display = 'none';
    document.getElementById('responsivebug').style.display = "none";
    document.getElementById('sidebar').style.display = "block";
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
         count++;
         document.getElementById("links").style.display = "block";
         if (count === 20) {
             alert("Bro do u really need to click that many times?");
             if (count == 30) {
                 alert("clickity clackity clack");
             } else if (count === 40) {
                 alert("that is a lot of clicks. does ur mouse even click bro?")
             }
         }   
        }

     function textStuff() {
         // Easter egg. Also I bet you are seeing this file through github so this egg may be easy.
         document.getElementById("egg") = document.body.innerHTML.repalce("p", "hello im an easter egg");
     }

     function opentop() {
         document.getElementById("top").style.display = "block";
         document.getElementById("sidebar").style.width = "0";
     }

     function moveside() {
         // Move navigation bar back to the side.
         document.getElementById("top").style.display = "none";
         document.getElementById("sidebar").style.width = "250px";
         document.getElementById('top').style.width = "0px";
         document.getElementById("bugbutton").style.display = "block";
     }

     function bugFix() {
         document.getElementById("top").style.width = "100%";
         document.getElementById("sidebar").style.width = "0";
         document.getElementById("top").style.display = "block";
     }

     function closeTop() {
         document.getElementById("top").style.display = "none";
         document.getElementById("top").style.width = "0px";
     }

     function dimmedMode() {
         var dim = document.body; 
         dim.classList.toggle('dimmedtheme');
         document.getElementById("dimmedModeHome");
     }

function removeAnimation() {
    document.getElementById("sidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "100%";
    document.getElementById("sidebar").style.height = "100%";
    document.getElementById("main").style.transition = '0s';
    document.getElementById('sidebar').style.transition = "0s";
    document.getElementById("sidebar");
}