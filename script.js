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
      'image': './assets/libreria/gomaeva.jpg',
      'info': 'Goma eva<br/>Pack por 10 unidades por color<br/>$4880 ($488 c/u)'
    },
    'papelafiche': {
      'image': './assets/libreria/papelafiche.jpg',
      'info': 'Papel Afiche<br/>Pack por 10 unidades por color<br/>Blanco $3950 ($395 c/u)<br/>Color $5560 ($556 c/u)'
    },
    'papelderegalo': {
      'image': './assets/libreria/papelderegalo.jpg',
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
      'image': './assets/libreria/rompecabezas.jpg',
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
      'image': './assets/libreria/sobres.jpg',
      'info': 'Sobres de colores<br/>Chico (Tarjeta) Medidas: 7.5 X 10.5 Precio: $65<br/>Mediano (Comercial) Medidas: 11.4 X 16.2 Precio: $96<br/>Grande (Retrato) Medidas: 12.5 X 19 Precio: $104'
    },
    'catalogo': {
      'image': './assets/libreria/catalogo.jpg',
      'info': 'Catálogo completo<br/>de juguetería<br/>y artículos de librería'
    },
    'cartucheras': {
      'image': './assets/sublimados/cartucheras.jpg',
      'info': 'Cartucheras<br/>Medidas: 23cmx12cm<br/>Precio: $2310'
    },
    'portacosmeticos': {
      'image': './assets/sublimados/portacosmeticos.jpeg',
      'info': 'Portacosméticos<br/>Medidas: 19cmx13cm<br/>Precio: $2310'
    },
    'monederos': {
      'image': './assets/sublimados/monedero.jpg',
      'info': 'Monederos<br/>Medidas: 10cmx8cm<br/>Precio: $1782'
    },
    'luncheras': {
      'image': './assets/sublimados/luncheras.jpg',
      'info': 'Luncheras<br/>Medidas: 18cmx23cm<br/>$5382'
    },
    'bandolerasinfantiles': {
      'image': './assets/sublimados/bandolerasinfantiles.jpg',
      'info': 'Bandoleras infantiles<br/>Medidas: 21cmx14cmx7cm<br/>$5920'
    },
    'mochilasinfantiles': {
      'image': './assets/sublimados/mochilainfantil.jpg',
      'info': 'Mochilas infantiles<br/>Medidas: 20cmx31cmx9cm<br/>Precio: $7680'
    },
    'bolsilloauto': {
      'image': './assets/sublimados/bolsilloauto.jpg',
      'info': 'Bolsillo para el auto<br/>Medidas: 21cmx23cm<br/>'
    },
    'setasador': {
      'image': './assets/sublimados/setasador.jpg',
      'info': 'Set de asador<br/>Tabla de 20cmx20cm. Cubiertos<br/>Estuche medidas: 21cmx23cm <br/>'
    },
    'bandoleraclasica': {
      'image': './assets/marroquineria/bandoleraclasica.jpg',
      'info': 'Bandolera clásica<br/>Medidas: 18cmx25cmx8cm<br/>Precio: $8085'
    },
    'bandolerapuffer': {
      'image': './assets/marroquineria/bandolerapuffer.jpg',
      'info': 'Bandolera puffer<br/>Medidas: 23cmx25cmx8cm<br/>Precio: $9075'
    },
    'bandoleraunisex': {
      'image': './assets/marroquineria/bandoleraunisex.jpg',
      'info': 'Bandolera unisex<br/>Medidas: 21cmx14cmx7cm<br/>$5920'
    },
    'bolsomatero': {
      'image': './assets/marroquineria/bolsomatero.jpg',
      'info': 'Bolso matero<br/>Medidas: 33cmx28cmx10cm<br/>Precio: $10560'
    },
    'mochilapuffer': {
      'image': './assets/marroquineria/mochilapuffer.jpg',
      'info': 'Mochila puffer<br/>Medidas: 35cmx25cmx9cm<br/>Precio: $10560'
    },
    'mochilaescolar': {
      'image': './assets/marroquineria/mochilaescolar.jpg',
      'info': 'Mochila escolar<br/>Medidas: 34cmx28cmx12cm<br/>Precio: Lona lisa $10400 Camuflada $11200'
    },
    'kit': {
      'image': './assets/tinturas/kit.jpg',
      'info': 'EstereoColor Kit $1959<br/>Tintura + oxidante + tratamiento + guantes'
    },
    'funky': {
      'image': './assets/tinturas/funky4.jpg',
      'info': 'Funky $1238<br/>coloración semipermanente<br/>'
    },
    'cartafunky': {
      'image': './assets/tinturas/cartafunky.jpg',
      'info': 'Carta de colores Funky<br/>coloración semipermanente<br/>'
    },
    'funkyneon': {
      'image': './assets/tinturas/funkyneon.jpg',
      'info': 'Funky neón $1277<br/>coloración semipermanente<br/>'
    },
    'shock': {
      'image': './assets/tinturas/shock.jpg',
      'info': 'Shock capilar $932<br/>Tratamiento intensivo 47gr<br/>Argán, keratina, macadamia, coco, bótox, colágeno, blindaje, minuto express, rubios luminosos, carbón detox, oro 24k, silver, palta, banana y co-wash'
    },
    'oleo': {
      'image': './assets/tinturas/oleo.jpg',
      'info': 'Óleo capilar $423<br/>sachet de 4ml<br/>Mínimo: 10 unidades $4230<br/>Aceite de almendras<br/>Crema para peinar macadamia<br/>Aceite de argán<br/>Aceite de coco<br/>Ablandador de canas'
    },
    'sachet': {
      'image': './assets/tinturas/sachet.jpg',
      'info': 'Sachet EstereoColor $1372<br/>Tintura + oxidante'
    },
    'oxidante': {
      'image': './assets/tinturas/oxidante.jpg',
      'info': 'Oxidante capilar Bonmetique $729<br/>20 y 30 volúmenes | 100ml<br/>'
    },
    'carta': {
      'image': './assets/tinturas/carta.jpg',
      'info': 'Carta de colores<br/>EstereoColor<br/> <a href="./assets/tinturas/carta.pdf" target="_blank"><button type="button" class="btn special-color">Descargar<i class="fas fa-download"></i></button></a>'
    },
    'infantiltiza': {
      'image': './assets/carpinteria/infantiltiza.jpg',
      'info': '<br/><br/>'
    },
    'infantilfibron': {
      'image': './assets/carpinteria/',
      'info': '<br/><br/>'
    },
    'atril': {
      'image': './assets/carpinteria/',
      'info': '<br/><br/>'
    },
    'mesaybanco': {
      'image': './assets/carpinteria/',
      'info': '<br/><br/>'
    },
    'colgantetiza': {
      'image': './assets/carpinteria/',
      'info': '<br/><br/>'
    },
    'colgantefibron': {
      'image': './assets/carpinteria/',
      'info': '<br/><br/>'
    },
    'jenga': {
      'image': './assets/carpinteria/',
      'info': '<br/><br/>'
    },
    'cartulinero': {
      'image': './assets/carpinteria/',
      'info': '<br/><br/>'
    },
    'afichero': {
      'image': './assets/carpinteria/',
      'info': '<br/><br/>'
    },
    'hojas': {
      'image': './assets/carpinteria/',
      'info': '<br/><br/>'
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
  const listGroup = document.querySelector('.list-group-lib');
  const imageDisplay = document.getElementById('image-display-lib');
  const infoDisplay = document.getElementById('info-display-lib');
  const listGroupSub = document.querySelector('.list-group-sub');
  const imageDisplaySub = document.getElementById('image-display-sub');
  const infoDisplaySub = document.getElementById('info-display-sub');
  const listGroupMar = document.querySelector('.list-group-mar');
  const imageDisplayMar = document.getElementById('image-display-mar');
  const infoDisplayMar = document.getElementById('info-display-mar');
  const listGroupTin = document.querySelector('.list-group-tin');
  const imageDisplayTin = document.getElementById('image-display-tin');
  const infoDisplayTin = document.getElementById('info-display-tin');
  
  setupListHoverListener(listGroup, imageDisplay, infoDisplay);
  setupListHoverListener(listGroupSub, imageDisplaySub, infoDisplaySub);
  setupListHoverListener(listGroupMar, imageDisplayMar, infoDisplayMar);
  setupListHoverListener(listGroupTin, imageDisplayTin, infoDisplayTin);


  
  // Mostrar la información por defecto al cargar la página
  mostrarInformacion('cartulinas', imageDisplay, infoDisplay);
  mostrarInformacion('cartucheras', imageDisplaySub, infoDisplaySub);
  mostrarInformacion('bandoleraclasica', imageDisplayMar, infoDisplayMar);
  mostrarInformacion('kit', imageDisplayTin, infoDisplayTin);

});
