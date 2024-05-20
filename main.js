let slideIndex = 1;
showSlides(slideIndex);

// Next/previous control
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image control
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function toggleMenu() {
  var navElements = document.getElementById("navElements");
  if (navElements.style.display === "block") {
    navElements.style.display = "none";
  } else {
    navElements.style.display = "block";
  }
}

