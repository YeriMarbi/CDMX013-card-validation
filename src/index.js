import validator from './validator.js';
// todo lo que controle el DOMM
console.log(validator);
//capturando el input
const number = document.getElementById("CardNumber")
let boton = document.getElementById("boton");
//addEventListener("click", cardValidation);
boton.addEventListener("click", function(){
    //obtener lo que escribió la usuaria
    const numberCard = number.value;
    //mostrar los números enmascarados en el input
    document.getElementById("CardNumber").value = validator.maskify(numberCard);
    let isValid = validator.isValid(numberCard);
    console.log(isValid)
    if (isValid >=true){
        alert("Tarjeta válida, continúa con el paso 4")
    } else {
        alert ("Prueba con otra tarjeta")
    }
});
