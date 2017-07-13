var box = document.querySelector("div#chatbox");

chatbox.insertAdjacentHTML('afterbegin',`<p class='royalblue'> Welcome too Ninjago plus! </p>`);
//------------------------------------------------------------------------------------------

var button = document.querySelector('button')
var inputBox = document.querySelector('input');

button.addEventListener( 'click', function() {
    
    box.insertAdjacentHTML("beforeend", "<p>" + inputBox.value + "</p>")
} )

//---------------------------------------------------------------------------------------------
mascotFeedback();
function mascotFeedback(){

    setTimeout(function () {
    box.insertAdjacentHTML("beforeend", "<p> Welcome to the team! </p>");
}, 500);

}

var mascot = {
    Name: "Cole",

}
box.scrollTo(0, box.scrollHieght)
