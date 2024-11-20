function analizarTexto() {
    let texto = document.getElementById("texto").value;

    let lineas = texto.split("\n").length;
    let frases = texto.split(".").filter(frase => frase.trim() !== "").length;
    let primeros10 = texto.slice(0, 10);
    let mayusculas = texto.toUpperCase();
    let ocurrenciasAlumno = (texto.match(/alumno|alumna/gi) || []).length;
    let textoModificado = texto.replace(/alumno|alumna/gi, "MiNombre");

    document.getElementById("resultado").innerHTML = `
        <p>Número de líneas: ${lineas}</p>
        <p>Número de frases: ${frases}</p>
        <p>Primeros 10 caracteres: ${primeros10}</p>
        <p>Texto en mayúsculas: ${mayusculas}</p>
        <p>Ocurrencias de "alumno/alumna": ${ocurrenciasAlumno}</p>
        <p>Texto modificado: ${textoModificado}</p>
    `;
}
