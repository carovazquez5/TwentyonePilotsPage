function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('contentContainer').innerHTML = html;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar la página:', error);
        });
}


document.getElementById('pagina1').addEventListener('click', function() {
    loadPage('page1.html');
});

document.getElementById('pagina2').addEventListener('click', function() {
    loadPage('page2.html');
});

document.getElementById('pagina3').addEventListener('click', function() {
    loadPage('page3.html');
});

document.getElementById('pagina4').addEventListener('click', function() {
    loadPage('page4.html');
});

document.getElementById('pagina5').addEventListener('click', function() {
    loadPage('page5.html');
});

document.getElementById('pagina6').addEventListener('click', function() {
    loadPage('page6.html');
});

document.getElementById('pagina7').addEventListener('click', function() {
    loadLyrics();
});


function buscarLyric() {
    const nameSong = document.getElementById('buscarCancion').value;
    fetch(`https://api.lyrics.ovh/v1/Twenty One Pilots/${nameSong}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const parrafo = document.getElementById('contentContainer');
            const { lyrics } = data;
            parrafo.innerHTML = `<p class="parrafo">${lyrics}</p>`;
        })
        .catch(error => {
            console.error('Error al obtener la letra:', error);
            document.getElementById('contentContainer').innerHTML = '<p>No se pudo obtener la letra.</p>';
        });
}

window.onload = function() {
    setTimeout(function() {
      document.getElementById("loaderContainer").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 2000);  // 2000ms = 2 seconds
  };



    // Función para cambiar al modo oscuro
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }




    function toggleMenu() {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('responsive');
    }