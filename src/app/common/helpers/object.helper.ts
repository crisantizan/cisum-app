/** indicates if all props of the object are empty */
export function propsObjectEmpty(object: any) {
  return Object.values(object).every((val) => !val);
}
