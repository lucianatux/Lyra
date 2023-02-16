/** 
const elementos = document.querySelectorAll('.list-group-item');
console.log(elementos)



document.getElementById('greeting').onclick= function (){
    document.getElementById('hello').innerHTML="Hello World!<br> My name is Luciana Soledad Caminos Cano.<br>I am a Web Developer.";
    document.getElementById('greeting').innerHTML="";
}


document.addEventListener('click', function(){
    document.getElementById('enjoy').innerHTML="Enjoy it!";
})


document.getElementById('enjoy').addEventListener('click', function(){
    document.getElementById('enjoy').innerHTML="Enjoy it!";
})

document.getElementById('music').addEventListener('click', function(){
    document.getElementById('rolling').controls='controls';
})



document.getElementById('papreg').addEventListener('click', function(){
   if(document.getElementById('papregfoto').style.display== 'none'){
    document.getElementById('papregfoto').style.display= 'block';
}else{
    document.getElementById('papregfoto').style.display= 'none';
}
})
*/
/** 
document.getElementById('contactme').addEventListener('click', function(){
    if(document.getElementById('extrainfo').style.display== 'none'){
        document.getElementById('extrainfo').style.display= 'block';
    }else{
        document.getElementById('extrainfo').style.display= 'none';
    }
    
})

const imagenes= document.querySelectorAll('.img-galeria')
const imagenesLight= document.querySelector('.agregarimagen')
const contenedorLight= document.querySelector('.imagenlight')
const hamburguer1 = document.querySelector('.hamburguer');

//console.log(imagenes);
//console.log(imagenesLight);
//console.log(contenedorLight);

imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showimage'); 
        hamburguer1.style.opacity = '1';
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showimage');
    hamburguer1.style.opacity = '0';
}
*/
