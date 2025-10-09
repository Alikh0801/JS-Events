const quickMode = document.querySelector('.quick-mode');
const eyeBtn = document.querySelector('.lucide-eye-icon');
const closeBtn = document.getElementById('close');

eyeBtn.addEventListener('click', () => {

    quickMode.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    quickMode.style.display = 'none';
    document.body.style.overflow = '';
});

quickMode.addEventListener('click', (e) => {
    if (e.target === quickMode) {
        quickMode.style.display = 'none';
        document.body.style.overflow = '';
    }
});