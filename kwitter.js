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

