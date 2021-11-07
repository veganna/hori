//container
const carouselSlide = document.querySelector('.carousel-slide');

//images
const carouselImages = document.querySelectorAll('.carousel-slide img')

//buttons
const prevBtn = document.querySelector('#prevBtn')
const nxtBtn = document.querySelector('#nxtBtn')

//counter
let counter = 1; 

//img size
const size = carouselImages[0].clientWidth;


//Start on 2nd
carouselSlide.style.transform='translatex(' + (-size * counter) + 'px)';


//next slide
nxtBtn.addEventListener('click',()=>{
    if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform='translatex(' + (-size * counter) + 'px)';
});

//prev slide
prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform='translatex(' + (-size * counter) + 'px)';
});


//loop photos
carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id ==="lastClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform='translatex(' + (-size * counter) + 'px)';
    }

    if(carouselImages[counter].id ==="firstClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform='translatex(' + (-size * counter) + 'px)';
    }
});