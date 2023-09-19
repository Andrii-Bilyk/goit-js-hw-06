const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const elements = loginForm.elements;
    const infoObject = {};

    for (let i = 0; i < elements.length; i += 1) {
        const element = elements[i];
        if (element.tagName === 'INPUT') {
            infoObject[element.name] = element.value;
        }
    }

    if (!infoObject.email || !infoObject.password) {
        alert('Всі поля повинні бути заповнені!');
        return;
    }

    console.log(infoObject);
    loginForm.reset(); 
});