//lista de productos
const productos = [
    {id:1, nombre: "SHREDDER SURF", precio:120000, stock:3, categoria:"tabla de surf", imgUrl:"./multimedia/tabla1.png"}, 
    {id:2, nombre: "E2 SURF B4BC", precio:115000, stock:3, categoria:"tabla de surf", imgUrl:"./multimedia/tabla2.png"}, 
    {id:3, nombre: "EOS ENTERO", precio:69000, stock:3, categoria:"traje de surf", imgUrl:"./multimedia/traje1.jpg"}, 
    {id:4, nombre: "PRIME ENTERO", precio:97000, stock:3, categoria:"traje de surf", imgUrl:"./multimedia/traje2.jpg"}, 
    {id:5, nombre: "FUNDA SURF REFLEX", precio:29000, stock:3, categoria:"accesorios", imgUrl:"./multimedia/accesorio1.jpg"}, 
    {id:6, nombre: "QUILLA FLEXIBLE", precio:40000, stock:3, categoria:"accesorios", imgUrl:"./multimedia/accesorio2.jpg"}
]

let productoContainer = document.getElementById("productosContainer")

renderizarProductos()

let busqueda = document.getElementById("busquedaProduc")

//busco el producto y llamo a la funcion renderizarProductos
//para que solo muestre el o los productos filtrados
busqueda.oninput = () => {
  let productosFiltrados = productos.filter(producto => producto.nombre.includes(busqueda.value.toUpperCase()))
  renderizarProductos(productosFiltrados)

  //buscamos el id del producto clickeado
  for (const boton of botones) {
    boton.onclick = (e) => {
      let productoBuscado = productos.find(producto => producto.id == e.target.id)

      //se verifica que el producto no este repetido en carritoGuardado
      //si lo esta aumenta el numero de unidades y el subtotal 
      //si no esta se agrega normalmente  
      let posicionProductoEnCarrito = carritoGuardado.findIndex(producto => producto.id == productoBuscado.id)
      
      if (posicionProductoEnCarrito != -1) {
        carritoGuardado[posicionProductoEnCarrito].unidades++ 
        carritoGuardado[posicionProductoEnCarrito].subtotal = carritoGuardado[posicionProductoEnCarrito].precioUnidad * carritoGuardado[posicionProductoEnCarrito].unidades
      } else {
        carritoGuardado.push({ id: productoBuscado.id, nombre: productoBuscado.nombre, precioUnidad: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio })
      }
      //los productos agregados se guardan en el localStorage
      localStorage.setItem('carrito', JSON.stringify(carritoGuardado))
      renderizarCarrito()
    }
  }
}

//esta funcion chequea si hay algun producto filtrado y si no lo hay
//renderiza  todos los de la lista de productos 
function renderizarProductos(productoFiltrado){
  let productosARenderizar = productos
  if(productoFiltrado){
    productosARenderizar = productoFiltrado
  }
  productoContainer.innerHTML = ''
  for (const { nombre, imgUrl, precio, id } of productosARenderizar) {
    let tarjetaProducto = document.createElement('article')
    tarjetaProducto.className = 'producto'
    tarjetaProducto.innerHTML = `
      <div><img src=${imgUrl} class="imgProducTien"></div>
      <div><h2 class="productoH2">${nombre}</h2></div>
      <div><p class="productoP">$${precio}</p></div>
      <div><button class="boton" id=${id}>Agregar al carrito</button></div>
    `
    productoContainer.append(tarjetaProducto)
  }
}

let botones = document.getElementsByClassName('boton')
let carrito = document.getElementById('carritoSection')
carrito.className = "esconder"

//si en localStorage hay algun produto guardado el carrito vacio toma esos productos.
let carritoGuardado =  JSON.parse(localStorage.getItem('carrito')) || []


