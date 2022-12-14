function VF() {
    let V = Number(document.getElementById("n1").value);
    let J = Number(document.getElementById("i").value);
    let D = Number(document.getElementById("d").value);
    
    let conta 
    let resultado

    conta = V * ((1 + J)**D)
    resultado = conta

    document.getElementById('resultado3').innerHTML = resultado
}

function VP() {
    let V = Number(document.getElementById("n1").value);
    let J = Number(document.getElementById("i").value);
    let D = Number(document.getElementById("d").value);
    
    let conta2
    let resultado2

    conta2 = V / ((1 + J)**D)
    resultado2 = conta2

    document.getElementById('resultado3').innerHTML = resultado2
}