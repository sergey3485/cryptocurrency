/**
 * Convert number to short abbreviation.
 *
 * @param value - number to convert.
 * @param [decimals] - number of digits after the decimal point.
 * @param [min] - convert numbers larger than min.
 */
export const convertNumberToShortAbbreviation = (
  value: string | number,
  decimals = 2,
  min = 1e3,
): string => {
  const number = typeof value === 'number' ? value : parseFloat(value);

  if (number <= min) {
    return number.toFixed(2);
  }

  const abbreviations = ['K', 'M', 'B', 'T'];

  const order = Math.floor(Math.log(number) / Math.log(1000));
  const abbreviationName = abbreviations[order - 1];

  const num = parseFloat((number / 1000 ** order).toFixed(decimals));

  return `${num} ${abbreviationName}`;
};
