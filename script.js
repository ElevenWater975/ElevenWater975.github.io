// this is the first time
if (! localStorage.noFirstVisit) {
    // show the element
    // and do the animation you want
    document.getElementById('first').style.display = 'block';

    // check this flag for escaping this if block next time
    localStorage.noFirstVisit = "1";
}