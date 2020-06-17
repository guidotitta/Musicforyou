//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var artistId = objetoQuery.get('id');
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+artistId)
.then(function(response){
    return response.json()
})
.then(function(datos){
    console.log(datos);
    let contenedorartista = document.querySelector('#main')
    contenedorartista.innerHTML=` <h2>
    DETALLE ARTISTA
</h2> 
<div id='track'>
    <div><img class='header_track' src="${datos.picture_xl}" alt="duki"></div>
    <div class='track1'>
        <h3>${datos.name}</h3>
        <h4>TOP 5 HITS</h4>                       
    </div>
</div>
    
  `
    
      
})
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+artistId+'/top')
.then(function(response){
    return response.json()
})
.then(function(canciones){
    console.log(canciones);
    let contenedortop = document.querySelector('.track1')
    let tracks= canciones.data
for (const top of tracks) {
    contenedortop.innerHTML+=`
       
<p><a href="detalleTrack.html">. ${top.title}</a></p>



`
    
}


  

    
  
    
      
})