let toggle = 'close';

document.getElementById('hamburger-button').addEventListener('click', function() {
    if (toggle === 'close') {
        toggle = 'open';
    } else {
        toggle = 'close';
    }
    document.getElementById('nav-links').classList = toggle;
})