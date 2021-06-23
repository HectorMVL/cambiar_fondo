document.addEventListener('DOMContentLoaded', function(){
    cambuarFondo();
});

function cambuarFondo (){
    
    let btn_texto = document.querySelectorAll('.boton');
    let btn_fondo = document.querySelectorAll('.boton-bg');
    let contenido = document.querySelectorAll('.contenido-principal');

    btn_texto.forEach( boton => {
        boton.addEventListener('click', function(){
            let claseRemover = contenido[0].classList[2];
            let clase = boton.id;
            
            contenido[0].classList.remove(claseRemover);
            contenido[0].classList.add(clase)

            console.log(contenido[0].classList)
        })
   });

   /*
   btn_fondo.forEach( boton => {
        boton.addEventListener('click', function(){
            let claseRemover = contenido[0].classList[2];
            let clase = boton.id;
            
            contenido[0].classList.remove(claseRemover);
            contenido[0].classList.add(clase)

            console.log(contenido[0].classList)
        })
    });

    */
        
    //});
}