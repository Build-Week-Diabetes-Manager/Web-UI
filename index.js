const images = document.querySelectorAll('section img'); 

function slide(){
    const screenBottom = window.innerHeight + document.body.scrollTop;
    
    images.forEach(image => {
        screenBottom >= image.offsetTop && image.classList.add("fade-in");
    });
}

window.addEventListener('scroll', slide);
