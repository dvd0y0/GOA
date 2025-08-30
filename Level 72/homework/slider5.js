let images = ['111.jpg', '222.jpg', '333.jpg'];
let num = 0;
let slideImg = document.getElementById('slideImg5');
let dotsDiv = document.querySelector('.dots');
let dots = [];

function makeDots() {
    for (let i = 0; i < images.length; i++) {
        let dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => goTo(i);
        dotsDiv.appendChild(dot);
        dots.push(dot);
    }
    updateDots();
}

function updateDots() {
    dots.forEach((dot, idx) => {
        dot.className = 'dot' + (idx === num ? ' active' : '');
    });
}

function goTo(n) {
    num = n;
    slideImg.style.opacity = '0';
    setTimeout(() => {
        slideImg.src = images[num];
        slideImg.style.opacity = '1';
    }, 700);
    updateDots();
}

function next() {
    num++;
    if (num >= images.length) num = 0;
    goTo(num);
}

function prev() {
    num--;
    if (num < 0) num = images.length - 1;
    goTo(num);
}

makeDots();
setInterval(next, 2500);