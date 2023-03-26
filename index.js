var ratingButtons = document.querySelectorAll(".button5");
var submit = document.querySelector("button");
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var outOf5 = document.querySelector(".outof5");
var num = 0;

for(var i=0; i<5; i++){
    ratingButtons[i].addEventListener("click", function() {
        for(var i=0; i<5; i++){
            ratingButtons[i].classList.remove("pressed");
        }
        this.classList.add("pressed");
        num = this.textContent;
});}

submit.addEventListener("click", function() {
    for(var i=0; i<5; i++){
        var boolean = ratingButtons[i].classList.contains("pressed");
        if(boolean == true){
            break;
        }
    }
    if(boolean == false){
        alert("Kuch toh Daal!");
        return;
    }
    outOf5.textContent = "You selected "+num+" out of 5";
    box1.classList.add("hidden");
    box2.classList.remove("hidden");
});