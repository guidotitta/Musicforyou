let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let resultadoDeBusqueda = queryStringObj.get('busqueda')

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=' + resultadoDeBusqueda)
.then(function(response){
    return response.json()
})
.then(function(datos){
    console.log(datos);

    let container = document.querySelector('.container')
    for (let index = 0; index < 3; index++) {
        const artista = datos.data[index];
        
        container.innerHTML += `
        <div class="container-artistas">
        <a href="detalleArtista.html?id=${artista.id}"><img src="${artista.picture_big}" alt=""></a>     
        <h3>${artista.name}</h3>
    </div>`
    }
})
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=' + resultadoDeBusqueda)
.then(function(response){
    return response.json()
})
.then(function(datos){
    console.log(datos);

    let container = document.querySelector('.container-alb')
    for (let index = 0; index < 6; index++) {
        const artista = datos.data[index];
        
        container.innerHTML += `

       <div class="container-album">
           <a href="detalleAlbum.html"><img src="${artista.cover_big}" alt=""></a>     
           <h3>${artista.title}</h3>
          </div>
         ` 
    }
})
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' + resultadoDeBusqueda)
.then(function(response){
    return response.json()
})
.then(function(datos){
    console.log(datos);

    let container = document.querySelector('.container-cancion')
    for (let index = 0; index < 6; index++) {
        const artista = datos.data[index];
        
        container.innerHTML += `
        <div class="container-track">
        <a href="detalleTrack.html"><img src="${artista.album_big}" alt=""></a>     
         <h3>${artista.title}</h3>
        </div>
       
         ` 
    }
})