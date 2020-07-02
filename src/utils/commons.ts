export const convertFirebaseDateToLocaleString = (date: any) => {
  return new Date(date.toMillis()).toLocaleString()
}
