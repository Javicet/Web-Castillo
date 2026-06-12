
// 1. Configuración de Firebase (la misma que usas en Kwitter)
const firebaseConfig = {
  apiKey: "AIzaSyDWiuNxHcfezK0_7_tn4gcgXZ3h198ABN4",
  authDomain: "kwitter-c7627.firebaseapp.com",
  databaseURL: "https://kwitter-c7627-default-rtdb.firebaseio.com",
  projectId: "kwitter-c7627",
  storageBucket: "kwitter-c7627.firebasestorage.app",
  messagingSenderId: "267279462962",
  appId: "1:267279462962:web:d448b14ae5e12f0e3b822b"
};

// 2. Inicializar la app
firebase.initializeApp(firebaseConfig);

// 3. Obtener el usuario de localStorage (el que viene de Kwitter)
const user_name = localStorage.getItem("user_name");

// Ejemplo: Si quieres mostrar un saludo al usuario en tu página de Mueblería
// Asegúrate de tener un <h3 id="user_welcome"></h3> en tu indexM.html
if (user_name) {
    console.log("Usuario identificado: " + user_name);
    // document.getElementById("user_welcome").innerHTML = "¡Bienvenido, " + user_name + "!";
}

// 4. Función para guardar un pedido en Firebase
function registrarPedido(carrito) {
    let usuario = localStorage.getItem("user_name") || "Invitado";
    
    // Guardamos en una rama llamada "Pedidos" en tu base de datos
    firebase.database().ref("Pedidos/").push({
        usuario: usuario,
        productos: carrito,
        fecha: new Date().toString()
    });
    
    alert("¡Pedido registrado exitosamente en Firebase!");
}