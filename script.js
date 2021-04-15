function text() {
    alert("This alert")
}
const listen = event => {
    const p = document.createElement('p');
    p.innerText = "Well, except for this";
    document.querySelector('#container').appendChild(p);
  }
 // This makes the button do something

//Back to top button
//Got some help from w3schools
const button = document.getElementById("myBtn");

window.onscroll = function() {scrollUp()};

function scrollUp() {
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
myButton.style.display = "block";   
} else {
    myButton.style.display = "none"; 
}
}

function top() {
document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}
