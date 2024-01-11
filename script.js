function toggleDarkMode() {
  const body = document.body;
  const img= document.getElementById('lightdark');
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    img.style.filter = ''; 

  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    img.style.filter = 'invert(100%)'; 
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Obtener elementos relevantes
  var listGroup = document.querySelector('.list-group');
  var imageDisplay = document.getElementById('image-display');

  // Agregar un evento a todos los elementos <p> dentro de .list-group
  listGroup.addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'P') {
      var imageUrl = event.target.getAttribute('data-image');
      imageDisplay.src = imageUrl;
    }
  });
});
