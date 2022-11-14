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
//busqueda
busqueda.oninput = () => {
  let productosFiltrados = productos.filter(producto => producto.nombre.includes(busqueda.value.toUpperCase()))
  renderizarProductos(productosFiltrados)
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
  
      localStorage.setItem('carrito', JSON.stringify(carritoGuardado))
      renderizarCarrito()
    }
  }
}
//produc a la vista
function renderizarProductos(productoFiltrado){
  let productosARenderizar = productos
  if(productoFiltrado){
    productosARenderizar = productoFiltrado
  }
  productoContainer.innerHTML = ''
  for (const producto of productosARenderizar) {
    let tarjetaProducto = document.createElement('article')
    tarjetaProducto.className = 'producto'
    tarjetaProducto.innerHTML = `
      <div><img src=${producto.imgUrl} class="imgProducTien"></div>
      <div><h2 class="productoH2">${producto.nombre}</h2></div>
      <div><p class="productoP">$${producto.precio}</p></div>
      <div><button class="boton" id=${producto.id}>Agregar al carrito</button></div>
    `
    productoContainer.append(tarjetaProducto)
  }
}

let botones = document.getElementsByClassName('boton')
let carrito = document.getElementById('carritoSection')

let carritoGuardado = []
if (localStorage.getItem('carrito')) {
  carritoGuardado = JSON.parse(localStorage.getItem('carrito'))
}

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

    localStorage.setItem('carrito', JSON.stringify(carritoGuardado))
    renderizarCarrito()
  }
}

function vaciarLosCarritos() {
  localStorage.clear()
  carritoGuardado = []
  let total = 0
  carrito.innerHTML = `
   <article class="itemCarrito">
     <p class="titleItem">nombre</p>
     <p class="titleItem">precioUnidad</p>
     <p class="titleItem">unidades</p>
     <p class="titleItem">subtotal</p>
   </article>
   <div class="totalCarrito">
     <h3 class="titleTotalCarrito">total: ${total}</h3>
   </div>
   <div class="finalizarComprarContainer">
     <button id="finalizarCompra">Finalizar Compra</button>
   </div>  
  `
  console.log("sigue andando")
}
function botonEliminar() {
  let btnEliminar = document.getElementById("finalizarCompra")
  btnEliminar.addEventListener('click', vaciarLosCarritos)
}

function renderizarCarrito() {
  carrito.innerHTML = `
    <article class="itemCarrito">
      <p class="titleItem">nombre</p>
      <p class="titleItem">precioUnidad</p>
      <p class="titleItem">unidades</p>
      <p class="titleItem">subtotal</p>
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