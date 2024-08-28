 // variable declarations
 export const alex={
  firstname : "Alex",
  surname : "Naidoo",
  role : "Head of Marketing",
 };
 // Construct the display string
 const display = alex.firstname + " " + alex.surname + " (" + alex.role + ")";

 //  the element with ID 'alex'
 document.querySelector('#alex').innerText = display;