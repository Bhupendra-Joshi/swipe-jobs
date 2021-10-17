export const formatPhone = (phone:string, separator = ' ') => {
  if (phone) {
    const formattedNumber = phone.match(/.{1,3}/g)?.join(separator).split(separator)
    if (formattedNumber?.length) {
      formattedNumber[0] = `(${formattedNumber[0]})`
      return formattedNumber.join(separator)
    }
  }

  return phone
}
