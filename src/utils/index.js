export const getBaseUrl = () => {
  const config = require('../config/index.json')
  return config.BASE_URL
}

// copy to clipboard
export const copyToClipboard = (content, successFunc, errorFunc) => {
  const tempEl = document.createElement('input')
  tempEl.setAttribute('value', content)
  document.body.appendChild(tempEl)
  tempEl.select()
  if (document.execCommand('copy')) {
    successFunc && typeof successFunc === 'function' && successFunc()
  } else {
    errorFunc && typeof errorFunc === 'function' && errorFunc()
  }
  document.body.removeChild(tempEl)
}
