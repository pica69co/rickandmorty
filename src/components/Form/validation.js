export default function validation(inputs) {
  const errors = {};

  const regexEmail = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  console.log('errors validations',errors);
  
  if (inputs.user_name.length < 4) {
    errors.name = "Escribe tu Nombre completo.";
    errors.disabled = true;
  }
  if (!regexEmail.test(inputs.user_email)) {
    errors.user_email = "No tiene formato de email correcto";
    errors.disabled = true;
  }
  if (!inputs.message) {
    errors.message = "Escribe tu mensaje...";
    errors.disabled = true;
  }
  return errors;
}