//renderizar carrito funcion llamada para actualizar los productos 
renderizarCarrito()
//funcion botones
for (const boton of botones) {
  boton.onclick = (e) => {
    let productoBuscado = productos.find(producto => producto.id == e.target.id)

    let posicionProductoEnCarrito = carritoGuardado.findIndex(producto => producto.id == productoBuscado.id)

    if (posicionProductoEnCarrito != -1) {
      carritoGuardado[posicionProductoEnCarrito].unidades++ 
      carritoGuardado[posicionProductoEnCarrito].subtotal = carritoGuardado[posicionProductoEnCarrito].precioUnidad * carritoGuardado[posicionProductoEnCarrito].unidades
    } else {
      carritoGuardado.push({ id: productoBuscado.id, nombre: productoBuscado.nombre, precioUnidad: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio })
    }
    
    Toastify({
      text: "Se agrego correctamente al carrito",
      duration: 2000,
      style: {
        background: "linear-gradient(to right, #789c94, #677575)",
      }
    }).showToast();

    localStorage.setItem('carrito', JSON.stringify(carritoGuardado))
    renderizarCarrito()
  }
}
//esta funcion limpia el localStorage y el carritoGuardado para simular la finalizacion de una compra
function vaciarLosCarritos() {
  if(carritoGuardado.length == 0){
    Toastify({
      text: "Ups, primero debe agrega un producto.",
      duration: 2000,
      style: {
        background: "linear-gradient(to right, #789c94, #677575)",
      }
    }).showToast();
  }else{
    localStorage.clear()
    carritoGuardado = []
    let total = 0
    carrito.innerHTML = `
     <article class="itemCarrito">
       <p class="titleItem">Nombre</p>
       <p class="titleItem">PrecioUnidad</p>
       <p class="titleItem">Unidades</p>
       <p class="titleItem">Subtotal</p>
     </article>
     <div class="totalCarrito">
       <h3 class="titleTotalCarrito">total: ${total}</h3>
     </div>
     <div class="finalizarComprarContainer">
       <button id="finalizarCompra">Finalizar Compra</button>
     </div>  
    `
    console.log(carritoGuardado)
  }

}
function botonEliminar() {
    let btnEliminar = document.getElementById("finalizarCompra")
    btnEliminar.addEventListener('click', vaciarLosCarritos)
}

//esta funcion toma los productos que se encuentran dentro de carritoGuardado
//si no hay nada solo apareceran los titulos del mini cuadro ej: nombre, precio, etc
function renderizarCarrito() {
  carrito.innerHTML = `
    <article class="itemCarrito">
      <p class="titleItem">Nombre</p>
      <p class="titleItem">PrecioUnidad</p>
      <p class="titleItem">Unidades</p>
      <p class="titleItem">Subtotal</p>
    </article>
  `
  let total = 0
  for (const item of carritoGuardado) {
    total += item.subtotal
    carrito.innerHTML += `
      <article class="itemCarrito">
        <p class="itemItem">${item.nombre}</p>
        <p class="itemItem">${item.precioUnidad}</p>
        <p class="itemItem">${item.unidades}</p>
        <p class="itemItem">${item.subtotal}</p>
      </article>
    `
  }
  carrito.innerHTML += `
    <div class="totalCarrito">
      <h3 class="titleTotalCarrito">total: ${total}</h3>
    </div>
    <div class="finalizarComprarContainer">
      <button id="finalizarCompra">Finalizar Compra</button>
    </div>  
  `
  botonEliminar()
}
//evento para esconder carrito y mostrarlo
let carritoIcono = document.getElementById("carritoIcon")
carritoIcono.onclick = (e) =>{
  carrito.classList.toggle("esconder")
}
//archivo js para simular comentarios
let containerComentarios = document.getElementById("comentarios")
containerComentarios.innerHTML = "<div class='opinionesTitle'><p>Opiniones</p></div>"

const baseD = async () => {
  const res = await fetch("./archivosJs/comentarios.json")
  const comentarios = await res.json()
 for (const { nombre, comentario } of comentarios) {
  let tarjetaOpiniones = document.createElement('article')
  tarjetaOpiniones.className = nombre
  tarjetaOpiniones.innerHTML = `
    <div><h2 class="opinionH2">${nombre}</h2></div>
    <div><p class="opinionP">${comentario}</p></div>
  `
  containerComentarios.append(tarjetaOpiniones)
 }
}
baseD()
