const keypads = document.querySelectorAll(".key");
const screen = document.getElementById("screen");
const equalBtn = document.querySelector(".btn-equals");
const clearBtn = document.querySelector(".btn-clear");

let currentCalculations = ``;

if (keypads)
  Array.from(keypads)
    .filter((keypad) => keypad.textContent !== "=")
    .forEach((keypad) =>
      keypad.addEventListener("click", () => {
        currentCalculations += keypad.textContent;
        screen.value = currentCalculations;
      }),
    );

if (equalBtn)
  equalBtn.addEventListener("click", () => {
    screen.value = eval(currentCalculations);
    currentCalculations = "";
  });

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    screen.value = "";
    currentCalculations = "";
  });
}

console.log(screen);
