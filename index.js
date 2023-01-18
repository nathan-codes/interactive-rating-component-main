const ratingsButtons = document.querySelectorAll(".ratings span");
const ratingState = document.querySelector(".ratingState");
const feedbackState = document.querySelector(".feedbackState");
const submitButton = document.querySelector(".submit-Button");




for (let i = 0; i < ratingsButtons.length; i++) {
    
    let clickedButton = ratingsButtons[i];
    let buttonInnerHTML = ratingsButtons[i].innerHTML;
    clickedButton.addEventListener("click", function () {
    document.querySelector(".ratingNumber").innerHTML = buttonInnerHTML; 
    })
}




submitButton.addEventListener("click", function () {
    ratingState.classList.add("nodisplay");
    feedbackState.classList.add("display");
    clickedButton.addEventListener("click", function () {
        document.querySelector(".ratingNumber").innerHTML = buttonInnerHTML;

    })

})












