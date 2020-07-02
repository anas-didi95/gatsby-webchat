export const convertFirebaseDateToLocaleString = (date: any) => {
  console.log("here", date)
  return new Date(date.nanoseconds).toLocaleString()
}
