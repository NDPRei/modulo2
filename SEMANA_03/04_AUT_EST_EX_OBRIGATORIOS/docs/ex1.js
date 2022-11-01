function calculo() {
    var recebe = parseFloat (document.getElementById('v0').value);
    document.getElementById('resultado').innerHTML = (recebe*recebe) / (2*10) + " metros"
    var tempo = parseFloat (document.getElementById('v0').value);
    document.getElementById('resultado2').innerHTML = tempo / 10 + " segundos"

}