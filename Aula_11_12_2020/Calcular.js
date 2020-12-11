function VerificarTriangulo(){
    let a = parseFloat(document.getElementById("numero1").value)
    let b = parseFloat(document.getElementById("numero2").value)
    let c = parseFloat(document.getElementById("numero3").value)
    let resultado = ""

    if (a == b && a == c && b == c) 
    {
        resultado = "O triangulo é Isóceles!";
    }
    else if(a != b && b != c && c != a)
    {
        resultado = "O triangulo é Escaleno!";
    }
    else{
        resultado = "O triangulo é Equilátero!";
    }
    document.getElementById("resultado").textContent = resultado
    
}



function VerificarNotas(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let num3 = parseFloat(document.getElementById("num3").value)
    let num4 = parseFloat(document.getElementById("num4").value)
    let media_final = ""

     media_final = (num1 + num2 + num3 + num4) / 4

    if (media_final >= 5) 
    {
        resultado = "Você está Aprovado!";
    }
    else if(media_final < 5)
    {
        resultado = "Você está Reprovado!";
    }
    else{
        resultado = "Você está de Recuperação!";
    }
    document.getElementById("media_final").textContent = resultado
    
}
