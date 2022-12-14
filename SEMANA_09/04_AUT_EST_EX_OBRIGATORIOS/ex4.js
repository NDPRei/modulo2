function converter(){
    let N = Number(document.getElementById("CO").value);
    const convertido = [];
    let D1 = ""
    let D2 = ""
    let D3 = ""
    let D4 = ""
    let D5 = ""
    let D6 = ""
    let D7 = ""
    let D8 = ""


    if (N >= 128){
        D1 = N - 128 
        convertido.push("1"); 
    }
    else {
        convertido.push("0");
        D1 = N
    }

    if  (D1 >= 64){
        D2 = D1 - 64
        convertido.push("1");
    }
    else {
        convertido.push("0");
        D2 = D1
    }

    if (D2 >= 32){
        D3 = D2 - 32
        convertido.push("1");
    }
    else {
        convertido.push("0");
        D3 = D2
    }
    
    if (D3 >= 16){
        D4 = D3 - 16  
        convertido.push("1");
    }
    else {
        convertido.push("0");
        D4 = D3
    }

    if (D4 >= 8){
        D5 = D4 - 8
        convertido.push("1");
    }
    else { 
        convertido.push("0");
        D5 = D4
    }

    if (D5 >= 4){
        D6 = D5 - 4 
        convertido.push("1");
    }
    else {
        D6 = D5
        convertido.push("0");
    }

    if (D6 >= 2){
        D7 = D6 - 2 
        convertido.push("1");
    }
    else {
        D7 = D6
        convertido.push("0");
    }
    if (D7 >= 1){
        D8 = D7 - 1
        convertido.push("1");
    }
    else {
        D8 = D7 
        convertido.push("0");
    }

    document.getElementById('resultado').innerHTML = convertido 

}