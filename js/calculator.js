const OPERATIONS = {
  sum: "+",
  subtract: "-",
  multiply: "*",
  divison: "/",
};

function calculate({ a, b, operation }) {
  let result = null;
  switch (operation) {
    case OPERATIONS.sum:
      result = sum(a, b);
      break;

    case OPERATIONS.subtract:
      result = substract(a, b);
      break;

    case OPERATIONS.multiply:
      result = multiply(a, b);
      break;

    case OPERATIONS.divison:
      result = divison(a, b);
      break;
    default:
      break;
  }

  return result;
}
