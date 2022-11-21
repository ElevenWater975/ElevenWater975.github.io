function moreText() {
  alert("This alert");
}

const button = event => {
    const para = document.createElement('p');
    para.innerText = "See? I am making this site more functional";
    document.quertSelector('#functionality').appendChild(para);
}

