// let currentIndex = 0;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// document.getElementById('next').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     updateSlidePosition();
// });

// document.getElementById('prev').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//     updateSlidePosition();
// });

// function updateSlidePosition() {
//     document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
// }

function scrollLeft() {
    document.querySelector('.pro-container').scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.pro-container').scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
    });
}