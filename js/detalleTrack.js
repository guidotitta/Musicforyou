let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let trackId = queryStringObj.get('id')

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + trackId)
.then(function(response){
    return response.json()
})
.then(function(datos){
    console.log(datos);

    let contento = document.querySelector('#contento')

    contento.innerHTML = `
    <div id='main'>
    <h2>
        DETALLE TRACK
    </h2> 
    <div id='track'>
        <div><img class='header_track' src="${datos.album.cover_big}" alt=""></div>
        <div class='track1'>
        <div class='header_track2'>
    <h3>${datos.title}</h3>
    <p> <a href="playlist.html">Agregar a playlist</a></p>
    </div>          
        <p><a href="detalleAlbum.html">Album: ${datos.album.title}</a></p>
        <p><a href="listadodegeneros.html">Rank: ${datos.rank}</a></p>
        <p>Fecha de Lanzamiento: ${datos.release_date}</p>
        <p><audio class="audios" src="${datos.preview}" controls></audio></p>
</div>
</div>
</div>`
})