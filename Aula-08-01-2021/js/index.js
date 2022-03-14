function cadastrar(){
  let username = document.getElementById("username").value
  let username = document.getElementById("password").value
  
  localStorage.setItem(username, password)

  document.getElementById("status").textContent = `O usuario: ${username} foi cadastrado.`

  console.log(`O usuario: ${username}foi cadastrado.`)
}

function validar(){
    let username = document.getElementById("usrname").value
    let password = document.getElementById("usrname").value

    if(localStorage.getItem("username") == password){
        document.getElementById("status").textContent= `Usuario e senha corretos.`
    }else{
        document.getElementById("status").textContent = `Usuario ou senha incorretos.`   
    }

    console.log("Função validar...")
}