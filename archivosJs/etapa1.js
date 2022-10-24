//Presentacion
let preguntaNombre = prompt("Ingrese su nombre")
function saludo(nombre) {
    console.log("¡Hola, ",nombre+"!.","Bienvenido/a a GeT in!.Tienda de ropa online")
}
saludo(preguntaNombre)
//funciones
let resultado
function opcion() {
  resultado = Number(prompt("Elija una opción"))
}
//modelos de zapatillas 
const nike1 = {
    modelo: "Nike Air Max 90",
    precio: 26.500,
    color: "Blanco"
}
const nike2 = {
    modelo: "Nike Huarache",
    precio: 28.000 ,
    color: "Negro"
}
const nike3 = {
    modelo: "Nike Air Force",
    precio: 32.000,
    color: "Blanco"
}
const nike4 = {
    modelo: "Blazer Low 77",
    precio: 32.000,
    color: "Negro"
}
//------------------------------------
//Modelos de buzo
const buzo1 = {
    modelo: "Buzo con estampado Adidas",
    precio: 16.000,
    color: "Azul" 
}
const buzo2 = {
    modelo: "Buzo con estampado Nike",
    precio: 17.000,
    color: "Marron" 
}
const buzo3 = {
    modelo: "Buzo Rip Curl",
    precio: 14.000,
    color: "Negro"
}
const buzo4 = {
    modelo: "Buzo Vans",
    precio: 14.000,
    color: "Blanco"
}



function buzos() {
    console.log("¿Que modelo de buzos desea mirar?")
    console.log("1- Con capucha")
    console.log("2- Sin capucha")
    opcion()
    switch (resultado) {
        case 1:
            console.log("De momento tenemos estos modelos:")
            console.log("1- Con estampado")
            console.log("Proximamente mas modelos")
            console.log("0- Volver")
            opcion()
            if(resultado = 1){
                console.log("En stock se encuentra:")
                console.log(buzo1.modelo)
                console.log("El precio es", buzo1.precio.toFixed(3),"y su color es",buzo1.color)
                console.log("¿Desea comprarlo?")
                console.log("1- Si")
                console.log("2- No")
                opcion()
                if(resultado == 1){
                    console.log("¡Gracias por su compra!")
                }else if(resultado == 2){
                    console.log("No hay problema, la proxima sera.")
                }else{
                    console.log("Error")
                }
            }else if(resultado == 0){
                buzos()
            }else{
                console.log("Error")
            }
            break;
        case 2:
            console.log("De momento tenemos estos modelos:")
            console.log("1- Lisos")
            console.log("Proximamente mas modelos")
            console.log("0- Volver")
            opcion()
            if(resultado == 1){
                console.log("En stock se encuentra:")
                console.log(buzo3.modelo)
                console.log("El precio es", buzo3.precio.toFixed(3),"y su color es",buzo3.color)
                console.log("¿Desea comprarlo?")
                console.log("1- Si")
                console.log("2- No")
                opcion()
                if(resultado == 1){
                    console.log("¡Gracias por su compra!")
                }else if(resultado == 2){
                    console.log("No hay problema, la proxima sera.")
                }else{
                    console.log("Error")
                }
            }else if(resultado == 0){
                buzos()
            }else{
                console.log("Error")
            }
            break;
        default:
            break;
    }
}

//--Menú Principal--
do {
    console.log("¿Que desea mirar?")
    console.log("1- Zapatillas")
    console.log("2- Buzos")
    console.log("0- Salir del menú")
    opcion()
    switch (resultado) {
        case 1:
            zapatillas()
            break;
        case 2:
            buzos()
            break
        case 0:
            alert("Fin del programa")         
        default:
            break;
    }
    if(resultado > 2 || resultado < 0 ){
        console.log("Error")
    }
} while (resultado !== 0);

let respuesta
function zapatillas() {
    console.log("¿Que modelos de zapatillas desea mirar?")
    console.log("1- Deportivas")
    console.log("2- De vestir")
    opcion()
    switch (resultado) {
        //deportivas
        case 1:
            console.log("De momento tenemos estos dos modelos:")
            console.log("1-",nike1.modelo)
            console.log("2-",nike2.modelo)
            console.log("0- Volver")
            opcion()
            //especificaciones
            if(resultado == 1){
                console.log("Este modelo lo tenemos en color:", nike1.color)
                console.log("El precio es:"+ nike1.precio.toFixed(3))
                console.log("1- si")
                console.log("2- no")
                console.log("¿Desea comprarla?")
                opcion()
                if(resultado == 1){
                    console.log("¡Gracias por su compra!")
                }else if(resultado == 2){
                    console.log("No hay problema, la proxima sera")
                }else{
                    console.log("Error")
                }
            //especificaciones    
            }else if(resultado == 2){
                console.log("Este modelo lo tenemos en color:", nike2.color)
                console.log("El precio es:", nike2.precio.toFixed(3))
                console.log("1- si")
                console.log("2- no")
                console.log("¿Desea comprarla?")
                opcion()
                if(resultado == 1){
                    console.log("¡Gracias por su compra!")
                }else if(resultado == 2){
                    console.log("No hay problema, la proxima sera")
                }
                else{
                    console.log("Erorr")
                }         
            }else if(resultado == 0){
                zapatillas()
            }    
            else{
                console.log("Error")
            }
            break;
            //de vestir    
        case 2:
            console.log("De momento tenemos estos dos modelos:")
            console.log("1-",nike3.modelo)
            console.log("2-",nike4.modelo)
            console.log("0- Volver")
            opcion()
            //especificaciones
            if(resultado == 1){
                console.log("Este modelo lo tenemos en color:", nike3.color)
                console.log("El precio es:"+ nike3.precio.toFixed(3))
                console.log("1- si")
                console.log("2- no")
                console.log("¿Desea comprarla?")
                opcion()
                if(resultado == 1){
                    console.log("¡Gracias por su compra!")
                }else if(resultado == 2){
                    console.log("No hay problema, la proxima sera")
                }
                else{
                    console.log("Erorr")
                }    
            }else if(resultado == 2){
                console.log("Este modelo lo tenemos en color:", nike4.color)
                console.log("El precio es:"+ nike4.precio.toFixed(3))
                console.log("1- si")
                console.log("2- no")
                console.log("¿Desea comprarla?")
                opcion()
                if(resultado == 1){
                    console.log("¡Gracias por su compra!")
                }else if(resultado == 2){
                    console.log("No hay problema, la proxima sera")
                }else{
                    console.log("Error")
                }
            }
            break     
        default:
            break;
    }
}
