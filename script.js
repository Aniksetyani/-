const words = [
    { image: 'images/ikan.jpg', word: 'سمك' },
    { image: 'images/car.jpg', word: 'سيارة' },
    { image: 'images/apple.jpg', word: 'تفاحة' }
];

let currentWordIndex = 0;

function loadWord() {
    const wordData = words[currentWordIndex];
    const imgElement = document.getElementById("wordImage");
    const resultElement = document.getElementById("result");
    imgElement.src = wordData.image;
    document.getElementById("answerInput").value = "";
    resultElement.textContent = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.trim();
    const correctAnswer = words[currentWordIndex].word;
    const resultElement = document.getElementById("result");

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "أحسنت! الإجابة صحيحة!";
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(loadWord, 1000);
    } else {
        resultElement.textContent = "إجابة خاطئة، حاول مرة أخرى!";
    }
}

window.addEventListener("load", loadWord);