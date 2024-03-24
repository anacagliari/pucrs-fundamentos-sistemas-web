function loadView(view) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('main-content').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', `views/${view}.html`, true);
    xhttp.send();
}

function initRouter() {
    const hash = window.location.hash;
    if (hash === '' || hash === '#/') {
        loadView('home');
    } else if (hash === '#/servicos') {
        loadView('servicos');
    } else if (hash === '#/produtos') {
        loadView('produtos');
    } else if (hash === '#/login') {
        loadView('login');
    } else if (hash === '#/cadastrar-usuario') {
        loadView('cadastrar-usuario');
    } else if (hash === '#/area-usuario') {
        loadView('area-usuario');
    }
}

window.addEventListener('load', initRouter);
window.addEventListener('hashchange', initRouter);
