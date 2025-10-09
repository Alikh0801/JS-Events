document.getElementById('startBtn').addEventListener('click', function () {
    let horses = ['horse1', 'horse2', 'horse3'];
    let raceTrackWidth = document.querySelector('.race-track').offsetWidth;

    horses.forEach(horseId => {

        let horse = document.getElementById(horseId);
        horse.style.transition = 'none';
        horse.style.left = '0px';
    });

    let winnerDeclared = false;

    setTimeout(() => {
        horses.forEach(horseId => {

            let horse = document.getElementById(horseId);
            let animationDuration = Math.random() * 3 + 3;
            horse.style.transition = `left ${animationDuration}s linear`;
            horse.style.left = `${raceTrackWidth - horse.offsetWidth}px`;

            horse.addEventListener('transitionend', () => {
                if (!winnerDeclared) {
                    winnerDeclared = true;
                    alert(`winner: ${horseId.toUpperCase()}`);
                }
            }, { once: true });
        });
    }, 100);
});
