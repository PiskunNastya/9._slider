var btn_prev = document.querySelector('.main .main__bottons .main__botton-prev');
var btn_next = document.querySelector('.main .main__bottons .main__botton-next');

var images = document.querySelectorAll('.main__gallery .main__foto');
var i = 0;


btn_prev.onclick = function() {
    images[i].className = '';
    i--;

    if(i < 0) {
        i = images.length -1;
    }

    images[i].className = 'showed';
}

btn_next.onclick = function () {
    images[i].className = '';
    i++;

    if(i >= images.length) {
        i = 0;
    }

    images[i].className = 'showed';
}
