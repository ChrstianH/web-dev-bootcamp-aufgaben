function numDiff() {
  const number = document.querySelector(".number").value;

  const difference = number - 27;

  if (number > 27) {
    console.log(difference * 2);
  } else {
    console.log(difference);
  }
}
