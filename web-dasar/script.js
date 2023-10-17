const progresses = document.querySelectorAll('.progress-done');

progresses.forEach(progress => {
    setTimeout(() => {
        progress.style.width = progress.getAttribute('data') + '%';
        progress.innerHTML = progress.style.width;
        progress.style.opacity = 1;
    }, 500)
});

