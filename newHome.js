const idkWhy = event => {
   const somethingButton = document.createElement('p');
   somethingButton.innertext = "The button did something. Ok now I will leave and work on this page";
   document.getElementById('#text').appendChild(somethingButton);
}//I dont know why the button isn't doing anything.
// I need to fix a lot of bugs with this button
function pointlessFunction() {
   const view = document.createElement('p');
   view.innertext = "See? This button is pointless it didn't even do anything."
   document.querySelector('#pointlessDivElement').appendChild(view);
}