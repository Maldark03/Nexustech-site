function logar() {
    
    
    var login = document.getElementById('user').value
    var senha = document.getElementById('pass').value

    if(login == 'usuarioAdmin' && senha =='senhaAdmin'){
        alert(" Login Efetuado com Sucesso!");
        location.href="Loja virtual.html";
    }else{
        alert(" Usuário ou senha incorretos.");
    }
}