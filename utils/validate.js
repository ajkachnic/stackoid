export function isEmail(email) {
  return email.match(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
}
export function isURL(url) {
  if(typeof(url) == "string") {
    return url.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
  }
  return false
}
export function scrubURL(url) {
  if(url.startsWith("https://") || url.startsWith("http://")) {
    return url
  }
  else {
    return "http://" + url
  }
}