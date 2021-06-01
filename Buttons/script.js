function nothingButton() {
    $("#button-nothing").on('click', function() {
        $(this).prop('disabled', true);
        const p = document.createElement('p');
        p.innerText = "Well, except for this";
        document.querySelector('#button').appendChild(p);
    })
}
 // This makes the button do something
