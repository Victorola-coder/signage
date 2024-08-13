function calculateCost() {
  const nameInput = document.getElementById("nameInput").value.trim();
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  // Clear previous results and errors
  resultDiv.innerHTML = "";
  errorDiv.innerHTML = "";

  // Check if the user entered a value
  if (nameInput === "") {
    errorDiv.innerHTML = "Please enter a name below...";
    return;
  }

  // Calculate the cost
  const costPerLetter = 5;
  const nameLength = nameInput.length;
  const totalCost = nameLength * costPerLetter;

  // Show the result
  resultDiv.innerHTML = `<p>${nameInput
    .split("")
    .join(" ")}</p><div class="cost">$${totalCost}</div>`;
}
