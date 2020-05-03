/** verify if the request is external */
export function requestIsExternal(url: string) {
  return url.includes('http');
}
