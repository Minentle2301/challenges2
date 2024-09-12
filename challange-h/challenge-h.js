const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof number == primaryPhone
const secondaryValid = typeof  secondaryPhone !=='string' && /^\d+$/.test(primaryPhone);

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )



!=='string' && /^\d+$/.test(primaryPhone);