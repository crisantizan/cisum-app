/** regular expressions */
export const regex = {
  /**
   * letras A-Z (con tildes u otros signos, mayúsculas y minúsculas)
   */
  AZ_SPACES: /^[a-zA-Zá-źÁ-ŹäëïöüÄËÏÖÜñÑ\s]+$/,
  /**
   * fechas con el formato YYYY/MM/DD
   */
  DATE: /^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/,
  /**
   * Solo números
   */
  NUMBER: /^[0-9]+$/,
  /**
   * Solo letras y números
   */
  AZ_NUMBER: /^[a-zA-Zá-źÁ-Ź0-9äëïöüÄËÏÖÜñÑ\s]+$/,
  /** validar nombre de test de tipo atención */
  NAME_TEST_ATENTION: /^[A-Z0-9Ñ\_]+$/,
  /** nick */
  NICK: /^[a-z]{1,}[a-z0-9]*$/,
  /** contraseña */
  PASSWORD: /^[A-Za-z0-9\_\-\$#;@]+$/,
  /** número con un solo decimal (con punto) */
  ONE_DECIMAL: /^[0-9]+(\.{1}[0-9]{1})?$/,
  /** email válido  */
  // tslint:disable-next-line: max-line-length
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
