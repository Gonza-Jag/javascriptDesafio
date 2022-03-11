const herramienta1 = new Herramienta("Martillo", 400, 20, "Mango de goma")
const herramienta2 = new Herramienta("Pinza", 300, 15, "Pico de loro")
const herramienta3 = new Herramienta("Lata de barniz", 450, 5, "2 Litros")
const herramienta4 = new Herramienta("Lijas", 380, 20, "3 Unidades")

function tablaDeHerramientas(){
    herramientas.push(herramienta1)
    herramientas.push(herramienta2)
    herramientas.push(herramienta3)
    herramientas.push(herramienta4)
    console.info("Tabla de herramientas:", herramientas.length, "diferentes.")
}

function filtrarHerramientas() {
    const resultado = prompt("Ingrese la herramienta que busca:")
    let resultadoFiltro = herramientas.filter((herra)=> herra.nombre == resultado)
    console.table(resultadoFiltro)
}