const images = document.querySelectorAll('section img'); 

// Image fade in when top of image meets bottom of screen
// If window is over 1000px wide, slide in AND fade in (on small desktop size, and larger)
// If window is under 1000px, only fade in (on tablet size, and smaller)
function slide(){
    const screenBottom = window.innerHeight + document.body.scrollTop;
    
    images.forEach(image => {
        (screenBottom >= image.offsetTop && window.innerWidth >= 1000) && image.classList.add('fade-in');
        (screenBottom >= image.offsetTop && window.innerWidth < 1000) && image.classList.add('fade-in-mobile');
    });
}

window.addEventListener('scroll', slide);
