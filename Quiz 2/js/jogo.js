function loadRecord(){
    let campoRecord = document.getElementById("record");
    campoRecord.textContent = 0;
    if( localStorage.getItem("record") != null &&
        localStorage.getItem("record") != undefined ){

        let ranking = JSON.parse(localStorage.getItem("record"))
        campoRecord.textContent = ranking[0].record
    }
}

function novoRecord(){
    let pontuacaoAtual = document.getElementById("pontuacao-atual").value
    let nome = prompt("Qual o Seu Nome?");
    let agora = Date.now();

    let novoRecord = {
        timestamp : agora,
        nomeDoJogador: nome,
        record: pontuacaoAtual
    }
    
    // ranking = [
    //    {   },
    //    {   },
    //    {   },
    //]
    let ranking = JSON.parse(localStorage.getItem("record"))
    ranking.unshift(novoRecord)

    localStorage.setItem("record",JSON.stringify(ranking))
    loadRecord()
}


var ranking = [
,
    {
        timestamp : "",
        nomeDoJogador: "",
        record: 400
    },
    {
        timestamp : "",
        nomeDoJogador: "",
        record: 350
    },
]


function iniciaJogo(){
    let card1 = document.getElementById("card-1");
    card1.innerHTML = 
    `
    Qual é a populção total da Noruega ? <br>
    <img id="img-1" src="${deck[2].imgSrc}" alt="FIG 1"> <br>
    <input type="radio" name="resp-1" id="alt11"><label>${deck[0].Alt3}</label><br>
    <input type="radio" name="resp-1" id="alt12"><label>${deck[0].Alt2}</label><br>
    <input type="radio" name="resp-1" id="alt13"><label>${deck[0].Alt3}</label><br>
    `
    let card2 = document.getElementById("card-2");
    card2.innerHTML = 
    `
    HTML é uma linguagem de marcação ? <br>
    <img id="img-2" src="${deck[2].imgSrc}" alt="Fig 2"> <br>
    <input type="radio" name="resp-2" id="alt21"><label>${deck[1].Alt4}</label><br>
    <input type="radio" name="resp-2" id="alt22"><label>${deck[1].Alt5}</label><br>
    <input type="radio" name="resp-2" id="alt23"><label>${deck[1].Alt6}</label><br>
    `
    let card3 = document.getElementById("card-3");
    card3.innerHTML = 
    `
    Qual é a cor resultante quando juntamos todas as cores ? <br>
    <img id="img-3" src="${deck[2].imgSrc}" alt="Fig 3"> <br>
    <input type="radio" name="resp-3" id="alt31"><label>${deck[2].Alt7}</label><br>
    <input type="radio" name="resp-3" id="alt32"><label>${deck[2].Alt8}</label><br>
    <input type="radio" name="resp-3" id="alt33"><label>${deck[2].Alt9}</label><br>
    `
    let card1 = document.getElementById("card-4");
    card4.innerHTML = 
    `
    A Irlanda faz parte do Reino-Unido ? <br>
    <img id="img-1" src="${deck[2].imgSrc}" alt="FIG 1"> <br>
    <input type="radio" name="resp-1" id="alt11"><label>${deck[0].Alt10}</label><br>
    <input type="radio" name="resp-1" id="alt12"><label>${deck[0].Alt11}</label><br>
    <input type="radio" name="resp-1" id="alt13"><label>${deck[0].Alt12}</label><br>
    `
    let card2 = document.getElementById("card-5");
    card5.innerHTML = 
    `
    Qual o nome do Vocalista do MOTORHEAD ? <br>
    <img id="img-2" src="${deck[2].imgSrc}" alt="Fig 2"> <br>
    <input type="radio" name="resp-2" id="alt21"><label>${deck[1].Alt13}</label><br>
    <input type="radio" name="resp-2" id="alt22"><label>${deck[1].Alt14}</label><br>
    <input type="radio" name="resp-2" id="alt23"><label>${deck[1].Alt15}</label><br>
    `
    let card6 = document.getElementById("card-6");
    card6.innerHTML = 
    `
    Essa é o melhor grupo musical de todos os tempos ?< <br>
    <img id="img-3" src="${deck[2].imgSrc}" alt="Fig 3"> <br>
    <input type="radio" name="resp-3" id="alt31"><label>${deck[2].Alt16}</label><br>
    <input type="radio" name="resp-3" id="alt32"><label>${deck[2].alternativa17}</label><br>
    <input type="radio" name="resp-3" id="alt33"><label>${deck[2].alternativa18}</label><br>
    `
    
    loadRecord()
}