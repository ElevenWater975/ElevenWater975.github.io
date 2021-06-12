function minAge(bday)  {
    var dateString = bday.value;
    var parts = dateString.split("/");
    var now = new Date();
    if (now < birthday) age--;
    if (age<13) {
        var dateOfBirth = new Date(now.getFullYear(),parts[1]-1,parts[0]);
        var age = now.getFullYear()-parts[2];
        alert("Sorry, but you don't meet the minimum requirements");
        return false;
    }
    return true;
}

function darkMode() {
    var darkTheme = document.body;
    darkTheme.classList.toggle("darkmode")
}