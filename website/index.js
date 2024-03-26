const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function () {
  radius = Number(document.getElementById('radius').value);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = `${circumference} cm`;
};