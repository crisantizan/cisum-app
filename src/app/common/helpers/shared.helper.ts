/** verify if the request load a svg local icon */
export function requestLoadSvgIcon(url: string) {
  return /.svg$/.test(url);
}
