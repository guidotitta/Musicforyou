fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/')
.then(function(response){
    return response.json()
})
.then(function(datos){
    console.log(datos);
    let generos= datos.data 
    let contenedorgeneros=document.querySelector('#genero')
    for (const genero of generos) {
        contenedorgeneros.innerHTML+=`
        <div class="producto">
                    <h3> ${genero.name} </h3>
                    <a href="detallegeneros.html?id=${genero.id}"><img src="${genero.picture_big}" alt=""></a> 
                </div>
        
        
        
        
        `
        
    }
    
    
      
})