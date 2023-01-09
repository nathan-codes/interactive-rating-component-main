let ratingsButtons = document.querySelectorAll(".ratings span");
let ratingState = document.querySelector(".ratingState");
let feedbackState = document.querySelector(".feedbackState");
let submitButton = document.querySelector(".submit-Button");




for (let i = 0; i < ratingsButtons.length; i++) {
    let clickedButton = ratingsButtons[i];
    let buttonInnerHTML = ratingsButtons[i].innerHTML;
    clickedButton.addEventListener("click", function () {
        clickedButton.classList.toggle("clicked");
        document.querySelector(".ratingNumber").innerHTML = buttonInnerHTML; 

    })
}




submitButton.addEventListener("click", function () {

    ratingState.classList.add("nodisplay");
    feedbackState.classList.add("display");

})












