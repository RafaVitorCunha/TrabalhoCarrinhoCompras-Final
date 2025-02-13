function carregaArquivo(container, arquivo) {
    fetch(arquivo)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${arquivo}: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            let element = document.getElementById(container);
            if (element) {
                element.innerHTML = html;
            } else {
                console.warn(`Elemento ${container} não encontrado.`);
            }
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", function () {
    carregaArquivo('container-sidebar', 'sidebar.html');
    carregaArquivo('container-navbar', 'navbar.html');
});


    document.getElementById("profileImg").addEventListener("click", function () {
        let profileCard = document.getElementById("profileCard");
        profileCard.classList.toggle("d-none");
    });

    // Esconder o card ao clicar fora dele
    document.addEventListener("click", function (event) {
        let profileCard = document.getElementById("profileCard");
        let profileImg = document.getElementById("profileImg");

        if (!profileCard.contains(event.target) && event.target !== profileImg) {
            profileCard.classList.add("d-none");
        }
    });

