let home = '';
let about = '';
let contact = '';

const rootMain = document.getElementById('root');

async function loadPage(page) {
    const response = await fetch(page);
    const resHtml = await response.text();
    return resHtml;
}

async function loadAllPages() {
    home = await loadPage('home.html');
    about = await loadPage('about.html');
    contact = await loadPage('contact.html');
}

const main = async () => {
    await loadAllPages();
    rootMain.innerHTML = home;
    routes = {
        '/': home,
        '/contact': contact,
        '/about': about,
    };

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
    
            let pathname = link.getAttribute("data-path");
    
            window.history.pushState({}, pathname, window.location.origin + pathname);
            rootMain.innerHTML = routes[pathname];
        });
    });
};

main();