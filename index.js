var count = 1;
let topnav = document.getElementById("top");
topnav = false;

let settings = document.getElementById("settings");
settings = true;

const errorCatch = (error) => {
console.error("An internal error has occured");
}

function buttonSupport() {
    var x = location.href = "https://elevenwater975.github.io/support";
}

function buttonNewsletter() {
    var y = location.href = "https://elevenwater975.github.io/newsletter"
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("sidetext").style.display = "block";
    topnav = false;
    console.log(topnav);
    if (document.getElementById("sidebar").style.width === "250px" || document.getElementById("sidebar").style.width === "100%") {
        console.error("Could not close navigation");
    }
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("sidetext").style.display = "none";
    document.getElementById('external-links').style.display = "none";
    topnav = true;
    console.log(topnav);
    if (document.getElementById("sidebar").style.width === "0" || document.getElementById("sidebar").style.display === "none") {
        console.error("Could not open navbar");
        topnav = false;
        console.log(topnav);
    } else if (document.body.width === "3840px") {
        document.getElementById("sidebar").style.width = "500px";
    }
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
     }

function addBorderIfDarkMode() {
    if (document.body.background === "black") {
        document.getElementById("sidetext").style.border = "3px solid white";
        document.getElementById("settings").style.border = "3px solid white";
    } 
}

function fullScreenNav() {
    document.getElementById("sidebar").style.width = "100%";
    document.getElementById("sidebar").style.height = "105%"; 
    document.getElementById("original-size").style.display = "block";
}

function originalSize() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("original-size").style.display = "none";
    document.getElementById("navigation-settings").style.top = "50px";
}

function brightNav() {
    var brightnav = document.getElementById('sidebar');
    brightnav.classList.toggle("brightnavigation");
}

function closeInformation() {
    var x = document.getElementById("main");
    x.style.height = "0px";
    x.style.display = "none";
    document.getElementById("bugsnotice").style.display = "none";
}


function openSettings() {
    document.getElementById("settings-btn").style.background = "skyblue";
    document.getElementById("settings").style.display = "block";
    document.getElementById("main").style.display = "none";
    settings = true;
    console.log(settings + " For settings");

    if (document.body.width === "375px") {
        document.getElementById("main-logo").style.display = "none";
    }
}

function closeSettings() {
document.getElementById("settings-btn").style.background = "white";
document.getElementById("settings").style.display = "none";
document.getElementById("main").style.display = "block";
settings = false;
console.log(settings + " For settings");
}
