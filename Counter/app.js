// Selecting the elements required for the project

let counterDisplayValue = document.querySelector(".counterDisplayValue");
const addCounterBtn = document.querySelector("#addCounterBtn");
const lowerCounterBtn = document.querySelector("#lowerCounterBtn");

let currentCount_Value = 0;

addCounterBtn.addEventListener("click", function() {
  currentCount_Value += 1;
  // Displaying the counter value onto the screen
  counterDisplayValue.innerHTML = currentCount_Value;
  if (currentCount_Value > 0) {
    counterDisplayValue.style.color = "black";
    // counterDisplayValue.innerHTML = currentCount_Value;
  } else if (currentCount_Value === "0") {
    counterDisplayValue.style.color = "white";
    // currentCount_Value.innerHTML = counterDisplayValue;
  }
  counterDisplayValue.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 500,
    fill: "forwards"
  });
});

lowerCounterBtn.addEventListener("click", function() {
  // Decrementing the counter value
  currentCount_Value -= 1;
  counterDisplayValue.innerHTML = currentCount_Value;
  if (currentCount_Value < 0) {
    counterDisplayValue.style.color = "red";
  } else if (currentCount_Value === 0) {
    counterDisplayValue.style.color = "green";
  }
  //   Adding animation for displaying the counter value on to the screen
  counterDisplayValue.animate([{ opacity: "0.3" }, { opacity: "1.0" }], {
    duration: 100,
    fill: "forwards"
  });
});
