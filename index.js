document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['programmer', 'IT Engineer', 'Web developer', 'Backend developer', 'SQL developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

function showText() {
    document.getElementById('hidden-text').style.display = 'block';
}
