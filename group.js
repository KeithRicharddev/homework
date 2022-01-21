const usd = 95;

function currencyConverter(currency) {
  return currency * 0.71;
}

let res = `${usd} is equivalent to ${currencyConverter(usd)}`;
console.log(res);
