function Herramienta(nombre, precio, stock, caract){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.caract = caract
    this.nombreYprecio = function() {
        console.log("Artículo", this.nombre.toUpperCase(), "Precio" , this.precio, "pesos.")
    }
}
