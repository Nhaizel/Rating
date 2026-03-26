const card = document.querySelector(".Thank-state");
const submitBtn = document.querySelector(".submit");
const ratingBtns = document.querySelectorAll(".btn");
const ratedValue = document.querySelector(".num");

// If button pressed changes into an orange colour
let lastRatedValue = NaN ;

for ( let i =0, len =ratingBtns.length; i < len; i++){
    ratingBtns[i].addEventListener("click",function (){
        if (lastRatedValue) ratingBtns[lastRatedValue-1].classList.remove("selected");

        lastRatedValue = Number(this.textContent);
        this.classList.add("selected");
    });
}




// showing the rating giving by the user as a thank message pops up
submitBtn.addEventListener("click", function(e){
    e.preventDefault();
// if diplay = flex,then set diplay to none
if (card.style.display === "flex"){
    card.style.display = "none"
}else{
    card.style.display = "flex";

}

if (lastRatedValue) card.computedStyleMap.display = 'block';
    ratedValue.textContent = lastRatedValue;
});


