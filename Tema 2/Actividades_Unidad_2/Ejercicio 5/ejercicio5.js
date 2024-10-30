function mostrarInfoEnlaces() {
    let enlaces = document.getElementsByTagName("a");
    let totalEnlaces = enlaces.length;
    let enlacesPrueba = Array.from(enlaces).filter(enlace => enlace.href === "http://prueba/").length;
    let parrafo3Enlaces = document.getElementById("parrafo3").getElementsByTagName("a").length;

    document.getElementById("resultado").innerHTML = `
        <p>Número de enlaces en la página: ${totalEnlaces}</p>
        <p>Número de enlaces que enlazan a "http://prueba": ${enlacesPrueba}</p>
        <p>Número de enlaces en el tercer párrafo: ${parrafo3Enlaces}</p>
    `;
}
