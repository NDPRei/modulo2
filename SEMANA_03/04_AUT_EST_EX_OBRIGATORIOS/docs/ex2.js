function calculo2() {
    var a = parseFloat (document.getElementById('1').value);
    var b = parseFloat (document.getElementById('2').value);
    var c = parseFloat (document.getElementById('3').value);
    document.getElementById('X').innerHTML = - (b / 2 * a)
    document.getElementById('Y').innerHTML = - ((b * b - 4 * a * c) / (4 * a) )
    

}