// sets the showblock checkbox to unchecked when called
function closeMenu() {
  document.getElementById("showblock").checked = false;
}

var slideIndex = 1;

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slide-container");
  var dots = document.getElementsByClassName("dot");
  // if the slide to switch to is higher than the number of slides go to first slide
  if (n > slides.length) {slideIndex = 1;}
  // if the slide to switch to is less than 1 go to the last slide
  if (n < 1) {slideIndex = slides.length;}
  // sets all slides to hidden
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  // removes class active from dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}

// sets the slide to show as block and the respective dot with class active
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
} 

// move from the current slide n positions
function plusSlides(n) {
  showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

showSlide(slideIndex);