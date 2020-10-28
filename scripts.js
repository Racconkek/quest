function change_src() {
    if (document.getElementById('photo').src.includes('cookie.jpg')) {
        document.getElementById('photo').src = 'steged.jpg'
    } else {
        document.getElementById('photo').src = 'cookie.jpg'
    }
}

window.onload = function () {
    setInterval(change_src, 10000);
    document.cookie = 'password=steg4n0z4vR'
};
