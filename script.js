document.addEventListener('DOMContentLoaded', () => {
    const assemblyArea = document.getElementById('assemblyArea');
    const okrContainer = document.getElementById('okrDisplay');
    const checkButton = document.getElementById('checkButton');

    const okrExample = "Achieve product market fit".split(' ');
    let scrambledOkr = shuffleArray(okrExample.slice());

    // Hold the elements themselves to append them back if needed
    let wordElements = [];

    scrambledOkr.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.textContent = word;
        wordElement.classList.add('okr-word');
        wordElement.draggable = true;
        wordElement.addEventListener('dragstart', handleDragStart);
        okrContainer.appendChild(wordElement);
        wordElements.push(wordElement);
    });

    checkButton.addEventListener('click', checkSentence);

    function handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.textContent);
    }

    assemblyArea.addEventListener('dragover', event => {
        event.preventDefault();
    });

    assemblyArea.addEventListener('drop', event => {
        event.preventDefault();
        if (event.target === assemblyArea || event.target.classList.contains('okr-word')) {
            const data = event.dataTransfer.getData('text/plain');
            const draggedElement = wordElements.find(element => element.textContent === data);
            if (draggedElement) {
                assemblyArea.appendChild(draggedElement);
            }
        }
    });

    function checkSentence() {
        let currentOrder = Array.from(assemblyArea.children).map(e => e.textContent.trim());
        if (arraysEqual(currentOrder, okrExample)) {
            alert('Correct!');
            
            // Move all elements back to the okrContainer in their original scrambled order
            wordElements.forEach(element => okrContainer.appendChild(element));
            
        } else {
            alert('Incorrect, try again!');
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function arraysEqual(a, b) {
        return a.length === b.length && a.every((val, index) => val === b[index]);
    }
});