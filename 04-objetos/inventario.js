function menu() {
  let op = prompt("****** MENÚ ******\n\n1. Agregar producto\n2. Eliminar producto\n3. Mostrar inventario\n4. Buscar producto\n\nIngrese el número correspondiente a la función");
  switch (op) {
    case "1":
      agrProd();
      break;
    case "2":
      eliProd();
      break;
    case "3":
      mosInve();
      break;
    case "4":
      busProd();
      break;
    default:
      location.reload();
      break;
  }
}

let inventario = [
  producto = {
    nombre: "",
    precio: "",
    cantidad: "",
  }
]

menu();

function agrProd() {
  let nombre = prompt("Agregar un producto al inventario\n\nIngrese el nombre del producto");
  let precio = prompt("Agregar un producto al inventario\n\nIngrese el precio del producto");
  let cantidad = prompt("Agregar un producto al inventario\n\nIngrese la cantidad del producto");
  
  producto.nombre= nombre;
  producto.precio= precio;
  producto.cantidad= cantidad;

  console.log(producto);
  menu();
}

function eliProd() {
  let nombre = prompt("Eliminar un producto del inventario\n\nIngrese el nombre del producto");

  if (nombre == producto.nombre) {
    const prodEliminar = nombre;
    const index = inventario.findIndex( producto => producto.nombre === prodEliminar );
    inventario.splice( index, 1 );
  }

  console.log(inventario);
  // menu();
}

function mosInve() {
  console.log(inventario);
  // menu();
}

function busProd() {
  let nombre = prompt("Buscar un producto en el inventario\n\nIngrese el nombre del producto");
  const prodBuscar = nombre;
    const index = inventario.findIndex( producto => producto.nombre === prodBuscar );
    console.log(inventario[index]);
}
