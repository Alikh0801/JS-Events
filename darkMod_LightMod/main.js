const toggleBtn = document.getElementById("theme-toggle");

const body = document.body;

let isDark = false;

toggleBtn.addEventListener("click", () => {
    if (isDark) {

        // Light
        body.style.backgroundColor = "white";

        body.style.color = "black";
        isDark = false;
    } else {

        // Dark
        body.style.backgroundColor = "black";

        body.style.color = "white";
        isDark = true;
    }
});
