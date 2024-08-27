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

    const timePeriod = document.getElementById("time-period").value;

    // Calculate monthly savings
    const netIncome = income - expenses;
    const savings = (netIncome * savingsPercentage) / 100;

    // Determine number of months or years based on time period selected
    let months = 0;
  });
});
