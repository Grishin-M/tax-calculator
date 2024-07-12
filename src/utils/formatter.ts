export const formatter = (value: number) => {
  const formattedValue = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    currencyDisplay: 'symbol',
    useGrouping: true,
    minimumFractionDigits: 0
  }).format(Number(value))

  return formattedValue
}