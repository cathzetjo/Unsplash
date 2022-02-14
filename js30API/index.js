console.log('API');

let switcher = 0;

function changeTheme() {
    const allElements = document.documentElement;
    if (!switcher) {
        allElements.setAttribute('data-theme', 'dark');
        switcher = 1;
    } else {
        allElements.setAttribute('data-theme', 'light');
        switcher = 0;
    }
}