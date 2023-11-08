
if(document.readyState =="loading"){
    document.addEventListener("DOMContentLoaded", ready)
}else{
    ready()
}

function ready(){
const RemoverProdutos = document.getElementsByClassName("remover")

for(var i = 0; i < RemoverProdutos.length; i++){
RemoverProdutos[i].addEventListener("click",function(event){
    event.target.parentElement.parentElement.parentElement.remove()
    UpdateTotal()
    })
}
const qtdProduct = document.getElementsByClassName("Quantidade")

for(var i = 0; i < qtdProduct; i++){
    qtdProduct[i].addEventListener("change", UpdateTotal() )
}

}
var totalAmount ="00,00"



function UpdateTotal(){
     totalAmount = 0
const produtoscarrinho =  document.getElementsByClassName("produtoscarrinho")
    for(var i=0; i< produtoscarrinho.length; i++){
        
        const PrecoProduto = produtoscarrinho[i].getElementsByClassName("productPrice")[0].innerText.replace("R$","").replace(",",".") 
        const productQuantity = produtoscarrinho[i].getElementsByClassName("Quantidade")[0].value

       
       
        totalAmount += PrecoProduto*productQuantity 
       
    }
    document.querySelector(".Valortotal").innerText =   totalAmount  + ",00"
    document.querySelector(".Price").innerText = "R$" + totalAmount  + ",00"


}

function final(){
    swal("Sua Copmra foi finalizada com sucesso!");
}





