  //  declarations
  export const nwabisa = {
  firstname :"Nwabisa",
   surname : "Gabe",
   role :"CEO"
  };
  //  the display string
  const display = nwabisa.firstname + " " + nwabisa.surname + " (" + nwabisa.role + ")";

  
  document.querySelector('#nwabisa').innerText = display;