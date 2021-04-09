function text() {
    alert("This alert")
}
const listen = event => {
    const p = document.createElement('p');
    p.innerText = "The button worked!";
    document.querySelector('#container').appendChild(p);
  }