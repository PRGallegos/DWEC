document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('limitedTextarea');
    const charCount = document.getElementById('charCount');
    const maxChars = 100;

    textarea.addEventListener('input', function () {
        const remainingChars = maxChars - textarea.value.length;
        charCount.textContent = `Puedes escribir ${remainingChars} caracteres más.`;

        if (remainingChars <= 0) {
            textarea.value = textarea.value.substring(0, maxChars);
            charCount.textContent = 'Has alcanzado el límite de caracteres.';
        }
    });
});