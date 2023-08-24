function money(amount: number, taxYear = 2022): number {
  if (taxYear !== 2022) {
    return amount * 1.6;
  } else {
    return amount;
  }
}

money(3000, 2023);
