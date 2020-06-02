const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  let feet = document.getElementById("feet");
  let inches = document.getElementById("inches");
  let results = document.getElementById("results");

  e.preventDefault();

  feet = parseInt(feet.value);
  inches = parseInt(inches.value);

  if (isNaN(feet) || isNaN(inches)) {
    results.textContent = "Please entere a valid Number";
  } else if (feet < 0) {
    results.textContent = "Please entere a feet value > 0";
  } else if (inches < 0 || inches >= 12) {
    results.textContent = "Please entere a inch value between 0 and 12";
  } else {
    let totalInches = feet * 12 + inches;
    results.textContent = `${totalInches} cm `;
    document.getElementById("feet").value = "";
    document.getElementById("inches").value = "";
  }
});
