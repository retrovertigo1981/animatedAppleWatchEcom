const toggle = document.querySelector('.toggle');
const banner = document.querySelector('.banner');


toggle.addEventListener('click', toggleFn);

function toggleFn() {
    toggle.classList.toggle('active');
    banner.classList.toggle('active');

}