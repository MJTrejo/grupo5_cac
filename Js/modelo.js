/**
 * autor/a: Gustavo salgado     
 * version: 1.0
 * fecha: 11/05/2024
 */

function Producto(nombre, características, precio) {
    this.nombre = nombre;
    this.características = características;
    this.precio = precio;


    this.obtenerFoto = function () {
        document.write('<div class="container_producto">');
        document.write(`<img src="../assets/${this.nombre.toLowerCase()}.png" alt="${this.nombre}">`);
    }

    this.obtenerNombre = function () {
        document.write(`<p>Nombre: ${this.nombre}</p>`);
    }

    this.obtenerCaracterísticas = function () {
        document.write(`<p>Características: ${this.características}</p>`);
    }

    this.obtenerPrecio = function () {
        document.write(`<p>Precio del producto: ${this.precio} pesos</p>`);
        document.write(`</div>`);
    }
}
