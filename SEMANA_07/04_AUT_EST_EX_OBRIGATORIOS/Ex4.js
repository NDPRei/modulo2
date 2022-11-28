function azulejo(){
    let n1=Number(document.getElementById('num1').value);
    let n2=Number(document.getElementById('num2').value);
    let n3=Number(document.getElementById('num3').value);
    let n4=Number(document.getElementById('num4').value);

    let areaA
    let areaP
    let nazul
    let final

    areaA = n1 * n2
    areaP = n3 * n4 

    nazul = areaP / areaA 
    
    final = nazul + (nazul * 0.05)

    document.getElementById('mostrar').innerHTML = final + ' azulejos'
    console.log(final)

}

