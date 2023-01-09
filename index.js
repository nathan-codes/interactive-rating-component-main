let ratingsButtons = document.querySelectorAll(".ratings span");

for (let i = 0; i < ratingsButtons.length; i++) {
    let clickedButton = ratingsButtons[i];
    clickedButton.addEventListener("click", function () {
        clickedButton.classList.toggle("clicked");
        
    })
  

    
}


