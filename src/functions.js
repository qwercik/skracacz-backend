export function generateToken (length = 10) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUWVXYZabcdefghijklmnopqrstuwvxyz0123456789'

  let output = ''
  for (let i = 0; i < length; ++i) {
    output += charset[parseInt(Math.random() * charset.length)]
  }

  return output
}

export function prependUrlWithProtocol (url) {
  if (/^https?:\/\//.test(url)) {
    return url
  } else {
    return `http://${url}`
  }
}
