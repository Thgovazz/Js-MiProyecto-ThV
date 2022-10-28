let nombre = prompt("Ingrese su nombre")
function saludo(dato) {
    console.log(`¡Hola, ${dato}!.Bienvenido/a a GeT in!.Tienda de ropa online`)
}
saludo(nombre)

const listaProd = [
    {id:1, nombre: "Buzo dino drew", talle:"M", precio: 20000, marca:"Drew", categoria:"Buzo",},
    {id:2, nombre: "Buzo nike air", talle:"XXL", precio: 16000, marca:"Nike", categoria:"Buzo",},
    {id:3, nombre: "Buzo adidas liso", talle:"S", precio: 15000, marca:"Adidas", categoria:"Buzo",},
    {id:4, nombre: "Remera adidas blod", talle:"L", precio: 10000, marca:"Adidas", categoria:"Remera",},
    {id:5, nombre: "Remera drew house", talle:"XL", precio: 15000, marca: "Drew", categoria:"Remera",},
    {id:6, nombre: "Remera jordan 23", talle:"M", precio: 11000, marca:"Nike", categoria:"Remera",}
]

const carrito = []

let resultado
function opcion(){
    resultado = Number(prompt("Elija una opcion"))
}

function remeras() {
    let remerasFilt = listaProd.filter((el)=> el.categoria == "Remera")
    console.log("Estas son las remeras disponibles:")
    remerasFilt.forEach((el) => console.log(`${el.id}- ${el.nombre}`))
    opcion()
    console.log(resultado)
    switch (resultado) {
        case 4:
            console.log(`${remerasFilt[0].nombre} sale ${remerasFilt[0].precio} y su talle es ${remerasFilt[0].talle}`)
            console.log("¿Desea comprarla?")
            console.log("1- Si")
            console.log("2- No")
            opcion()
            if (resultado == 1) {
                carrito.push(remerasFilt[0].precio)
                console.log("Gracias por su compra! Vuelva pronto.")
            }else if(resultado == 2){
                console.log("No hay problema, la proxima sera.")
            }
            break;
        case 5:
            console.log(`${remerasFilt[1].nombre} sale ${remerasFilt[1].precio} y su talle es ${remerasFilt[1].talle}`)
            console.log("¿Desea comprarla?")
            console.log("1- Si")
            console.log("2- No")
            opcion()
            if (resultado == 1) {
                carrito.push(remerasFilt[1].precio)
                console.log("Gracias por su compra! Vuelva pronto.")
            }else if(resultado == 2){
                console.log("No hay problema, la proxima sera.")
            }
            break;
        case 6:
            console.log(`${remerasFilt[2].nombre} sale ${remerasFilt[2].precio} y su talle es ${remerasFilt[2].talle}`)
            console.log("¿Desea comprarla?")
            console.log("1- Si")
            console.log("2- No")
            opcion()
            if (resultado == 1) {
                carrito.push(remerasFilt[2].precio)
                console.log("Gracias por su compra! Vuelva pronto.")
            }else if(resultado == 2){
                console.log("No hay problema, la proxima sera.")
            }
            break;      
        default:
            console.log("Error, elija una de las opciones disponibles.")
            remeras()
            break;
    }
}

function buzos() {
    let buzosFilt = listaProd.filter((el)=> el.categoria == "Buzo")
    console.log("Estos son los buzos disponibles:")
    buzosFilt.forEach((el) => console.log(`${el.id}- ${el.nombre}`))
    opcion()
    console.log(resultado)
    switch (resultado) {
        case 1:
            console.log(`${buzosFilt[0].nombre} sale ${buzosFilt[0].precio} y su talle es ${buzosFilt[0].talle}`)
            console.log("¿Desea comprarlo?")
            console.log("1- Si")
            console.log("2- No")
            opcion()
            if (resultado == 1) {
                carrito.push(buzosFilt[0].precio)
                console.log("Gracias por su compra! Vuelva pronto.")
            }else if(resultado == 2){
                console.log("No hay problema, la proxima sera.")
            }
            break;
        case 2:
            console.log(`${buzosFilt[1].nombre} sale ${buzosFilt[1].precio} y su talle es ${buzosFilt[1].talle}`)
            console.log("¿Desea comprarlo?")
            console.log("1- Si")
            console.log("2- No")
            opcion()
            if (resultado == 1) {
                carrito.push(buzosFilt[1].precio)
                console.log("Gracias por su compra! Vuelva pronto.")
            }else if(resultado == 2){
                console.log("No hay problema, la proxima sera.")
            }
            break;
        case 3:
            console.log(`${buzosFilt[2].nombre} sale ${buzosFilt[2].precio} y su talle es ${buzosFilt[2].talle}`)
            console.log("¿Desea comprarlo?")
            console.log("1- Si")
            console.log("2- No")
            opcion()
            if (resultado == 1) {
                carrito.push(buzosFilt[2].precio)
                console.log("Gracias por su compra! Vuelva pronto.")
            }else if(resultado == 2){
                console.log("No hay problema, la proxima sera.")
            }
            break;     
        default:
            console.log("Error, elija una de las opciones disponibles.")
            buzos()
            break;
    }
}
do {
    console.log("Que desea mirar")
    console.log("1- Remeras")
    console.log("2- Buzos")
    console.log("3- Terminar compra")
    console.log("0- Finalizar programa")
    opcion()
    switch (resultado) {
        case 1:
            remeras()
            break;
        case 2:
            buzos()
            break;
        case 3:
            let precioFinal = carrito.reduce((acumulador, elemento) => acumulador + elemento, 0)
            console.log(`El total de su compra es: ${precioFinal}`)
            break;
        case 0:
            console.log("Programa finalizado.")
            break;
        default:
            console.log("Error, elija una de las opciones disponibles.")
            break;
    }

} while (resultado !== 0);

