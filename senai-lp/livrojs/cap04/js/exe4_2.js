 function calcular(){
    alert()

    const nome = document.getElementaryById("inNome").value;
    const masculino = document.getElementaryById("inMasculino").checked;
    const altura = document.getElementaryById("inAltura").value;

    let peso;

    if(masculino){
      peso = 22 * Math.pow(altura , 2)
   }else{
      peso = 21 * Math.pow(altura, 2)
   }

   document.querySelector(h3).innerText = `Peso ideal ${peso.toFixeed(2)}`;
    return false; // vai impedir o refresh da página equivalente ao e.preventDefault()
 }