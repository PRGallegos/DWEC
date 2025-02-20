document.addEventListener("DOMContentLoaded", () => {

    // Constantes
    const textInput = document.getElementById("text-input");
    const wordCountDisplay = document.getElementById("word-count");
    const addPhraseButton = document.getElementById("add-phrase");
    const finishButton = document.getElementById("finish");
    const phrasesContainer = document.getElementById("phrases-container");
    const summaryContainer = document.getElementById("summary");

    // Variables
    let totalPhrases = 0;
    let totalWords = 0;
    let totalLetters = 0;
    const colors = ["red", "blue", "green", "purple", "orange"];

    // Eventos
    textInput.addEventListener("input", () => {
        const wordCount = textInput.value.trim().split(/\s+/).filter(w => w !== "").length;
        wordCountDisplay.textContent = wordCount;
    });

    addPhraseButton.addEventListener("click", () => {
        const phrase = textInput.value.trim();
        if (phrase === "") return;

        const words = phrase.split(/\s+/).filter(w => w !== "").length;
        const letters = phrase.replace(/\s+/g, "").length;

        totalPhrases++;
        totalWords += words;
        totalLetters += letters;

        const phraseElement = document.createElement("p");
        phraseElement.classList.add("phrase");
        phraseElement.style.color = colors[totalPhrases % colors.length];
        phraseElement.innerHTML = `${phrase} <strong>(${words} palabras)</strong>`;

        phrasesContainer.appendChild(phraseElement);
        textInput.value = "";
        wordCountDisplay.textContent = "0";
    });

    finishButton.addEventListener("click", () => {
        const summary = `
            <p>Total de frases: ${totalPhrases}</p>
            <p>Total de palabras: ${totalWords}</p>
            <p>Total de letras: ${totalLetters}</p>
        `;
        summaryContainer.innerHTML = summary;
        addPhraseButton.disabled = true;
    });
});
