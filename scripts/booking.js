/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35; // Assuming $35 is the cost for a full day by default
let dayCounter = 0;
const daysOfWeek = document.querySelectorAll('.day-selector li');
const calculatedCostElement = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');
const halfDayButton = document.getElementById('half');
const fullDayButton = document.getElementById('full');

window.onload = function() { // let calculated-cost is 0 after HTML loaded
    calculatedCostElement.innerHTML = '0';
};

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

daysOfWeek.forEach(function(day) { // each day executes a same function as follow
    day.addEventListener('click', function() {
        if (!this.classList.contains('clicked')) { // if not in clicked state, let it add 'clicked' class style. day count add one
            this.classList.add('clicked');
            dayCounter++;
            calculateTotalCost(); 
        }
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', function() {
    daysOfWeek.forEach(function(day) {
        day.classList.remove('clicked'); // remove all the days clicked state.
    });
    dayCounter = 0;
    calculateTotalCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', function() {
    costPerDay = 20; // Assuming $20 is the cost for a half day
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateTotalCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', function() {
    costPerDay = 35; // Cost for a full day
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateTotalCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
    const totalCost = dayCounter * costPerDay;
    calculatedCostElement.innerHTML = totalCost.toString();
}