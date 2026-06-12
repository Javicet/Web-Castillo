const musica = new Audio("Strad.mp3");
  musica.loop = true;
  musica.volume = 0.5;
function sonido_boton(){
  const button_sound = new Audio("click.wav");
  button_sound.volume = 0.5;
button_sound.play()
}
function menusong(){
  if(musica.paused){
    musica.play();
  }else{
    musica.pause();
 }
}
function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}




function generarEstrellas() {
    const contenedor = document.createElement('div');
    contenedor.id = "fondo-estrellas";
    document.body.appendChild(contenedor);

    for (let i = 0; i < 15; i++) { // Cambia 15 por la cantidad de estrellas que quieras
        let estrella = document.createElement('img');
        estrella.src = "luz.gif";
        estrella.className = "estrella";
        
        // Posición aleatoria
        estrella.style.top = Math.random() * 100 + "%";
        estrella.style.left = Math.random() * 100 + "%";
        
        // Retraso aleatorio para que no parpadeen todas al mismo tiempo
        estrella.style.animationDelay = Math.random() * 3 + "s";
        
        // Color aleatorio (usamos filtro de CSS para cambiar el color del GIF)
        let color = Math.random() * 360;
        estrella.style.filter = `hue-rotate(${color}deg)`;
        
        contenedor.appendChild(estrella);
    }
}

// Ejecutar cuando la página cargue
window.onload = generarEstrellas;