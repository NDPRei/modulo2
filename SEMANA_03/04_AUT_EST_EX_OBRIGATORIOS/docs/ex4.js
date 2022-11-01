function calculoV(){
    var Kwh = parseFloat (document.getElementById('K').value);
    var VA = parseFloat (document.getElementById('V').value);
    var resultado = parseFloat (Kwh * VA);
    console.log (Kwh)

    if (Kwh > 100) {
        resultado = resultado * 1.25
        console.log ("oi")
    }
    else if (Kwh > 200) {
        resultado = resultado * 1.50
        console.log ("oi")
    }

    document.getElementById('Conta').innerHTML = resultado
}