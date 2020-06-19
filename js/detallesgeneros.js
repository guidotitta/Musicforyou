//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var generoid = objetoQuery.get('id');
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/'+generoid)
.then(function(response){
    return response.json()
})
.then(function(datos){
    console.log(datos);
    let genero= datos 
    let contenedortitulo=document.querySelector('.titulogenero')
   contenedortitulo.innerHTML=`${genero.name}`
    
    
      
})
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/'+generoid+'/artists')
.then(function(response){
    return response.json()
})
.then(function(datos){
    console.log(datos);
    let artistas= datos.data
    let contenedorartistas= document.querySelector('.container-generos')
    for (let i = 0; i <10 ; i++) {
        const artista =  artistas[i];
        contenedorartistas.innerHTML+=`<div class="container-artistas">
        <a href="detalleArtista.html?id=${artista.id}"><img src="${artista.picture_big}" alt=""></a>     
        <h3>${artista.name}</h3>
    </div>
        
        `
        
    }
    
      
})