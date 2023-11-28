let home = '';
let about = '';
let contact = '';

const rootMain = document.getElementById('root');
const url = window.location.origin + "/exercise-files/aften-8";

async function loadPage(page) {
    return fetch(page)
        .then(response => response.text())
        .then(data => {return data;})
        .catch(error => console.log(error));
}

async function loadAllPages() {
    home = await loadPage('templates/home.html');
    about = await loadPage('templates/about.html');
    contact = await loadPage('templates/contact.html');
}

async function main() {
    await loadAllPages();
    rootMain.innerHTML = home;
    routes = {
        '/': home,
        '/contact': contact,
        '/about': about,
    };

    window.onpopstate = () => {
        let lastSlash = window.location.pathname.lastIndexOf("/");
        rootMain.innerHTML = routes[window.location.pathname.substring(lastSlash)];
    };

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            let pathname = link.getAttribute("data-path");
    
            window.history.pushState({}, pathname, url + pathname);
            rootMain.innerHTML = routes[pathname];
        });
    });
};

main();