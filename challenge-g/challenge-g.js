const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

const RSA = 'RSA';
const NAM = 'NAM';
const NK = 'NK';

let location = RSA;
let customers = 1;
let currency = 'R';
let shipping = null;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

if (location === RSA) {
  shipping = 400;
} else if (location === NAM) {
  shipping = 600;
} else {
  shipping = 800;
}

if (location === NK) {
  console.log(BANNED_WARNIN);
} else {
  if (shoes + batteries + pens + shirts > 1000 && customers === 1) {
    if (location === NAM || location === RSA) {
      shipping = 0;
    }
  }

  if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING);
  }

  console.log('price', currency, shoes + batteries + pens + shirts + shipping);
}