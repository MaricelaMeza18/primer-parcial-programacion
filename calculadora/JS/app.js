let valor1 //declarar dos variables Globales
let operacion

function uno() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 1
}

function dos() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 2
}

function tres() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 3
}

function cuatro() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 4
}






function cinco() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 5
}

function seis() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 6
}

function siete() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 7
}

function ocho() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 8
}

function nueve() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) +9
}
function cero() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) +0
}

function suma() {
    valor1 = document.getElementById('pantalla').value
    operacion = "suma"
document.getElementById('pantalla').value=0
   
}

function resta() {
    valor1 = document.getElementById('pantalla').value
    operacion = "resta"
    document.getElementById('pantalla').value =0

}

function multiplicacion(){
valor1=document.getElementById('pantalla').value
operacion="multiplicacion"
document.getElementById('pantalla').value=0
}

function division(){

    valor1=document.getElementById('pantalla').value
    operacion="division"
    document.getElementById('pantalla').value=0
}

function igual() {
    if (operacion ==='suma') {
        valor2 = document.getElementById('pantalla').value
        let total = parseInt(valor1) + parseInt(valor2)
        document.getElementById('pantalla').value = total
        valor1 = document.getElementById('pantalla').value
        Swal.fire({
            title: "bien hecho!",
            text: "usted trabajo en suma😊",
            icon: "success",

          })
    }


    else if (operacion === 'resta') {
        valor2 = document.getElementById('pantalla').value
        let total = parseInt(valor1) - parseInt(valor2)
        document.getElementById('pantalla').value = total
        valor1 = document.getElementById('pantalla').value
        Swal.fire({
            title: "excelente!",
            text: "usted trabajo en una resta👌",
            imageUrl: "https://image.freepik.com/vector-gratis/perro-gracioso-caricatura_43633-7193.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
          
          
     
    }

    
    else if (operacion === 'multiplicacion') {
        valor2 = document.getElementById('pantalla').value
        let total = parseInt(valor1) * parseInt(valor2)
        document.getElementById('pantalla').value = total
        valor1 = document.getElementById('pantalla').value
        Swal.fire({
            title: "buen trabajo, como siempre!😉",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(112, 11, 205, 0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }

    
    else if (operacion === 'division') {
        valor2 = document.getElementById('pantalla').value
        let total = parseInt(valor1) / parseInt(valor2)
        document.getElementById('pantalla').value = total
        valor1 = document.getElementById('pantalla').value
        Swal.fire({
            title: "otro trabajo excelente!",
            text: "usted trabajo en division😊",
            icon: "succes",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "usted trabajo en division.",
                icon: "success"
              });
            }
          });
          
    }

    

}

