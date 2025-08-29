let availableNumbers = Array.from({ length: 16 }, (_, i) => i + 1);

const chooseBtn = document.getElementById('chooseBtn');
const resultDiv = document.getElementById('result');
const infoDiv = document.getElementById('info');

function chooseTwoRandomNoRepeat() {
    if (availableNumbers.length < 2) {
        return null;
    }

    const firstIndex = Math.floor(Math.random() * availableNumbers.length);
    const firstNumber = availableNumbers[firstIndex];
    availableNumbers.splice(firstIndex, 1);

    const secondIndex = Math.floor(Math.random() * availableNumbers.length);
    const secondNumber = availableNumbers[secondIndex];
    availableNumbers.splice(secondIndex, 1);

    return [firstNumber, secondNumber];
}

chooseBtn.addEventListener('click', () => {
    const chosen = chooseTwoRandomNoRepeat();

    if (!chosen) {
        infoDiv.textContent = 'Endi sonlar qolmadi, hammasi tanlab bo‘lingan.';
        chooseBtn.disabled = true;
        return;
    }

    resultDiv.textContent += `${chosen[0]} VS ${chosen[1]}\n`;
    infoDiv.textContent = `Qolgan sonlar soni: ${availableNumbers.length}`;
});
