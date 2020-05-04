import { regex } from './regex.helper';

/** verify if the request load a svg local icon */
export function requestLoadSvgIcon(url: string) {
  return /.svg$/.test(url);
}

/** convert string to capitalize */
export function capitalize(value: string) {
  return value.replace(regex.FIRST_CHARACTER, (x) => x.toUpperCase());
}

/** generate a valid bearer token */
export function bearerToken(token: string) {
  return `Bearer ${token}`;
}
