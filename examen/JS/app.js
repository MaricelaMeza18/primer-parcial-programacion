let productos = []; 

window.onload = cargarDesdeLocalStorage;

function cargarArreglo() {
    let id = document.getElementById('id').value;
    let producto = document.getElementById('producto').value;
    let fecha = document.getElementById('fecha').value;
    let categorias = document.getElementById('categorias').value;
    let precios = document.getElementById('precios').value;

    if (id === '' || producto === '' || fecha === '' || categorias === '' || precios === '') {
        Swal.fire({
            icon: "error",
            title: "Debe llenar todos los campos",
        });
        return;
    }

    productos.push({ id, producto, fecha, categorias, precios });

    guardarEnLocalStorage();

    document.getElementById('id').value = '';
    document.getElementById('producto').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('categorias').value = '';
    document.getElementById('precios').value = '';

    mostrarProducto();
}

function mostrarProducto() {
    let tabla = document.getElementById('estudiantes');
    tabla.innerHTML = `
    <tr>
        <th width="20%">ID</th>
        <th width="20%">PRODUCTO</th>
        <th width="20%">FECHA DE CREACION DEL PRODUCTO</th>
        <th width="20%">CATEGORIAS Y SERIE DEL PRODUCTO</th>
        <th width="20%">PRECIOS</th>
    </tr>`;

    productos.forEach((producto) => {
        let fila = `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.producto}</td>
            <td>${producto.fecha}</td>
            <td>${producto.categorias}</td>
            <td>${producto.precios}</td>
        </tr>`;
        tabla.innerHTML += fila;
    });
}

function buscarProducto() {
    let busquedaId = document.getElementById('producto').value;
    if (busquedaId === '') {
        Swal.fire({
            icon: "error",
            title: "Debe ingresar el producto",
        });
        return;
    }

    let encontrado = productos.find(p => p.producto === busquedaId);
    if (encontrado) {
        document.getElementById('id').value = encontrado.id;
        document.getElementById('producto').value = encontrado.producto;
        document.getElementById('fecha').value = encontrado.fecha;
        document.getElementById('categorias').value = encontrado.categorias;
        document.getElementById('precios').value = encontrado.precios;
    } else {
        Swal.fire({
            icon: "error",
            title: "Producto no encontrado",
        });
    }
}

function actualizarProducto() {
    let id = document.getElementById('id').value;
    let producto = document.getElementById('producto').value;
    let fecha = document.getElementById('fecha').value;
    let categorias = document.getElementById('categorias').value;
    let precios = document.getElementById('precios').value;

    if (id === '' || producto === '' || fecha === '' || categorias === '' || precios === '') {
        Swal.fire({
            icon: "error",
            title: "Debe llenar todos los campos",
        });
        return;
    }

    let indice = productos.findIndex(p => p.id === id);
    if (indice !== -1) {
        productos[indice] = { id, producto, fecha, categorias, precios };
        guardarEnLocalStorage();
        mostrarProducto(); 
        Swal.fire({
            title: "El producto ha sido actualizado correctamente",
            icon: "success",
            draggable: true
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Producto no encontrado",
        });
    }
}

function eliminarProducto() {
    let id = document.getElementById('id').value;
    if (id === '') {
        Swal.fire({
            icon: "error",
            title: "Debe ingresar un ID para eliminar",
        });
        return;
    }

    let indice = productos.findIndex(p => p.id === id);
    if (indice !== -1) {
        productos.splice(indice, 1);
        document.getElementById('id').value = '';
        document.getElementById('producto').value = '';
        document.getElementById('fecha').value = '';
        document.getElementById('categorias').value = '';
        document.getElementById('precios').value = '';
        guardarEnLocalStorage();
        mostrarProducto(); 
        Swal.fire({
            title: "El producto ha sido eliminado correctamente",
            icon: "success",
            draggable: true
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Producto no encontrado",
        });
    }
}

function guardarEnLocalStorage() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarDesdeLocalStorage() {
    let datosGuardados = localStorage.getItem("productos");
    if (datosGuardados) {
        productos = JSON.parse(datosGuardados);
        mostrarProducto();
    }
}