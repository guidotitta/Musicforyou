fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0')
.then(function(response){
    return response.json()
})
.then(function(datos){
    console.log(datos);
    
    
        let artistas = datos.artists.data
        let contenedorArtistas = document.querySelector(".container");
        
        for (const artista of artistas){
            
        contenedorArtistas.innerHTML += `
        <div>
            <div class="container-artistas">
                    <a href="detalleArtista.html?id=${artista.id}">
                        <img src="${artista.picture_big}" alt="">
                    </a>     
                    <a class='container-artistas.a' href="detalleArtista.html?id=${artista.id}">${artista.name}
                    </a>
            </div>
        </div>
        `
}
        let albums = datos.albums.data
        let contenedorAlbumes = document.querySelector(".container-alb");

        for (const album of albums){
    
        contenedorAlbumes.innerHTML += `
        <div>
            <div class="container-album">
                    <a href="detalleAlbum.html?id=${album.id}">
                        <img src="${album.cover_big}" alt="">
                    </a>

                    <a class='container-album.a' href="detalleTrack.html?id=${album.id}">${album.title}
                    </a>

                    <a href="detalleAlbum.html?id=${album.artist.id}">${album.artist.name}
                    </a>
            </div>
        </div>
        `
}

        let tracks = datos.tracks.data
        let contenedorTracks = document.querySelector(".container-cancion")

        for (const track of tracks) {

        contenedorTracks.innerHTML += `
        <div>
            <div class="container-track">
                    <a href="detalleTrack.html?id=${track.id}">
                        <img src="${track.album.cover_big}" alt="">
                    </a>
                    
                    <a href="detalleTrack.html?id=${track.id}">${track.title_short}
                    </a>

                    <a href="detalleTrack.html?id=${track.artist.id}">${track.artist.name}
                    </a>

                    <div class="container-track.a">Ranking: ${track.rank}</div>
            </div>
        </div>
        `
}

})