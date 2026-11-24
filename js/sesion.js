const usuario = localStorage.getItem("usuarioVivero");

if (usuario) {
    document.getElementById("entrada").hidden = true;
    document.getElementById("listado").hidden = false;
    document.getElementById("salida").hidden = false;
}
if (!usuario && document.body.classList.contains("gestion")) {
    window.location.replace("login.html");
}

document.getElementById("cerrar").addEventListener("click", function () {
    localStorage.removeItem("usuarioVivero");
    window.location.replace("login.html");
});
