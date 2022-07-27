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
    console.log(numberCard);
    let errors = document.getElementById("alerts");
    if(numberCard==''){
        errors.className ="messages-error";
        errors.innerHTML="Debe introducir un número";
    }else{
        document.getElementById("CardNumber").value = validator.maskify(numberCard);
    
        let isValid = validator.isValid(numberCard);
        if (isValid >=true){
            errors.className ="messages-ok";
            errors.innerHTML="Tarjeta válida, continúa con el paso 4";
        } else {
            errors.className ="messages-error";
            errors.innerHTML="Prueba con otra tarjeta";
        }
    }
    
});
