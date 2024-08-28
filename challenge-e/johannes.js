// Corrected variable declarations
export const johannes={
 firstname : "Johannes",
 surname : "Potgieter",
 role :"Intern"
};

// Construct the display string
const display = johannes.firstname + " " + johannes.surname + " (" + johannes.role + ")";


document.querySelector('#johannes').innerText = display;