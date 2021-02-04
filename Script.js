let counter = 0;

function increase() {
  let counterNode = document.getElementById("counter");
  console.log(counterNode);
  counter++;
  counterNode.innerHTML = counter;
}

function decrease() {
  counter--;
  document.getElementById("counter").innerHTML = counter;
}
