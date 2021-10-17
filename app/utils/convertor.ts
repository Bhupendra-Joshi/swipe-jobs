export const convertCentsToDollars = (cents:number, decimalPlaces = -1) => {
  if (decimalPlaces === -1) {
    return cents / 100
  } else {
    return Number((cents / 100).toFixed(decimalPlaces))
  }
}
