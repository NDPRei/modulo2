

function calculo() {
    let nentrada = Number(document.getElementById('num1').value);
    let nini = Number(document.getElementById('num2').value); 
    let nfim = Number(document.getElementById('num3').value); 

    let resultado 
    let i
    let multi = ""

   if(nfim < nini) 
   alert="error"

   if(nini < nfim) { 
    for ( i = nini;  i <= nfim; i++){ 
        resultado = nentrada * i 
         multi +=` ${String(resultado)},`
        console.log(resultado)

    }
   }
   document.getElementById('resultado3').innerHTML = multi
}