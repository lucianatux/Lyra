function toggleDarkMode() {
  const body = document.body;
  const img= document.getElementById('lightdark');
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    img.style.filter = ''; 

  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    img.style.filter = 'invert(100%)'; 
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const dataInfo = {
    'cartulinas': {
      'image': './assets/libreria/cartulinas.jpg',
      'info': 'Cartulinas<br/>Medidas: 45x64cm.<br/>Precio: Color $323 Blanca $290'
    },
    'gomaeva': {
      'image': './assets/libreria/gomaeva.jpeg',
      'info': 'Goma eva<br/>Pack por 10 unidades por color<br/>$4880 ($488 c/u)'
    },
    'papelafiche': {
      'image': './assets/libreria/papelafiche.jpg',
      'info': 'Papel Afiche<br/>Pack por 10 unidades por color<br/>Blanco $3950 ($395 c/u)<br/>Color $5560 ($556 c/u)'
    },
    'papelderegalo': {
      'image': './assets/libreria/papelderegalo.jpeg',
      'info': 'Papel de Regalo<br/>Medidas: 70cm x 100cm ilustración 90gr<br/>Precio: $593 c/u<br/>Mínimo 5 unidades por diseño.'
    },
    'bolsaskraft': {
      'image': './assets/libreria/bolsaskraft.jpg',
      'info': 'Bolsas Kraft<br/>14cmx20cm $277<br/>22cmx30cm $331<br/>30cmx41cm $439<br/>Bolsa vino 14x40cm $336<br/>Bolsa vino doble 22x42cm $377'
    },
    'bolsasacuario': {
      'image': './assets/libreria/bolsasacuario.jpg',
      'info': 'Bolsas Acuario<br/>14cmx20cm $360<br/>22cmx30cm $462<br/>30cmx41cm $655'
    },
    'bolsasfantasia': {
      'image': './assets/libreria/bolsasfantasia.jpg',
      'info': 'Bolsas Fantasía<br/>14cmx20cm $408<br/>22cmx30cm $556<br/>30cmx41cm $774'
    },
    'libritos': {
      'image': './assets/libreria/libritos.jpg',
      'info': 'Libritos para colorear<br/>Tamaño A4<br/>Clásicos y Didácticos<br/>Precio: $268 c/u<br/>Mínimo 3 unidades por diseño'
    },
    'rompecabezas': {
      'image': './assets/libreria/rompecabezas.jpeg',
      'info': 'Rompecabezas<br/>Medidas:28cm x 19cm<br/>24 piezas<br/>Precio: $610'
    },
    'palitosdehelado': {
      'image': './assets/libreria/palitos.jpg',
      'info': 'Palitos de helado<br/>Color x 50 $751<br/>Natural x 50 $522<br/>Gigante color x30 $787<br/>Gigante natural x30 $625'
    },
    'viruta': {
      'image': './assets/libreria/viruta.jpg',
      'info': 'Viruta<br/>En bolsa x50gr<br/>De color $814<br/>Natural $647'
    },
    'papelesespeciales': {
      'image': './assets/libreria/papelesespeciales.jpg',
      'info': 'Papeles especiales<br/>Autoadhesivo satinado A4 x10u $1105<br/>Autoadhesivo mate A4 x10u $1105<br/>Papel obra color A4 75gr x20u $649<br/>Papel fotografico A4 180gr x10u $1224'
    },
    'sobres': {
      'image': './assets/libreria/sobres.jpeg',
      'info': 'Sobres de colores<br/>Chico (Tarjeta) Medidas: 7.5 X 10.5 Precio: $65<br/>Mediano (Comercial) Medidas: 11.4 X 16.2 Precio: $96<br/>Grande (Retrato) Medidas: 12.5 X 19 Precio: $104'
    },
    'catalogo': {
      'image': './assets/libreria/catalogo.jpg',
      'info': 'Catálogo completo de juguetería y artículos de librería'
    },
    'cartucheras': {
      'image': './assets/sublimados/cartucheras.jpg',
      'info': 'Cartulinas<br/>Medidas: 45x64cm.<br/>Precio: Color $323 Blanca $290'
    },
    'portacosmeticos': {
      'image': './assets/sublimados/portacosmeticos.jpeg',
      'info': 'Goma eva<br/>Pack por 10 unidades por color<br/>$4880 ($488 c/u)'
    },
    'monederos': {
      'image': './assets/sublimados/monederos.jpg',
      'info': 'Papel Afiche<br/>Pack por 10 unidades por color<br/>Blanco $3950 ($395 c/u)<br/>Color $5560 ($556 c/u)'
    },
    'luncheras': {
      'image': './assets/sublimados/luncheras.jpeg',
      'info': 'Papel de Regalo<br/>Medidas: 70cm x 100cm ilustración 90gr<br/>Precio: $593 c/u<br/>Mínimo 5 unidades por diseño.'
    },
    'bandolerasinfantiles': {
      'image': './assets/sublimados/bandolerasinfantiles.jpg',
      'info': 'Bolsas Kraft<br/>14cmx20cm $277<br/>22cmx30cm $331<br/>30cmx41cm $439<br/>Bolsa vino 14x40cm $336<br/>Bolsa vino doble 22x42cm $377'
    },
    'mochilasinfantiles': {
      'image': './assets/sublimados/mochilasinfantiles.jpg',
      'info': 'Bolsas Acuario<br/>14cmx20cm $360<br/>22cmx30cm $462<br/>30cmx41cm $655'
    },
    'bolsilloauto': {
      'image': './assets/sublimados/bolsilloauto.jpg',
      'info': 'Bolsas Fantasía<br/>14cmx20cm $408<br/>22cmx30cm $556<br/>30cmx41cm $774'
    },
    'set asador': {
      'image': './assets/sublimados/setasador.jpg',
      'info': 'Libritos para colorear<br/>Tamaño A4<br/>Clásicos y Didácticos<br/>Precio: $268 c/u<br/>Mínimo 3 unidades por diseño'
    },
    'almohadones': {
      'image': './assets/sublimados/almohadones.jpeg',
      'info': 'Rompecabezas<br/>Medidas:28cm x 19cm<br/>24 piezas<br/>Precio: $610'
    },
  };
  
  function mostrarInformacion(dataKey, imageDisplay, infoDisplay) {
    var itemData = dataInfo[dataKey];
    if (itemData) {
      imageDisplay.src = itemData.image;
      infoDisplay.innerHTML = itemData.info;
    }
  }
  function setupListHoverListener(list, imageDisplay, infoDisplay) {
    list.addEventListener('mouseover', function (event) {
      if (event.target.tagName === 'P') {
        var dataKey = event.target.getAttribute('data-key');
        mostrarInformacion(dataKey, imageDisplay, infoDisplay);
      }
    });
  }
  const listGroup = document.querySelector('.list-group');
  const imageDisplay = document.getElementById('image-display');
  const infoDisplay = document.getElementById('info-display');
  
  setupListHoverListener(listGroup, imageDisplay, infoDisplay);
  
  // Mostrar la información por defecto al cargar la página
  mostrarInformacion('cartulinas', imageDisplay, infoDisplay);

});
