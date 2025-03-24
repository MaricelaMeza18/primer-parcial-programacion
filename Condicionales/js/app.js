function calcular(){
    let modo;
    let virtual=false
    let presencial=false
let nombre=document.getElementById('nombre').value;
if (!nombre){
    mensaje("Nombre ")
}
let materia=document.getElementById('materia').value;
if (!materia){
    mensaje("Materia")}
 virtual=document.querySelector('#virtual').checked;
 presencial=document.querySelector('#presencial').checked;
 if (!virtual && !presencial){
    mensaje("Modalidad educativa");
 }


if(virtual){
    modo="virtual" 
}
if ( presencial){
    modo="presencial";
}
let nota1=document.getElementById('nota1').value
if (!nota1){
    mensaje("Nota1")
}
let nota2=document.getElementById('nota2').value
if (!nota2){
    mensaje("Nota2")
}
let nota3=document.getElementById('nota3').value
if (!nota3){
    mensaje("Nota3")
}
let nota4=document.getElementById('nota4').value
if (!nota4){
    mensaje("Nota4")
}
let promedio=(parseInt (nota1)+parseInt(nota2)+parseInt(nota3)+parseInt(nota4))/4;
let resultado;

if (promedio<=40){
    resultado="Reprobado"
} else if(promedio<70){
    resultado="Debe mejorar"
} else {
    resultado="Aprobado"
}
document.getElementById('promedio').value=promedio + " "+ resultado

}
function mensaje(campo){
    
    Swal.fire({
        icon: "error",
        title: "Campos Obligatorios ",
        text: "el campo"+campo+"esta vacio",
    
      });
}
function limpiar() {

    document.getElementById('nombre').value = "";

 
    document.getElementById('materia').selectedIndex = 0;

   
    document.getElementById('presencial').checked = false;
    document.getElementById('virtual').checked = false;

 
    document.getElementById('nota1').value = "";
    document.getElementById('nota2').value = "";
    document.getElementById('nota3').value = "";
    document.getElementById('nota4').value = "";

    document.getElementById('promedio').value = "";
}

