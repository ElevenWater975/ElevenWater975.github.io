//Checks if the file is working and is connected to the html file.
function alert() {
    alert("this alert")
}

const security = event => {
const issue = document.createElement('input')
input.innertext = "Please type your problem here"
document.querySelector('#container').appendChild(input)
}

function openForm() {
    document.getElementById("openForm").style.display = "block";
    console.log("A user has opened the contact form")
}

function closeForm() {
    document.getElementById("openForm").style.display = "none";
    console.log("A user has closed the contact form")
}

function contact() {
    console.log("Woosh! A email has been sent to the owner Actually it hasn't yet because the form is still being worked on or Eleven hasn't checked it yet.")
}
//Thanks to w3schools! Their tutorial pages are helpful. 

//Stackoverflow helps lol.
//Users under the age of 13 cannot contact me. They need a parent or guardian to do so for them

function requiredAge(bday) {
var dateString = bday.value;
var parts = dateString.split("/");
var now = new Date();
var dateOfBirth = new Date(now.getFullYear(),parts[1]-1,parts[0]);
var age = now.getFullYear()-parts[2];
if(now<birthday) age--;
if(age<13) {
    alert("You must be age 13 or over to contact me. Get a parent or guardian to contact me for you.");
    console.log("A user under 13 has been blocked from contacting us.");
    return false
}
return true;
}

function openText() {
    document.getElementById("paragraph-form").style.display = none;
    console.log("A user selected an option");
}
