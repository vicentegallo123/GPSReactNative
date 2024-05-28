// Esta función valida una dirección de correo electrónico
export function emailValidator(email) {
  // Expresión regular para validar direcciones de correo electrónico
  const re = /\S+@\S+\.\S+/;
  // Verifica si el correo electrónico está vacío
  if (!email) 
    // Retorna un mensaje de error si el correo electrónico está vacío
    return "El correo electrónico no puede estar vacío.";
  // Verifica si el correo electrónico cumple con el formato de la expresión regular
  if (!re.test(email))
    // Retorna un mensaje de error si el correo electrónico no es válido según la expresión regular
    return '¡Ups! Necesitamos una dirección de correo electrónico válida.';
  // Retorna una cadena vacía si el correo electrónico es válido
  return '';
}
