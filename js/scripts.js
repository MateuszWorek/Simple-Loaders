const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
    setTimeout(function changeStyle() {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(function fadeOutMain() {
            main.style.opacity = '1';
        }, 50);
        
    }, 4000);
}

init();