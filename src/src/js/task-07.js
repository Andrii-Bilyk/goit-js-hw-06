const refs = {
    rangeEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),
};

refs.rangeEl.addEventListener('input', () => {
    const fontSize = refs.rangeEl.value + 'px';
    refs.spanEl.style.fontSize = fontSize;
});