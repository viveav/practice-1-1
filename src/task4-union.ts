// Тип валюты — только три варианта
export type Currency = "RUB" | "USD" | "EUR";

// Курсы конвертации (упрощенно, относительно RUB):
// 1 USD = 90 RUB
// 1 EUR = 100 RUB

export function convert(amount: number, from: Currency, to: Currency): number {
  // 1. Если валюты одинаковые, конвертировать не нужно
  if (from === to) {
    return amount;
  }

  // Переводим исходную валюту в рубли (базовая валюта)
  let amountInRub = amount;
  if (from === "USD") {
    amountInRub = amount * 90;
  } else if (from === "EUR") {
    amountInRub = amount * 100;
  }

  // Переводим рубли в целевую валюту
  if (to === "RUB") {
    return amountInRub;
  } else if (to === "USD") {
    return amountInRub / 90;
  } else if (to === "EUR") {
    return amountInRub / 100;
  }

  return amountInRub;
}

export function formatCurrency(amount: number, currency: Currency): string {
  // Вернуть строку вида "100 RUB" или "50.5 USD"
  return `${amount} ${currency}`;
}
