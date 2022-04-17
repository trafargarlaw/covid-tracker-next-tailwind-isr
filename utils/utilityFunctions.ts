export const getPercentage = (value: number, total: number) => {
  return ((value * 100) / total).toFixed(2).toString()
}
export const addComma = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
