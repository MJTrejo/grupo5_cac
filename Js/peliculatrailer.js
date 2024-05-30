/**
 * autor/a: Gustavo salgado     
 * version: 1.0 (final)
 * fecha: 11/05/2024
 */

const peliculas = document.querySelectorAll('.peli-cont');
        const trailerContainer = document.getElementById('trailer-container');
        const iframe = trailerContainer.querySelector('iframe');
        const closeTrailerButton = document.getElementById('close-trailer');

        peliculas.forEach(pelicula => {
            pelicula.addEventListener('click', () => {
                const trailerUrl = pelicula.getAttribute('data-trailer');
                iframe.src = trailerUrl;
                trailerContainer.style.display = 'block';
            });
        });

        closeTrailerButton.addEventListener('click', () => {
            trailerContainer.style.display = 'none';
            iframe.src = '';
        });