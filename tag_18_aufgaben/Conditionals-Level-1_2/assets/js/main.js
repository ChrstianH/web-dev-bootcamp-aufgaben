function quality() {
  const quality = document.querySelector(".weather").value;
  console.log(quality);

  let qualityString = "";

  if (quality >= 8 && quality <= 10) {
    qualityString = "super";
  } else if (quality >= 6 && quality <= 7) {
    qualityString = "gut";
  } else if (quality >= 3 && quality <= 5) {
    qualityString = "okay";
  } else if (quality >= 0 && quality <= 2) {
    qualityString = "schlecht";
  }

  document.querySelector(
    ".result"
  ).innerHTML = `Die Wetter-Qualität ist: ${qualityString}`;
}
