var ratingButtons = document.querySelectorAll("a");
var submitButton = document.querySelector("button");
var section1 = document.querySelector(".section-rating");
var section2 = document.querySelector(".section-thankyou");
var pOutput = document.querySelector(".target");
var num = 0;

for(var i=0; i<5; i++){
    ratingButtons[i].addEventListener("click", function() {
        for(var i=0; i<5; i++){
            ratingButtons[i].classList.remove("pressed");
        }
        this.classList.add("pressed");
        num = this.textContent;
});}

submitButton.addEventListener("click", function() {
    for(var i=0; i<5; i++){
        var boolean = ratingButtons[i].classList.contains("pressed");
        if(boolean == true){
            pOutput.textContent = "You selected "+num+" out of 5";
            section1.classList.add("hidden");
            section2.classList.remove("hidden");
            break;
        }
    }
    if(boolean == false){
        alert("Kuch toh Daal!");
        return;
    }
});