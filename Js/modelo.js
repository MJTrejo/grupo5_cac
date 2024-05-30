/**
 * autor/a: Gustavo salgado     
 * version: 1.0 (final)
 * fecha: 11/05/2024
 */

function Producto(nombre, caracteristicas, precio) {
    this.nombre = nombre;
    this.caracteristicas = caracteristicas;
    this.precio = precio;


    this.obtenerFoto = function () {
        document.write('<div class="container_producto">');
        document.write(`<img src="../assets/images/productos/${this.nombre.toLowerCase()}.jpg" alt="${this.nombre}">`);
    }

    this.obtenerNombre = function () {
        document.write(`<p>${this.nombre}</p>`);
    }

    this.obtenerCaracterísticas = function () {
        document.write(`<p>${this.caracteristicas}</p>`);
    }

    this.obtenerPrecio = function () {
        document.write(`<p>$${this.precio}</p>`);
        document.write(`</div>`);
    }
}
