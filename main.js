document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input values
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
    const savingsGoal = parseFloat(
      document.getElementById("savings-goal").value
    );
    const savingsPercentage = parseFloat(
      document.getElementById("savings-percentage").value
    );
  });
});
