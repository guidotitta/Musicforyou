fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists')
.then(function(response){
    return response.json()
})
.then(function(datos){
    console.log(datos);
    let conteiner = document.querySelector("#genero")
    for (const playlist of datos.data) {
        conteiner.innerHTML += `<div class="producto">
        <a href="detalleTrack.html"><img src="${playlist.picture_big}" alt=""></a> 
        <h3>${playlist.title}</h3>
    </div>`
        
    }
})