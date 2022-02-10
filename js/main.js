var imgs = document.querySelectorAll(".slider slider__items");
console.log(imgs);

var next = document.querySelector(".slider .slider__btn--secondary");
console.log(next)

var prev = document.querySelector(".slider .slider__btn--primary");
console.log(prev)

var primary_slide = 0;


next.addEventListener("click", function(){
    imgs[current_slide].style.opacity = 0;
});

next.addEventListener("click", function(){
    imgs[primary_slide].style.opacity = 0;
    if(primary_slide == imgs.length-1) {
        current_slide = 0
    }
    else {
        primary_slide++;
    }
    imgs[primary_slide].style.opacity = 1;
})

prev.addEventListener("click", function(){
    imgs[primary_slide].style.opacity = 0;
    if(current_slide == 0) {
        primary_slide = imgs.length-1
    } else {
        primary_slide--;
    }
    imgs[current_slide].style.opacity = 1;
} )