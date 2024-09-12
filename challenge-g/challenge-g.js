// Constants for warning messages
const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

// Constants for locations
const RSA = 'RSA';
const NAM = 'NAM';
const NK = 'NK';

// Variables for location, number of customers, currency, and shipping cost
let location = RSA;
let customers = 1;
let currency = 'R';
let shipping = null;

// Prices of items
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

// The shipping cost based on location
if (location === RSA) {
  shipping = 400;
} else if (location === NAM) {
  shipping = 600;
} else {
  shipping = 800;
}

// Checks if shipping is banned for the location
if (location === NK) {
  console.log(BANNED_WARNING);
} else {
  // Checks if the total cost of selected items exceeds 1000 and if there is only one customer
  if (shoes + batteries + pens + shirts > 1000 && customers === 1) {
    // Free shipping for RSA and NAM locations if the location is strictly true
    if (location === NAM || location === RSA) {
      shipping = 0;
    }
  }

  // Display a warning if free shipping applies but there are multiple customers
  if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING);
  }

  // Calculate and display the total price
  console.log('price', currency, shoes + batteries + toys + pens + shirts + shipping);
}
