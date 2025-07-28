// Modal de amenazas.html

const modalAmenaza = document.getElementById("modal-1");
if (modalAmenaza) {
    const modal1 = new bootstrap.Modal(modalAmenaza);
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
};

//Validacion formulario consejos.html

const form = document.getElementById("miFormulario");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre.length < 2) {
        alert("El nombre no es válido.");
        return;

    }

    if (apellido.length < 2) {
        alert("El apellido no es válido.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("El email no es válido.");
        return;
    }

    if (mensaje.length < 2) {
        alert("El mensaje es demasiado corto.");
        return;
    }
    else {
        alert("El formulario está correcto.");
    }


});

// Modal consejos.html

const modalQuiz = document.getElementById("modal-2");
const boton_siguiente = document.getElementById("btn-siguiente");

if (modalQuiz && boton_siguiente) {
    const modal2 = new bootstrap.Modal(modalQuiz);

    const preguntas = [
        {
            pregunta: "Un virus que accede a tu ordenador y cifra todos los ficheros, dejando el ordenador inutilizable, para después pedir una cantidad de dinero a cambio de desbloquearlo, ¿Cómo se llama?",
            opciones: ["Spyware", "Phishing", "Ransomware"],
            respuesta: 2,
            tip: "Spyware es un tipo de software malicioso que se instala en un dispositivo sin el consentimiento del usuario y se dedica a espiar o recopilar información personal y Phishing es un tipo de amenaza donde el atacante se hace pasar por una persona o empresa de confianza para robar información personal o datos bancarios."
        },
        {
            pregunta: "Hay una emergencia y necesito acceder a Internet conectándome a una red wifi pública de una cafetería. ¿Cuál de estas técnicas puede ayudar a mejorar la privacidad de la navegación?",
            opciones: ["Tener una copia de seguridad de los archivos importantes", "Usar una VPN", "Cifrar mi dispositivo."],
            respuesta: 1,
            tip: "Usar una VPN (Red Privada Virtual) en redes públicas te protege al cifrar tu conexión, ocultando tu actividad de otros usuarios en la misma red."
        },
        {
            pregunta: "He recibido un mensaje en cadena a través de Whatsapp, que alerta de que un virus puede tomar el control de mi dispositivo si descargo cualquier archivo. ¿Qué debo hacer?",
            opciones: ["Contrasto la información del mensaje con fuentes fiables y no lo reenvío a nadie para cortar la cadena", "Desinstalo la aplicación y vuelvo a descargarla.", "Como estoy muy consciente sobre la ciberseguridad, reenvío el mensaje a todos mis contactos para que estén alerta."],
            respuesta: 0,
            tip: "Reenviar ese tipo de mensaje puede propagar una estafa o virus y hacer clic puede llevarte a sitios falsos o descargar malware sin saberlo"
        }
    ];

    let pregunta = 0;
    let puntos = 0;
    let inputRespuesta = [];

    function startQuiz() {
        pregunta = 0;
        puntos = 0;
        inputRespuesta = [];
        renderPreguntas();
        boton_siguiente.classList.remove("oculto");
    };

    function renderPreguntas() {
        const p = preguntas[pregunta];
        const contenido = document.getElementById("quiz");
        let contenido_pregunta = `<h6>${p.pregunta}</h6>`;

        p.opciones.forEach((opcion, i) => {
            contenido_pregunta +=
                `<div class="form-check text-start">
                    <input class="form-check-input" type="radio" value="${i}" id="opcion${i}" name="p"></input>
                    <label class="form-check-label" for="opcion${i}">${opcion}</label>
                </div>`;
        });

        contenido.innerHTML = contenido_pregunta;
    };

    document.getElementById("btn-siguiente").addEventListener("click", () => {
        const seleccion = document.querySelector('input[name="p"]:checked');
        if (seleccion) {
            const seleccionValor = parseInt(seleccion.value);
            if (seleccionValor === preguntas[pregunta].respuesta) puntos++;
            inputRespuesta.push(seleccionValor);
        } else {
            inputRespuesta.push(null); // No respondió
        }

        pregunta++;
        if (pregunta < preguntas.length) {
            renderPreguntas();
        } else {
            mostrarResultado();
        }
    });

    function mostrarResultado() {
        const contenido = document.getElementById("quiz");
        let resultado = `<h5>¡Test Finalizado!</h5><p>Tu puntaje: ${puntos} de ${preguntas.length}</p><br><h5>Resumen:</h5>`;

        preguntas.forEach((p, index) => {
            resultado += `
            <p><strong>${index + 1}. ${p.pregunta}</strong></p>
            <p>Respuesta correcta: ${p.opciones[p.respuesta]}</p>
            <p>Tip: ${p.tip}</p><hr>
        `;
        });

        contenido.innerHTML = resultado;
        boton_siguiente.classList.add("oculto");
    }

    $(".btn-modal-2").click(function () {
        modal2.show();
        startQuiz();
    });

    modalQuiz.addEventListener('hidden.bs.modal', () => {
        const btn_modal = document.querySelector('.btn-modal-2');
        if (btn_modal) btn_modal.focus();
    });


};
