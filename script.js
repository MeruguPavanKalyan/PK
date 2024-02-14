document.getElementById('acceptBtn').addEventListener('click', function() {
    triggerHeartShower();
});

function triggerHeartShower() {
    const heartShower = document.getElementById('heartShower');
    heartShower.innerHTML = '';

    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = Math.random() * 2 + 1 + 's';
        heartShower.appendChild(heart);
    }

    setTimeout(() => {
        heartShower.innerHTML = '';
    }, 3000);
}
