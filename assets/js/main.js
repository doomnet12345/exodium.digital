const download_trigger = document.getElementById('download_trigger');
const global_Modal = document.getElementById('global-modal');
const close = document.getElementById('mobile-close');

download_trigger.addEventListener('click', () => {
    global_Modal.classList.add('show');
});

close.addEventListener('click', () => {
    global_Modal.classList.remove('show');
});