//Checks if the file is working and is connected to the html file.

// Wait for the page to load
function alert() {
    alert("this alert")
}

// Some of the code.
const openForm = event => {
    document.getElementById("openForm").style.display = "block";
    document.getElementById("openButton").style.display = "none";
    console.log("A user has opened the contact form")
    const notice = document.createElement('p')
    notice.innertext = "Notice that I am still fixing bugs on this contact form"
    document.getElementById('#container').appendChild(notice);
}

function closeForm() {
    document.getElementById("openForm").style.display = "none";
    console.log("A user has closed the contact form")
}

function contact() {
    console.log("Woosh! A email has been sent to the owner Actually it hasn't yet because the form is still being worked on or Eleven hasn't checked it yet.")
}
//Thanks to w3schools! Their tutorial pages are helpful. 

//Stackoverflow helps too.
//Users under the age of 13 cannot contact me.

function requiredAge(bday) {
var dateString = bday.value;
var parts = dateString.split("/");
var now = new Date();
if(now<birthday) age--;
if(age<13) {
alert("You cannot contact me right now")
var dateOfBirth = new Date(now.getFullYear(),parts[1]-1,parts[0]);
var age = now.getFullYear()-parts[2];
    return false
}
return true;
}

function openTheButton() {
    document.getElementById("openButton").style.display = "block";
    document.getElementById("agreement").style.display = "none"
} 
//Some functions here
const reOpenTheOpenButton = event => {
    document.getElementById("closeButton").style.display = "block";
    document.getElementById("openForm").style.display = "none"
    document.getElementById("agreement").style.display = "block";
}

// first form popout
const securityIssues = event => {
    $('#security-issues').on('click', function() {
        $(this).prop('disabled', true);
    const security = document.createElement('div');
    security.innerHTML = "<input type='text' id='newInputBox'>";
    document.querySelector('#sideText').appendChild(security);
});
}

//form popout
const bugsIssues = event => {
    $('#bugs-issues').on('click', function() {
        $(this).prop('disabled', true);
        const input = document.createElement('div');
        const pElement = document.createElement('p');
        pElement.innerText = "There is a bug where the button pops out 2 form elements";
        input.innerHTML = "<input type='text' id='anotherInputBox'>";
        document.querySelector('#sideText').appendChild(input);
    })
}

// Darkmode button FINALLY
function darkMode() {
    var darkTheme = document.body;
    darkTheme.classList.toggle("dark-theme");
    document.getElementById("darkmode").value="Dark Mode";
}

function brightMode() {
    var brightTheme = document.body;
    brightTheme.classList.toggle("bright-theme");
    document.getElementById("brightmode").value="Bright Mode";
}
    function pointlessAlert() {
        alert("Some alert");
    }

    const appear = () => {
        document.getElementById("hidenav").style.display = "flex";
    }

    function dropButton() {
        document.getElementById("dropContent").classList.toggle("show");
    }


    //Thanks to w3schools again
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

      function hideDropdown() {
          document.getElementById("dropContent").classList.toggle("show");
      }

      function explainBugs() {
          document.getElementById("bugs-explain").toggle.display = "block";
      }

      function explainSecurity() {
          document.getElementById("security-explain").toggle.display = "block";
      }