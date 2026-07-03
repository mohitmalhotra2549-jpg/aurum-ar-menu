export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price: number, currency: string) {
  return `${currency}${price.toLocaleString("en-IN")}`;
}
