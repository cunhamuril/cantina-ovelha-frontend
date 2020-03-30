/**
 * Format to brazilian currency standard
 * @param {Number} value money value
 */
export function formatCurrency(value) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Format address
 * @param {Array} value address value
 */
export function formatAddress(value) {
  if (value && value.length > 0) {
    const [{ number, street, district, city, state }] = value;
    return `${street}, ${number || 'S/N'}, ${district}, ${city}-${state}`;
  } else {
    return 'Sem endereço';
  }
}
