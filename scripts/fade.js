let page = document.getElementById("fadein");
function fadeIn(){
page.classList.toggle('faded');
}

window.onload = fadeIn;