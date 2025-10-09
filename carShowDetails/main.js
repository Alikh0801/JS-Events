const button = document.getElementById(`btn`)
const info = document.querySelector(`.info`)

button.addEventListener(`click`, () => {

    if (info.style.display === `none`) {
        info.style.display = `block`;
        button.innerText = `Hide Details`;
    } else {
        info.style.display = `none`;
        button.innerText = `Show Deatils`;
    }
})