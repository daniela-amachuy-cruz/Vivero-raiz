if (usuario) {
    window.location.replace("listado.html");
}

document.getElementById("login").addEventListener("submit", function (evento) {
    evento.preventDefault();
    const correo = document.getElementById("email").value.trim();
    const clave = document.getElementById("password").value;

    if (correo === "dani@gmail.com" && clave === "istea2026") {
        localStorage.setItem("usuarioVivero", "Dani");
        window.location.href = "listado.html";
    } else {
        document.getElementById("mensaje").textContent = "Correo o contraseña incorrectos.";
    }
});
