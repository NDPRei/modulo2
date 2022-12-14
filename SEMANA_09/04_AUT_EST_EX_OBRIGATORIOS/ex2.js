function calcularJ() {
    let C = Number(document.getElementById("C").value);
    let i = Number(document.getElementById("i").value);
    let n = Number(document.getElementById("n").value);

    let  calculo
    let resultado

    calculo = C * i * n 
    resultado = calculo 
    document.getElementById('resultado').innerHTML = resultado
}

function calcularM() { 
    let C = Number(document.getElementById("C").value);
    let i = Number(document.getElementById("i").value);
    let n = Number(document.getElementById("n").value);

    let calculo
    let calculo2
    let resultado

    calculo = C * i * n 
    calculo2 = C + calculo 
    resultado = calculo2


    document.getElementById('resultado').innerHTML = resultado
}