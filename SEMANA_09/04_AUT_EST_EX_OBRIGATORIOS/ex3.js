
function imprimir() {
    const text = document.getElementById("txt").value;
    let space = " "
    let i = 0
    
    for(i = 0; i < text.length; i++) {
        for (j = 0; j < i; j++) {
            space += "&nbsp"
        }
        document.getElementById("resultado").innerHTML += `<br> <p>${space} ${text.substr(i, 1)}</p>`

    }
    
}
