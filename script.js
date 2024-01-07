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
