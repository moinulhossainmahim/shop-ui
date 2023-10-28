export function calculatePercentage(salePrice: number, price: number) {
  return Math.round(((price - salePrice) / price) * 100);
}
