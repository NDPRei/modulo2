 function verificar() {
    let palim = document.getElementById("palin").value;
    let separa = palim.split("")
    let reverter = separa.reverse()
    let fim = reverter.join("") 

    if(palim == fim) {
        document.getElementById('resultado').innerHTML = "é palíndromo"
    }
    else{
        document.getElementById('resultado').innerHTML = "não é palíndromo"
    }
    
 }

