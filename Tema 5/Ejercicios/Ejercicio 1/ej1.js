function actualizarContador() {
    const textarea = document.getElementById("miTextarea");
    const contador = document.getElementById("contador");
    const caracteresRestantes = 100 - textarea.value.length;
    contador.textContent = `Caracteres restantes: ${caracteresRestantes}`;
}