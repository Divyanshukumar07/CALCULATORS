let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
function increment() {
  if (!isNaN(display.value) && display.value !== "") {
    display.value = Number(display.value) + 1;
  } else {
    display.value = "Error";
  }
}

function decrement() {
  if (!isNaN(display.value) && display.value !== "") {
    display.value = Number(display.value) - 1;
  } else {
    display.value = "Error";
  }
}

