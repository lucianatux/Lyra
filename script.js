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
      'info': 'Cartulinas<br/>Medidas: 45x64cm.<br/>Precio: Color $504 Blanca $357'
    },
    'gomaeva': {
      'image': './assets/libreria/gomaeva.jpg',
      'info': 'Goma eva<br/>Pack por 10 unidades por color<br/>$6490 ($649 c/u)'
    },
    'papelafiche': {
      'image': './assets/libreria/papelafiche.jpg',
      'info': 'Papel Afiche<br/>Pack por 10 unidades por color<br/>Blanco $5850 ($585 c/u)<br/>Color $8280 ($828 c/u)'
    },
    'papelderegalo': {
      'image': './assets/libreria/papelderegalo.jpg',
      'info': 'Papel de Regalo<br/>Medidas: 70cm x 100cm ilustración 90gr<br/>Precio: $772 c/u<br/>Mínimo 5 unidades por diseño.'
    },
    'bolsaskraft': {
      'image': './assets/libreria/bolsaskraft.jpg',
      'info': 'Bolsas Kraft<br/>18cmx20cm $337 <br/>22cmx30cm $389<br/>30cmx41cm $515 <br/>Bolsa vino 14x40cm $395'
    },
    'bolsasacuario': {
      'image': './assets/libreria/bolsasacuario.jpg',
      'info': 'Bolsas Acuario<br/>14cmx20cm $424<br/>22cmx30cm $541<br/>30cmx41cm $768'
    },
    'bolsasfantasia': {
      'image': './assets/libreria/bolsasfantasia.jpg',
      'info': 'Bolsas Fantasía<br/>14cmx20cm $480<br/>22cmx30cm $654<br/>30cmx41cm $909'
    },
    'libritos': {
      'image': './assets/libreria/libritos.jpg',
      'info': 'Libritos para colorear $361<br/>Tamaño A4<br/>Clásicos y Didácticos<br/>Mínimo 3 unidades por diseño'
    },
    'rompecabezas': {
      'image': './assets/libreria/rompecabezas.jpg',
      'info': 'Rompecabezas $1158<br/>Medidas:28cm x 19cm<br/>24 piezas'
    },
    'palitosdehelado': {
      'image': './assets/libreria/palitos.jpg',
      'info': 'Palitos de helado<br/>Color x 50 $763<br/>Natural x 50 $530<br/>Gigante color x30 $800<br/>Gigante natural x30 $636'
    },
    'viruta': {
      'image': './assets/libreria/viruta.jpg',
      'info': 'Viruta<br/>En bolsa x50gr<br/>De color $814<br/>Natural $648'
    },
    'papelesespeciales': {
      'image': './assets/libreria/papelesespeciales.jpg',
      'info': 'Papeles especiales<br/>Autoadhesivo satinado A4 x10u $2068<br/>Autoadhesivo mate A4 x10u $1941<br/>Papel obra color A4 75gr x20u $902<br/>Papel fotografico A4 180gr x10u $2519'
    },
    'sobres': {
      'image': './assets/libreria/sobres.jpg',
      'info': 'Sobres de colores<br/>Chico (Tarjeta) Medidas: 7.5 X 10.5 Precio: $78<br/>Mediano (Comercial) Medidas: 11.4 X 16.2 Precio: $115<br/>Grande (Retrato) Medidas: 12.5 X 19 Precio: $127'
    },
    'catalogo': {
      'image': './assets/libreria/catalogo.jpg',
      'info': 'Catálogo completo<br/>de juguetería<br/>y artículos de librería'
    },
    'cartucheras': {
      'image': './assets/sublimados/cartucheras.jpg',
      'info': 'Cartucheras<br/>Medidas: 23cmx12cm<br/>Precio: $2656'
    },
    'portacosmeticos': {
      'image': './assets/sublimados/portacosmeticos.jpeg',
      'info': 'Portacosméticos<br/>Medidas: 19cmx13cm<br/>Precio: $2656'
    },
    'monederos': {
      'image': './assets/sublimados/monedero.jpg',
      'info': 'Monederos<br/>Medidas: 10cmx8cm<br/>Precio: $2049'
    },
    'luncheras': {
      'image': './assets/sublimados/luncheras.jpg',
      'info': 'Luncheras<br/>Medidas: 18cmx23cm'
    },
    'bandolerasinfantiles': {
      'image': './assets/sublimados/bandolerasinfantiles.jpg',
      'info': 'Bandoleras infantiles<br/>Medidas: 21cmx14cmx7cm'
    },
    'mochilasinfantiles': {
      'image': './assets/sublimados/mochilainfantil.jpg',
      'info': 'Mochilas infantiles<br/>Medidas: 20cmx31cmx9cm'
    },
    'bolsilloauto': {
      'image': './assets/sublimados/bolsilloauto.jpg',
      'info': 'Bolsillo para el auto<br/>Medidas: 21cmx23cm<br/>'
    },
    'setasador': {
      'image': './assets/sublimados/setasador.jpg',
      'info': 'Set de asador<br/>Tabla de 20cmx20cm. Cubiertos<br/>Estuche medidas: 21cmx23cm <br/>'
    },
    'carterasseptiembre': {
      'image': './assets/marroquineria/cartsept.jpg',
      'info': 'Carteras Septiembre<br/>Lara, Pilar visón, Pilar negra,<br/>Zaira, Rita negra, Rita combinada, <br/>Nacha, Bolso Flor, Bolso XXL'
    },
    'mochilasseptiembre': {
      'image': './assets/marroquineria/mochisept.jpg',
      'info': 'Mochilas Septiembre<br/>Lola beige, Lola negra,<br/>Juli verde, Sole negra, Luisa visón,<br/>Roma negra'
    },
    'bandolerasseptiembre': {
      'image': './assets/marroquineria/bandosept.jpg',
      'info': 'Bandoleras Septiembre<br/>Paz negra, Paz visón,<br/>Cami espejo, Cami croco suela, Cami croco plata,<br/>Luna negra, Luna beige, Luna visón, Riñonera,<br/>Marti, Lucía negra, Vera suela'
    },
    'bandoleraclasica': {
      'image': './assets/marroquineria/bandoleraclasica.jpg',
      'info': 'Bandolera clásica<br/>Medidas: 18cmx25cmx8cm'
    },
    'bandolerapuffer': {
      'image': './assets/marroquineria/bandolerapuffer.jpg',
      'info': 'Bandolera puffer<br/>Medidas: 23cmx25cmx8cm'
    },
    'bandoleraunisex': {
      'image': './assets/marroquineria/bandoleraunisex.jpg',
      'info': 'Bandolera unisex<br/>Medidas: 21cmx14cmx7cm'
    },
    'bolsomatero': {
      'image': './assets/marroquineria/bolsomatero.jpg',
      'info': 'Bolso matero<br/>Medidas: 33cmx28cmx10cm'
    },
    'mochilapuffer': {
      'image': './assets/marroquineria/mochilapuffer.jpg',
      'info': 'Mochila puffer<br/>Medidas: 35cmx25cmx9cm'
    },
    'mochilaescolar': {
      'image': './assets/marroquineria/mochilaescolar.jpg',
      'info': 'Mochila escolar<br/>Medidas: 34cmx28cmx12cm'
    },
    'kit': {
      'image': './assets/tinturas/kit.jpg',
      'info': 'EstereoColor Kit $2352<br/>Tintura + oxidante + tratamiento + guantes'
    },
    'funky': {
      'image': './assets/tinturas/funky4.jpg',
      'info': 'Funky $1490<br/>coloración semipermanente<br/>'
    },
    'cartafunky': {
      'image': './assets/tinturas/cartafunky.jpg',
      'info': 'Carta de colores Funky<br/>coloración semipermanente<br/>'
    },
    'funkyneon': {
      'image': './assets/tinturas/funkyneon.jpg',
      'info': 'Funky neón $1490<br/>coloración semipermanente<br/>'
    },
    'shock': {
      'image': './assets/tinturas/shock.jpg',
      'info': 'Shock capilar $1098<br/>Tratamiento intensivo 47gr<br/>Argán, keratina, macadamia, coco, bótox, colágeno, blindaje, minuto express, rubios luminosos, carbón detox, oro 24k, silver, palta, banana y co-wash'
    },
    'oleo': {
      'image': './assets/tinturas/oleo.jpg',
      'info': 'Óleo capilar $512<br/>sachet de 4ml<br/>Mínimo: 10 unidades $5120<br/>Aceite de almendras<br/>Crema para peinar macadamia<br/>Aceite de argán<br/>Aceite de coco<br/>Ablandador de canas'
    },
    'sachet': {
      'image': './assets/tinturas/sachet.jpg',
      'info': 'Sachet EstereoColor $1645<br/>Tintura + oxidante'
    },
    'oxidante': {
      'image': './assets/tinturas/oxidante.jpg',
      'info': 'Oxidante capilar Bonmetique $1178<br/>20 y 30 volúmenes | 100ml<br/>'
    },
    'carta': {
      'image': './assets/tinturas/carta.jpg',
      'info': 'Carta de colores<br/>EstereoColor<br/> <a href="./assets/tinturas/carta.pdf" target="_blank"><button type="button" class="btn special-color">Descargar<i class="fas fa-download"></i></button></a>'
    },
    'esmaltes': {
      'image': './assets/otros/esmaltes.jpeg',
      'info': 'Esmaltes McMora <br/>Larga duración, secado rápido <br/>8ml $1160 <br/>11 ml $1800<br/>Pincel panorámico, fórmula hipoalergénica.'
    },
    'morralhombre': {
      'image': './assets/otros/morralhombre.jpeg',
      'info': 'Morrales para hombre<br/>Color negro o gris'
    },
    'tabaquera': {
      'image': './assets/otros/tabaquera2.jpeg',
      'info': 'Tabaquera<br/>Color suela'
    },
    'tarjetero': {
      'image': './assets/otros/tarjeteros.jpeg',
      'info': 'Tarjeteros'
    },
    'llavero': {
      'image': './assets/otros/llaveros.jpeg',
      'info': 'Llaveros de clubes de fútbol'
    },
    'botineras': {
      'image': './assets/otros/botineras.jpeg',
      'info': 'Botineras para guardar los botines de fútbol<br/>Medidas: 35cmx19cmx12cm de profundidad.'
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
  const listGroupLib = document.querySelector('.list-group-lib');
  const imageDisplayLib = document.getElementById('image-display-lib');
  const infoDisplayLib = document.getElementById('info-display-lib');
  const listGroupSub = document.querySelector('.list-group-sub');
  const imageDisplaySub = document.getElementById('image-display-sub');
  const infoDisplaySub = document.getElementById('info-display-sub');
  const listGroupMar = document.querySelector('.list-group-mar');
  const imageDisplayMar = document.getElementById('image-display-mar');
  const infoDisplayMar = document.getElementById('info-display-mar');
  const listGroupTin = document.querySelector('.list-group-tin');
  const imageDisplayTin = document.getElementById('image-display-tin');
  const infoDisplayTin = document.getElementById('info-display-tin');
  const listGroupCar = document.querySelector('.list-group-car');
  const imageDisplayCar = document.getElementById('image-display-car');
  const infoDisplayCar = document.getElementById('info-display-car');
  
  setupListHoverListener(listGroupLib, imageDisplayLib, infoDisplayLib);
  setupListHoverListener(listGroupSub, imageDisplaySub, infoDisplaySub);
  setupListHoverListener(listGroupMar, imageDisplayMar, infoDisplayMar);
  setupListHoverListener(listGroupTin, imageDisplayTin, infoDisplayTin);
  setupListHoverListener(listGroupCar, imageDisplayCar, infoDisplayCar);



  
  // Mostrar la información por defecto al cargar la página
  mostrarInformacion('cartulinas', imageDisplayLib, infoDisplayLib);
  mostrarInformacion('cartucheras', imageDisplaySub, infoDisplaySub);
  mostrarInformacion('carterasseptiembre', imageDisplayMar, infoDisplayMar);
  mostrarInformacion('kit', imageDisplayTin, infoDisplayTin);
  mostrarInformacion('esmaltes', imageDisplayCar, infoDisplayCar);
});

