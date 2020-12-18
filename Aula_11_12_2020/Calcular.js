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




function  converter() {
    let temp = parseFloat(document.getElementById("temp").value)
    let resultado = ""
 
    switch (operacao) {
       case "Celsius para Fahrenheit":
            console.log("C");
            resultado = 1.8* temp + 32
          break;
       case "Fahrenheit para Celsius":
             console.log("F");
             resultado = (temp - 32)/ 1.8
    
       default:
          console.log("Não é poss-ivel reslizar a conversão");
    }
 document.getElementById("resultado").textContent = resultado
 }





var valor;
var resultado;
function botao(num) {
   valor = document.calc.visor.value += num;
}

function reseta() {
   document.calc.visor.value = "";
}

function calcula() {
   resultado = eval(valor);
   document.calc.visor.value = resultado;
   
}


function conversaoMoeda(){
    let resultado = ""
    var opcao = document.getElementById("opções").value; 
    let valor = document.getElementById("text2").value;
    let dolarAmericano = 5.0;
    let dolarCanadense = 4.0;
    let dolarAustraliano = 3.0;
    switch (opcao){
        case "US$":
            document.getElementById("valorFinal").textContent = (valor/dolarAmericano).toFixed(2);
            break
        case "C$":
            document.getElementById("valorFinal").textContent = (valor/dolarCanadense).toFixed(2);
            break
        case "A$":
            document.getElementById("valorFinal").textContent = (valor/dolarAustraliano).toFixed(2);
            break
        default:
            document.getElementById("valorFinal").textContent = resultado
    }
}


function verificarCPF(){
    let cpf = document.getElementById("entrada").value
    let resultado = ""

    //obter terceiro segmento do CPF 111.222.333-DD
    let segmento = parseInt(cpf.split("-")[0].split(".")[2].split("")[2])

    switch(segmento)
    {
        case 1:
            resultado = "SP"
            break
        case 4:
            resultado = "PB"
            break
        case 9:
            resultado = "RJ"
            break
    }
    document.getElementById("saida").textContent = resultado
}