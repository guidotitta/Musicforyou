let querystring = location.search
let querystringobj = new URLSearchParams (querystring)
let albumid = querystringobj.get ("id")

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/'+ albumid)
.then(function(response){
    return response.json()
})
.then(function(datos){
    console.log(datos);
    let contento = document.querySelector ("#contento")
    contento.innerHTML =
     `<div id='main'>
                <h2>
                    DETALLE ALBUM
                </h2> 
                <div id='track'>
                    <div><img class='header_track' src="${datos.cover_big}" alt="nombre album"></div>
                    <div class='track1'>
                        <h3>Titulo: ${datos.title}</h3>          
                            <p><a href="detalleArtista.html?id=${datos.id}">Artista: ${datos.artist.name}</a></p>
                            <p><a href="listadodegeneros.html?id=${datos.id}">Genero: ${datos.genres.data[0].name}</a></p>
                            <p>Discografica: ${datos.label}</p>
                            <p>Fecha de Lanzamiento: ${datos.release_date}</p>
                    </div>
                </div>
            </div>`
    
})



