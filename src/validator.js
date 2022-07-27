const validator= {
  
    isValid: function(numberCard) { 
    //iterando el valor de numberCard en un array
     let result = 0;
     //no poder ingresar un campo vacío
     if (numberCard.length >= 0){
     let cont = 1;
        //números en orden inverso
        for (let i = numberCard.length -1; i >=0; i--) {
            //validando posiciones pares
            if(cont% 2 == 0){
                //multiplicarlos por 2
             let resMult = numberCard[i]*2;
             //si el doble es mayor o igual a 10
             if(resMult >= 10){
                
                let arrNumber = resMult.toString().split('');
                //indicar que es un número y no un String
                resMult = Number(arrNumber[0])+Number(arrNumber[1]);
                }
                //sumar los dígitos y nuevos dígitos
            result = Number(result+resMult);
            }else{
                result = result+Number(numberCard[i]);
                //console.log(numberCard[i]);
            }
            cont++;
        }   
        if (result % 10 == 0){
            return true;
        }else{
           return false;
           
        }
    }
   
  },
  //enmascara los dígitos
  maskify:function(numberCard){ 
    //obtener los últimos 4 dígitos de la cadena
    let lastfour = numberCard.substr(numberCard.length -4);
    let numberMaskify = []
    //obtener la longitud de lo que escribió
    for (let i = 0; i < numberCard.length -4; i++) {
        numberMaskify[i] = "#"
    }
    //reemplazar todos los dígitos excepto los últimos 4
    numberMaskify = numberMaskify.join('')+ lastfour;
    return numberMaskify
  }
  
}
export default validator;