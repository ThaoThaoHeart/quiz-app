export const checkValue = (val) => {
  if (val !== undefined || val !== null) {
    if (val === true || val === 'true') {
      return true
    }
  }
  return false
}