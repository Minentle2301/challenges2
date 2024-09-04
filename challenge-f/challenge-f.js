let date = 2050;
let status = 'student';
let count = 0;

const holidayList = document.getElementById('holiday-list');
const summary = document.getElementById('summary');


if (date === 2050) {
    // Adding holidays to the list
    holidayList.innerHTML += `<li class="holiday-item">January: New Year’s Day</li>`;
    holidayList.innerHTML += `<li class="holiday-item">March: Human Rights Day</li>`;
    
    date = 'April';
    holidayList.innerHTML += `<li class="holiday-item">${date}: Family Day</li>`;
    holidayList.innerHTML += `<li class="holiday-item">${date}: Freedom Day</li>`;
    count += 4;

    if (status === "student") {
        holidayList.innerHTML += `<li class="holiday-item">June: Youth Day</li>`;
        count += 1;
    }

    holidayList.innerHTML += `<li class="holiday-item">August: Women’s Day</li>`;
    holidayList.innerHTML += `<li class="holiday-item">September: Heritage Day</li>`;
    
    date = 'December';
    holidayList.innerHTML += `<li class="holiday-item">${date}: Day of Reconciliation</li>`;
    count += 3;

    if (status = "parent") {
        holidayList.innerHTML += `<li class="holiday-item">${date}: Christmas Day</li>`;
        count += 1;
    }

    holidayList.innerHTML += `<li class="holiday-item">${date}: Day of Goodwill</li>`;
    count += 1;
}

// Displaying summary
summary.innerHTML = `
    <strong>Your status is:</strong> ${status}<br>
    <strong>The year is:</strong> ${date}<br>
    <strong>The total holidays is:</strong> ${count}
`;


