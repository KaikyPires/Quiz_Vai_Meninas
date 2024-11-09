const input = document.getElementById('textInput');
const caret = document.getElementById('caret');

input.addEventListener('input', updateCaretPosition);
input.addEventListener('click', updateCaretPosition);
input.addEventListener('keydown', updateCaretPosition);
input.addEventListener('focus', showCaret);
input.addEventListener('blur', hideCaret);

function updateCaretPosition() {
    if (input === document.activeElement) { // Verifica se o input está focado
        const caretPos = getCaretPosition();
        const fontSize = window.getComputedStyle(input).fontSize;
        const fontSizePx = parseInt(fontSize, 10);
        const inputPaddingLeft = parseInt(window.getComputedStyle(input).paddingLeft, 10);
        const inputPaddingTop = parseInt(window.getComputedStyle(input).paddingTop, 10);

        // Ajusta a posição do caret com base na posição do cursor
        caret.style.left = `${caretPos + inputPaddingLeft}px`;
        caret.style.top = `${inputPaddingTop + fontSizePx + 2}px`;
    }
}

function showCaret() {
    caret.style.display = 'inline'; // Mostra o caret
    updateCaretPosition(); // Atualiza a posição do caret ao ganhar o foco
}

function hideCaret() {
    caret.style.display = 'none'; // Oculta o caret
}

function getCaretPosition() {
    let caretOffset = 0;
    if (document.selection) {
        input.focus();
        const sel = document.selection.createRange();
        sel.moveStart('character', -input.value.length);
        caretOffset = sel.text.length;
    } else if (input.selectionStart || input.selectionStart === '0') {
        caretOffset = input.selectionStart;
    }

    const span = document.createElement('span');
    span.textContent = input.value.substring(0, caretOffset);
    span.style.position = 'absolute';
    span.style.visibility = 'hidden';
    span.style.fontSize = window.getComputedStyle(input).fontSize;
    span.style.whiteSpace = 'pre';
    span.style.fontFamily = window.getComputedStyle(input).fontFamily;
    document.body.appendChild(span);
    const caretPos = span.offsetWidth;
    document.body.removeChild(span);
    return caretPos;
}
document.getElementById('startButton').addEventListener('click', function() {
    window.location.href = 'escolha.html';
  });