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
    if (timePeriod === "6months") {
      months = 6;
    } else if (timePeriod === "1year") {
      months = 12;
    } else if (timePeriod === "5years") {
      months = 60;
    }

    // Calculate the total savings over the selected time period
    const totalSavings = savings * months;

    // Check if savings goal is met
    const goalMet = totalSavings >= savingsGoal;

    // Display the result
    let resultMessage = `You will save $${totalSavings.toFixed(
      2
    )} in ${timePeriod}.`;

    if (goalMet) {
      resultMessage += " Congratulations! You will meet your savings goal!";
    } else {
      resultMessage +=
        " You will not meet your savings goal. Consider increasing your savings percentage or extending the time period.";
    }

    // Create a result element and display it below the form
    let resultDiv = document.getElementById("result");
    if (!resultDiv) {
      resultDiv = document.createElement("div");
      resultDiv.id = "result";
      document.body.appendChild(resultDiv);
    }
    resultDiv.innerText = resultMessage;
  });
});
