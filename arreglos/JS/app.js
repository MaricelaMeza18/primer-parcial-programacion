let estudiantes=[];
window.onload=cargarDesdeLocalStorage;
function cargarArreglo(){

    //arreglo es un tipo de variable donde podemos almacenar valores multiples en una misma variable 

let nombre=document.getElementById('nombre').value
let identidad=document.getElementById('identidad').value
let edad=document.getElementById('edad').value
let carrera=document.getElementById('carrera').value

if (nombre==='' || identidad==='' || edad==='' || carrera===''){
    Swal.fire({
        icon: "error",
        title: "Debe llenar todos los campos",
      });
    return
}
 
estudiantes.push({nombre,identidad,edad,carrera})
guardarEnLocalStorage();
console.log(estudiantes)
document.getElementById('nombre').value=''
document.getElementById('identidad').value=''
document.getElementById('edad').value=''
document.getElementById('carrera').value=''
mostrarEstudiantes()

}

function mostrarEstudiantes(){

    let tabla=document.getElementById('estudiantes')
    tabla.innerHTML = `
    <tr>
        <th width="20%">Nombre</th>
        <th width="20%">Identidad</th>
        <th width="20%">Edad</th>
        <th width="20%">Carrera</th>
    </tr> `;

    estudiantes.forEach((estudiante) => {
        let fila = `

        <tr>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.identidad}</td>
            <td>${estudiante.edad}</td>
            <td>${estudiante.carrera}</td>
        </tr>`;
        tabla.innerHTML += fila;
    });
}

function buscarEstudiante(){

    let busquedaId = document.getElementById('identidad').value;
    if(busquedaId === ''){
        Swal.fire({
            icon: "error",
            title: "Debe ingresar el número de identidad",
          });
        return;
    }

    let encontrado = estudiantes.find(est => est.identidad === busquedaId);
    
    if(encontrado){
        document.getElementById('nombre').value = encontrado.nombre;
        document.getElementById('edad').value = encontrado.edad;
        document.getElementById('carrera').value = encontrado.carrera;

    } else {
        Swal.fire({
            icon: "error",
            title: "Estudiante no encontrado",
          });
       return 
    }
    
} 

function actualizarEstudiante() {
    let nombre=document.getElementById('nombre').value;
    let identidad=document.getElementById('identidad').value;
    let edad=document.getElementById('edad').value;
    let carrera=document.getElementById('carrera').value;
    if(identidad==='' || nombre==='' || edad==='' || carrera===''){
        Swal.fire({
            icon: "error",
            title: "Debe llenar todos los campos",
          });
          return
    }
    let indice = estudiantes.findIndex(est => est.identidad === identidad);  
    if (indice !== -1) {
        estudiantes[indice] = {nombre, identidad, edad, carrera};  
        guardarEnLocalStorage();
        mostrarEstudiantes();
        Swal.fire({
            title: "El estudiante ha sido actualizado correctamente",
            icon: "success",
            draggable: true
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Estudiante no encontrado",
        });
        return;
    }
}


function eliminarEstudiante(){
    let identidad=document.getElementById('identidad').value;
    if(identidad===''){
        Swal.fire({
            title: "El estudiante ha sido actualizado correctamente",
            icon: "success",
            draggable: true
        });
        return;
    }
   
    let indice = estudiantes.findIndex(est => est.identidad === identidad);  
    if (indice !== -1) {
        estudiantes.splice(indice,1);
    document.getElementById('nombre').value= ''
    document.getElementById('identidad').value= ''
    document.getElementById('edad').value= ''
    document.getElementById('carrera').value= ''
    guardarEnLocalStorage();
    mostrarEstudiantes()



    Swal.fire({
        title: "El estudiante ha sido actualizado correctamente",
        icon: "success",
        draggable: true
    });
} else {
    Swal.fire({
        icon: "error",
        title: "Estudiante no encontrado",
    });
    return;
}
    
}

function guardarEnLocalStorage(){
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}

function cargarDesdeLocalStorage(){
    let datosGuardados=localStorage.getItem("estudiantes");
    if (datosGuardados){
        estudiantes=JSON.parse(datosGuardados);
        mostrarEstudiantes()
    }
}

