export function validateUrl (url) {
  const regex = /^https?:\/\/.+$/
  return regex.test(url)
}

export function validateToken (token) {
  const regex = /^[A-Za-z0-9]+$/
  return regex.test(token)
}
