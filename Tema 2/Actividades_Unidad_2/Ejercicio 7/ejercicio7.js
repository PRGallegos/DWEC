function tirarDados() {

    // Crear intervalo para tirar dados
    let intervalo = setInterval(() => {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dado1").textContent = dado1; // Mostrar dado 1
        document.getElementById("dado2").textContent = dado2; // Mostrar dado 2
    }, 100);

    // Aninmación de los dados
    setTimeout(() => {
        clearInterval(intervalo);
    }, 5000);  // Detener después de 5 segundos
}
