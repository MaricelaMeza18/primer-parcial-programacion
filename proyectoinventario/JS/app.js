let inventario = [];
let entradas = [];
let salidas = [];

window.onload = cargarDesdeLocalStorage;

function cargarArreglo() {
    const codigo = document.getElementById('codigoInventario').value;
    const articulo = document.getElementById('productoInventario').value;
    const entradasValue = document.getElementById('entradas').value;
    const salidasValue = document.getElementById('salidas').value;
    const stock = document.getElementById('stock').value;

    inventario.push({ 
        codigo, 
        articulo, 
        entradas: parseFloat(entradasValue), 
        salidas: parseFloat(salidasValue), 
        stock: parseFloat(stock) 
    });

    guardarEnLocalStorage();
    actualizarTablaInventario();
    limpiarCamposInventario();
}

function actualizarInventario() {
    const entradasValue = parseFloat(document.getElementById('entradas').value);
    const salidasValue = parseFloat(document.getElementById('salidas').value);
    const stockActual = parseFloat(document.getElementById('stock').value);
    const nuevoStock = stockActual + entradasValue - salidasValue;
    document.getElementById('stock').value = nuevoStock;
    guardarEnLocalStorage();
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Stock actualizado correctamente",
        showConfirmButton: false,
        timer: 1500
    });
}


function eliminarArticulo() {
    const codigo = document.getElementById('codigoInventario').value;
    if (codigo) {
        inventario = inventario.filter(item => item.codigo != codigo);
        guardarEnLocalStorage();
        actualizarTablaInventario();
        limpiarCamposInventario();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Eliminado correctamente!",
            showConfirmButton: false,
            timer: 1500
          });
          
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Por favor ingrese un código válido para eliminar!",
        });
    }
}

function eliminarEntrada() {
    const codigo = document.getElementById('codigoEntrada').value;
    if (codigo) {
        entradas = entradas.filter(item => item.codigo != codigo);
        guardarEnLocalStorage();
        actualizarTablaEntradas();
        limpiarCamposEntradas();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Eliminado correctamente!",
            showConfirmButton: false,
            timer: 1500
          });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Por favor ingrese un código válido para eliminar!",
        });
    }
}

function eliminarSalida() {
    const codigo = document.getElementById('codigoSalida').value;
    if (codigo) {
        salidas = salidas.filter(item => item.codigo != codigo);
        guardarEnLocalStorage();
        actualizarTablaSalidas();
        limpiarCamposSalidas();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Eliminado correctamente!",
            showConfirmButton: false,
            timer: 1500
          });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Por favor ingrese un código válido para eliminar!",
        });
    }
}

function actualizarTablaInventario() {
    const tabla = document.getElementById('Inventario');
    tabla.innerHTML = `
        <tr>
            <th width="10%">Codigo</th>
            <th width="10%">Articulo</th>
            <th width="10%">Entradas</th>
            <th width="10%">Salidas</th>
            <th width="10%">Stock</th>
        </tr>
    `;
    inventario.forEach(item => {
        const fila = tabla.insertRow();
        fila.insertCell(0).innerText = item.codigo;
        fila.insertCell(1).innerText = item.articulo;
        fila.insertCell(2).innerText = item.entradas;
        fila.insertCell(3).innerText = item.salidas;
        fila.insertCell(4).innerText = item.stock;
    });
}

function actualizarTablaEntradas() {
    const tabla = document.getElementById('Inventario2');
    tabla.innerHTML = `
        <tr>
            <th width="20%">Codigo</th>
            <th width="20%">Articulo</th>
            <th width="20%">Fecha</th>
            <th width="20%">Cantidad</th>
            <th width="20%">Total de la transacción</th>
        </tr>
    `;
    entradas.forEach(item => {
        const fila = tabla.insertRow();
        fila.insertCell(0).innerText = item.codigo;
        fila.insertCell(1).innerText = item.articulo;
        fila.insertCell(2).innerText = item.fecha;
        fila.insertCell(3).innerText = item.cantidad;
        const total = calcularTotalEntrada(item.articulo, item.cantidad);
        fila.insertCell(4).innerText = total.toFixed(2);
    });
}

function actualizarTablaSalidas() {
    const tabla = document.getElementById('Inventario3');
    tabla.innerHTML = `
        <tr>
            <th width="20%">Codigo</th>
            <th width="20%">Articulo</th>
            <th width="20%">Fecha</th>
            <th width="20%">Cantidad</th>
            <th width="20%">Total de la transacción</th>
        </tr>
    `;
    salidas.forEach(item => {
        const fila = tabla.insertRow();
        fila.insertCell(0).innerText = item.codigo;
        fila.insertCell(1).innerText = item.articulo;
        fila.insertCell(2).innerText = item.fecha;
        fila.insertCell(3).innerText = item.cantidad;
        const total = calcularTotalSalida(item.articulo, item.cantidad);
        fila.insertCell(4).innerText = total.toFixed(2);
    });
}

