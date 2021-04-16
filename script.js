function text() {
    alert("This alert")
}
const listen = event => {
    const p = document.createElement('p');
    p.innerText = "Well, except for this";
    document.querySelector('#container').appendChild(p);
  }
 // This makes the button do something


