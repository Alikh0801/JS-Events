const timer = document.getElementById("timer");
const startBtn = document.getElementById("start-button");
const stopBtn = document.getElementById("stop-button");
const resetBtn = document.getElementById("reset-button");

let startTime = 0;
let elapsed = 0;
let interval;

startBtn.addEventListener("click", () => {

    startTime = Date.now() - elapsed;
    interval = setInterval(updateTimer, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;

});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    elapsed = Date.now() - startTime;
    startBtn.disabled = false;
    stopBtn.disabled = true;
});


resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    startTime = 0;
    elapsed = 0;
    timer.textContent = "00:00:000";
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
});


function updateTimer() {
    elapsed = Date.now() - startTime;
    let minutes = Math.floor(elapsed / 60000);
    let seconds = Math.floor((elapsed % 60000) / 1000);
    let milliseconds = elapsed % 1000;

    timer.textContent =
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}:` +
        `${String(milliseconds).padStart(3, "0")}`;
}