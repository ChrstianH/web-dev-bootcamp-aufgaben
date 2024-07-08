function calcDiff() {
  const age1 = document.querySelector(".age1").value;
  const age2 = document.querySelector(".age2").value;

  document.querySelector(".ageDiff").innerHTML = age1 - age2;
}
