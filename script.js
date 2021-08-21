const pintu = document.querySelector('.image');
const semangat = document.querySelector('.semangat');

pintu.addEventListener('click', function() {
    semangat.classList.toggle('ok');
    pintu.src = "img/pngwing.com (4).png"
    pintu.style.width = "150px";
})