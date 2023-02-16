const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Aquí podrías validar los datos ingresados por el usuario antes de enviar el formulario
  
  // Una vez validados los datos, envías el formulario utilizando el siguiente código:
  const formData = new FormData(form);
  
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      // Aquí podrías mostrar un mensaje de confirmación al usuario
      console.log('Formulario enviado con éxito');
    } else {
      // Aquí podrías mostrar un mensaje de error al usuario
      console.log('Error al enviar el formulario');
    }
  })
  .catch(error => {
    // Aquí podrías mostrar un mensaje de error al usuario
    console.log(error);
  });
});
