function mostrarpi() { 
    let n10= Number(document.getElementById('num1').value);
    let resultado
    let multi = ''

    for (let i = 1; i <= n10; i++) {
        
        if(i %3 == 0)  {
            multi = multi +" "+ i + " Pi"
            console.log(multi)
        }     
        else{
            multi = multi + " "+ i 
        }
     }
    document.getElementById('resultado2').innerHTML = multi
}
