//Open the model
function openSlideshow() {
    document.getElementById("myModal").style.display = "block";
}

//CLose the modal
function closeModel() {
    document.getElementById("myModel").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//Next previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//THumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; <dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}