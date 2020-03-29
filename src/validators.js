export function validateUrl (url) {
  const regex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
  return regex.test(url)
}

export function validateToken (token) {
  const regex = /^[A-Za-z0-9-]+$/
  return regex.test(token)
}
