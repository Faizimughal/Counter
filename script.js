function Decrease() {
  let x = document.getElementById("input");
  let currentNumber = Number(x.innerHTML);
  diff = currentNumber - 1;
  x.innerHTML = diff;
}

function Increase() {
  let x = document.getElementById("input");
  let currentNumber = Number(x.innerHTML);
  diff = currentNumber + 1;
  x.innerHTML = diff;
}

function Reset() {
  let x = document.getElementById("input");
  x.innerHTML = "0 ";
}
