
var rankingJSON = {
    Primeiro :"Daniel",
    Segundo : "Lisbeth",
    Terceiro : "Deckard",
    Pontuação : [2575, 2011, 1982],
    obj : {
        ola : "mundo"
    } 
}

function alterarRanking(pri, seg, ter){
     rankingJSON.Primeiro = pri
     rankingJSON.Segundo = seg
     rankingJSON.Terceiro = ter
}

function criarRanking(){
    document.getElementById("ranking").innerHTML = 
    <tbody>
        <tr>
        <th>Posição</th><th>Nome</th><th>Pontuação</th>
        <tr>
            <td>Primeiro Lugar:</td><td>${rankingJSON.Primeiro}</td><td>${rankingJSON.Pontuação[1]}</td>
        </tr>
        <tr>
            <td>Segundo Lugar:</td><td>${rankingJSON.Segundo}</td><td>${rankingJSON.Pontuação[2]}</td>
        </tr>
        <tr>
            <td>Terceiro Lugar:</td><td>${rankingJSON.Terceiro}</td><td>${rankingJSON.Pontuação[3]}</td>
        </tr>
        </tr>
    </tbody>
}