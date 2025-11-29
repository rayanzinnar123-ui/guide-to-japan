window.addEventListener('load', hidePreloader);

function hidePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}