function actualizarReloj() {
    // Obtenemos fecha y hora actual
    const ahora = new Date();

    // Tomamos horas, minutos y segundos
    let h = ahora.getHours().toString().padStart(2, "0");
    let m = ahora.getMinutes().toString().padStart(2, "0");
    let s = ahora.getSeconds().toString().padStart(2, "0");

    // Escribimos en el HTML
    document.getElementById("hora").textContent = `${h}:${m}:${s}`;

    
    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1;
    const año = ahora.getFullYear();

    document.getElementById("fecha").textContent =
        `${dia}/${mes}/${año}`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj(); // para que no tarde 1 segundo en aparecer
