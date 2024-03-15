export const VND = (value: number) => {
  const vndFormatSuccess = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })?.format(value)
  return vndFormatSuccess
};