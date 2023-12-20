// function btn for millimeter
function convertMill() {
  var inches = document.getElementById("inches").value; // get the input value
  console.log(inches);
  const millimeter = inches * 25.4; // convertion solution
  if (!inches) {
    alert("Enter value");
  } else
    document.getElementById(
      "result"
    ).innerHTML = `${inches} inches is equal to ${millimeter.toFixed(
      2
    )} Millimeter`;
}
// function btn for Cetimeter
function convertCent() {
  var inches = document.getElementById("inches").value;
  const centimeter = inches * 2.54;
  if (!inches) {
    alert("Enter value");
  } else
    document.getElementById(
      "result"
    ).innerHTML = `${inches} inches is equal to ${centimeter.toFixed(
      2
    )} Centimeter`;
}
// function btn for Meter
function convertMeter() {
  var inches = document.getElementById("inches").value;
  const meter = inches * 0.0254;
  if (!inches) {
    alert("Enter value");
  } else
    document.getElementById(
      "result"
    ).innerHTML = `${inches} inches is equal to ${meter.toFixed(4)} Meter`;
}
