export function getMonthlyPayment(price: number, months: number = 24): number {
  // Affirm/PayBright 0% APR promotional calculation
  return Math.ceil(price / months);
}

export function formatFinancing(price: number): string {
  const monthly = getMonthlyPayment(price);
  return `$${monthly}/mo`;
}