function cargarEntrada() {
    const codigo = document.getElementById('codigoEntrada').value;
    const articulo = document.getElementById('productoEntrada').value;
    const fecha = document.getElementById('fechaEntrada').value;
    const cantidad = document.getElementById('cantidadEntrada').value;

    entradas.push({ codigo, articulo, fecha, cantidad: parseFloat(cantidad) });
    guardarEnLocalStorage();
    actualizarTablaEntradas();
    limpiarCamposEntradas();
}

function cargarSalida() {
    const codigo = document.getElementById('codigoSalida').value;
    const articulo = document.getElementById('productoSalida').value;
    const fecha = document.getElementById('fechaSalida').value;
    const cantidad = document.getElementById('cantidadSalida').value;

    salidas.push({ codigo, articulo, fecha, cantidad: parseFloat(cantidad) });
    guardarEnLocalStorage();
    actualizarTablaSalidas();
    limpiarCamposSalidas();
}

function limpiarCamposInventario() {
    document.getElementById('codigoInventario').value = '';
    document.getElementById('productoInventario').value = '';
    document.getElementById('entradas').value = '';
    document.getElementById('salidas').value = '';
    document.getElementById('compras').value = '';
    guardarEnLocalStorage();
}

function limpiarCamposEntradas() {
    document.getElementById('codigoEntrada').value = '';
    document.getElementById('productoEntrada').value = '';
    document.getElementById('fechaEntrada').value = '';
    document.getElementById('cantidadEntrada').value = '';
    guardarEnLocalStorage();
}

function limpiarCamposSalidas() {
    document.getElementById('codigoSalida').value = '';
    document.getElementById('productoSalida').value = '';
    document.getElementById('fechaSalida').value = '';
    document.getElementById('cantidadSalida').value = '';
    guardarEnLocalStorage();
}

function calcularTotalInventario(articulo, cantidad) {
    const precios = {
        "Rubor": 50,
        "Delineador": 45,
        "Lapiz_labial": 60,
        "Brocha": 60,
        "Labial": 40,
        "Esponja": 25,
        "Corrector": 80,
        "Base": 100,
        "Contorno": 80,
    };
    const precio = precios[articulo];
    return precio ? precio * cantidad : 0;
}

function calcularTotalEntrada(articulo, cantidad) {
    return calcularTotalInventario(articulo, cantidad);
}

function calcularTotalSalida(articulo, cantidad) {
    return calcularTotalInventario(articulo, cantidad);
}


function calcularEntradas() {
    const producto = document.getElementById('productoEntrada').value;
    const cantidad = parseFloat(document.getElementById('cantidadEntrada').value);

    if (isNaN(cantidad) || cantidad <= 0) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Cantidad valida!",
            showConfirmButton: false,
            timer: 1500
          });
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Por favor ingrese una cantidad válida!",
        });
        return;
    }

    const total = calcularTotalEntrada(producto, cantidad);
    document.getElementById('TotalEntrada').value = total.toFixed(2);
}

function calcularSalidas() {
    const producto = document.getElementById('productoSalida').value;
    const cantidad = parseFloat(document.getElementById('cantidadSalida').value);

    if (isNaN(cantidad) || cantidad <= 0) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Cantidad valida!",
            showConfirmButton: false,
            timer: 1500
          });
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Por favor ingrese una cantidad válida!",
        });
        return;
    }

    const total = calcularTotalSalida(producto, cantidad);
    document.getElementById('TotalSalida').value = total.toFixed(2);
}

function guardarEnLocalStorage() {
    localStorage.setItem("inventario", JSON.stringify(inventario));
    localStorage.setItem("entradas", JSON.stringify(entradas));
    localStorage.setItem("salidas", JSON.stringify(salidas));
}

function cargarDesdeLocalStorage() {
    let datosInventario = localStorage.getItem("inventario");
    let datosEntradas = localStorage.getItem("entradas");
    let datosSalidas = localStorage.getItem("salidas");

    if (datosInventario) {
        inventario = JSON.parse(datosInventario);
    }
    if (datosEntradas) {
        entradas = JSON.parse(datosEntradas);
    }
    if (datosSalidas) {
        salidas = JSON.parse(datosSalidas);
    }

    actualizarTablaInventario();
    actualizarTablaEntradas();
    actualizarTablaSalidas();
}