const newButton = event => {
    const para = document.createElement('p');
     para.innerText = "This site is in v1.0.2-Alpha. It is not completely released. Just a pre-release";
     document.querySelector('#anotherButton').appendChild(para);
}
