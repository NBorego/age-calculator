// Var input
const inputDay = document.querySelector('#id-day');
const inputMonth = document.querySelector('#id-month');
const inputYear = document.querySelector('#id-year');
const buttonResult = document.querySelector('#id-button');

// Var outpur
const yearOut = document.querySelector('#year-out');
const monthOut = document.querySelector('#month-out');
const dayOut = document.querySelector('#day-out');

// Date
const date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let day = date.getDate();

// Error
function errorSubmit() {
    const inputs = document.querySelectorAll('input');
    let val = true;
    inputs.forEach((input) => {
        const parent = input.parentElement;
        if (!input.value) {
            input.style.borderColor = 'red';
            parent.querySelector('small').innerText =
                'this field is requered';
            val = false;
        } else if (inputMonth.value > 12) {
            inputMonth.style.borderColor = 'red';
            inputMonth.parentElement.querySelector('small').innerText =
                'must be a valid month';
            val = false;
        } else if (inputDay.value > 31) {
            inputDay.style.borderColor = 'red';
            inputDay.parentElement.querySelector('small').innerText =
                'must be a valid day';
            val = false;
        } else if (inputYear.value >= year) {
            inputYear.style.borderColor = 'red';
            inputYear.parentElement.querySelector('small').innerText =
                'must be in the past';
            val = false;
        } 
        else if (val == true) {
            submit();
        } else {
            input.style.borderColor = 'red';
            parent.querySelector('small').innerText =
                'this field is required';
            val = false;
        }
    });
}
// Calc values
function submit() {
    if (inputDay.value > day) {
        day += monthDays[month - 1];
        month--;
    }
    if (inputMonth.value > month) {
        month += 12;
        year--;
    }

    const d = day - inputDay.value;
    const m = month - inputMonth.value;
    const y = year - inputYear.value;

    dayOut.innerHTML = d;
    monthOut.innerHTML = m;
    yearOut.innerHTML = y;
}

// Event Calc
buttonResult.addEventListener('click', () => {
    errorSubmit();
});
