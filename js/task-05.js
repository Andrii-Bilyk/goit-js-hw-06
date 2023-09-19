const refs = {
    inputText: document.querySelector('#name-input'),
    outputSpan: document.querySelector('#name-output'),
};

refs.inputText.addEventListener('input', () => {
    const inputValue = refs.inputText.value.trim();
    refs.outputSpan.textContent = inputValue || 'Anonymous';
});