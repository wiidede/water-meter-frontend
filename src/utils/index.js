export const getBaseUrl = () => {
  const host = window.location.hostname
  return `http://${host}:5000/`
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
