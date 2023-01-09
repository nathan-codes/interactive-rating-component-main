let ratingsButtons = document.querySelectorAll(".ratings span");
let ratingState = document.getElementById("ratingState");
let feedbackState = document.getElementById("feedbackState");



for (let i = 0; i < ratingsButtons.length; i++) {
    let clickedButton = ratingsButtons[i];
    let buttonInnerHTML = ratingsButtons[i].innerHTML;
    clickedButton.addEventListener("click", function () {
        clickedButton.classList.toggle("clicked");
        ratingState.classList.add("nodisplay");
        feedbackState.classList.add("display");


    })
  

    
}





