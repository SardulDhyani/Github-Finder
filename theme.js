// dark mode click

const dark = document.getElementById('dark');

dark.addEventListener('click', (e) => {
    const event = e.target.checked;
    const doc = document.documentElement.style;

    if(event == true) {
        doc.setProperty('--color-primary', '#ffffff');
        doc.setProperty('--color-secondary', '#115173');
        doc.setProperty('--color-extra', '#ffffff');
        doc.setProperty('--color-white', '#022c43');
        doc.setProperty('--color-black', '#ffffff');
    }
    else {
        doc.setProperty('--color-primary', '#022c43');
        doc.setProperty('--color-secondary', '#053f5e');
        doc.setProperty('--color-extra', '#115173');
        doc.setProperty('--color-white', '#ffffff');
        doc.setProperty('--color-black', '#022c43');
    }
});