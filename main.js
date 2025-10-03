
const events = document.querySelectorAll(".circle");

const colors = ["grey", "red", "blue", "yellow"];

events.forEach((circle, index) => {

    circle.style.backgroundColor = colors[index];

    circle.addEventListener("click", () => {

        document.body.style.backgroundColor = colors[index];
    });
});
