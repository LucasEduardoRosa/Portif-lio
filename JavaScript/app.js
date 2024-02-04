
document.addEventListener('DOMContentLoaded', function () {
    const starsContainer = document.querySelector('.stars-container');

    function createStar() {
        const star = document.createElement('div');
        star.className = 'stars';
        star.style.top = getRandom(0, window.innerHeight) + 'px';
        star.style.left = getRandom(0, window.innerWidth) + 'px';
        starsContainer.appendChild(star);
    }

  
    for (let i = 0; i < 50; i++) {
        createStar();
    }


    window.addEventListener('resize', function () {
        const stars = document.querySelectorAll('.stars');
        stars.forEach(function (star) {
            star.style.top = getRandom(0, window.innerHeight) + 'px';
            star.style.left = getRandom(0, window.innerWidth) + 'px';
        });
    });

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
});
