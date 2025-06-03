document.getElementById('textarea').addEventListener('input', function () {
    const maxLength = 100;
    const remaining = maxLength - this.value.length;
    document.getElementById('charCount').textContent = `Caracteres restantes: ${remaining}`;
});