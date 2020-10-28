function change_src() {
    if (document.getElementById('photo').src.includes('cookie.jpg')) {
        document.getElementById('photo').src = 'sdnem.png'
    } else {
        document.getElementById('photo').src = 'cookie.jpg'
    }
}

window.onload = function () {
    setInterval(change_src, 10000);
    document.cookie = 'password=Sasha{$teg4n0z4vR}'
};
