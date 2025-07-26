// Modal de amenazas

const modalElement = document.getElementById("modal-1");
if (modalElement) {
    const modal1 = new bootstrap.Modal(modalElement);
    const modalTitulo = document.querySelector(".modal-title");
    const modalCuerpo = document.querySelector(".modal-body p");

    const contenidoModal = [
    { titulo: "Ransomware", contenido: "El ransomware cifra los archivos de un dispositivo infectado utilizando una clave de cifrado que sólo el atacante conoce. Luego, el operador del ransomware exige un rescate a la víctima a cambio de la clave de cifrado necesaria para restaurar sus datos." },
    { titulo: "Cryptojacking", contenido: "El criptojacking se produce cuando los piratas informáticos acceden a un dispositivo de endpoint y utilizan en secreto sus recursos informáticos para minar criptomonedas como bitcoin, ether o monero." },
    { titulo: "Smishing", contenido: "Los ataques smishing son ataques de phishing realizados mediante mensajes de texto SMS. Estos ataques aprovechan las características de los dispositivos móviles, como el uso común de servicios de acortamiento de enlaces (como bit.ly) y la capacidad de pasar el mouse sobre un enlace para verificar su destino en mensajes SMS." }
];

    $(".btn-modal-1").each(function (index) {
        $(this).on("click", function () {
            if (modalTitulo && modalCuerpo) {
                modalTitulo.textContent = contenidoModal[index].titulo;
                modalCuerpo.textContent = contenidoModal[index].contenido;
                modal1.show();
            }
        });
    });
}

//Validacion formulario

const form = document.getElementById("miFormulario");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre.length < 2){
        alert("El nombre no es válido.");
        return;

    }

    if (apellido.length < 2){
        alert("El apellido no es válido.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")){
        alert("El email no es válido.");
        return;
    }

    if (mensaje.length < 2){
        alert("El mensaje es demasiado corto.");
        return;
    }
    else{
    alert("El formulario está correcto.");
    }


});

