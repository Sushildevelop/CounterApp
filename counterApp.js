let var1 = document.createElement("h1")
var1.textContent = "This is main body"

// document.body.appendChild(var1)

const decrement = document.getElementById("decrementBtn")
const display = document.getElementById("display")
const increment = document.getElementById("incrementBtn")

const reset = document.getElementById("rest")

decrement.addEventListener("click", () => {
    const value = Number(display.innerText);
    if (value > 0) {
        display.innerText = value - 1;

    } else {
        alert("Negative Value Not allowed")
    }
});

increment.addEventListener("click", () => {
    const value = Number(display.innerText)
    if (value >= 10) {
        alert("10+ values are not allowed")
    } else {
        display.innerText = value + 1
    }
})

reset.addEventListener("click", () => {
    display.innerText = 0;
})

let randomColor = () => {
        let var1 = "0123456789ABCDEF"
        let var2 = "#"
        for (let i = 0; i < 6; i++) {
            var2 = var2 + var1[Math.floor(Math.random() * 16)];
        }
        return var2;

    }
    // console.log(randomColor())

function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();
}
document.addEventListener("click", changeRandomColor)