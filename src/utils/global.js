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
