let slideIndex = 1;
let slideIndexMap = 1;
let slideIndex2 = 1;
let slideIndexMap2 = 1;

showSlideGenshin(slideIndex);
showSlideHonkai(slideIndex2);
showSlideGenshinMap(slideIndexMap);
showSlideHonkaiMap(slideIndexMap2);
        
        
function nextslideGenshin(n){
    showSlideGenshin(slideIndex += n);
}

function nextslideGenshinMap(n){
    showSlideGenshinMap(slideIndexMap += n);
}

function nextslideHonkai(n){
    showSlideHonkai(slideIndex2 += n);
}

function nextslideHonkaiMap(n){
    showSlideHonkaiMap(slideIndexMap2 += n);
}

function showSlideGenshin(n){
    let i;
    let slides = document.getElementsByClassName("imgslide-genshin");

    if(n > slides.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function showSlideHonkai(n){
    let i;
    let slides = document.getElementsByClassName("imgslide-honkai");

    if(n > slides.length) {
        slideIndex2 = 1;
    }

    if(n < 1) {
        slideIndex2 = slides.length;
    }

    for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
    }

    slides[slideIndex2 - 1].style.display = "block";
}

function showSlideGenshinMap(n){
    let i;
    let slides = document.getElementsByClassName("slide-map-genshin");

    if(n > slides.length) {
        slideIndexMap = 1;
    }

    if(n < 1) {
        slideIndexMap = slides.length;
    }

    for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
    }

    slides[slideIndexMap - 1].style.display = "block";
}
function showSlideHonkaiMap(n){
    let i;
    let slides = document.getElementsByClassName("slide-map-honkai");

    if(n > slides.length) {
        slideIndexMap2 = 1;
    }

    if(n < 1) {
        slideIndexMap2 = slides.length;
    }

    for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
    }

    slides[slideIndexMap2 - 1].style.display = "block";
}
