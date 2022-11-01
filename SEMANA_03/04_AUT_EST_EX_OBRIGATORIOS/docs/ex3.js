function calculoC() {
    var CC = parseFloat (document.getElementById('C').value);
    document.getElementById('Celsi').innerHTML = 32 + (CC * 9 / 5) 
}
function calculoF() {
    var FF = parseFloat (document.getElementById('F').value);
    document.getElementById('Faren').innerHTML = ((FF - 32) * 5) / 9 
}