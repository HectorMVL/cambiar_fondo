document.addEventListener('DOMContentLoaded', function(){
    cambuarFondo();
});

function cambuarFondo (){
    
    let btn_texto = document.querySelectorAll('.boton');
    let btn_fondo = document.querySelectorAll('.boton-bg');
    let contenido = document.querySelectorAll('.contenido-principal');
    let contenido_texto = document.querySelectorAll('.contenido-principal .contenedor');
   
    btn_texto.forEach( boton => {
        boton.addEventListener('click', function(){
            let clase = boton.id;
            
            contenido_texto[0].id = clase;

            console.log(contenido_texto[0])
        })
   });

   
   btn_fondo.forEach( boton => {
        boton.addEventListener('click', function(){
           let clase = boton.id;
            
            contenido[0].id = clase;

            console.log(contenido[0])
        })
    });

    
        
    //});
}