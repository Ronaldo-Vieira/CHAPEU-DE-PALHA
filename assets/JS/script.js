function cardapio(){
    window.location.href = "#menu-cardapio"
};
function cima(){
    window.location.href = "#titulo-head"
}
window.onload = function(){
    document.querySelector('.comprar').addEventListener("click", function() {
        window.alert("Você adicionou um item ao carrinho !")
    });
}
function adicionar(){
    window.alert("Você adicionou um novo item ao carrinho !");
}
function menu_head(){
    if(document.querySelector("#nav-head").style.display == "flex"){
        document.querySelector("#nav-head").style.display = "none";
    } else{
        document.querySelector("#nav-head").style.display = "flex";
    }
}
function menu_card(){
    if(document.querySelector("#cont-nav").style.display == "flex"){
        document.querySelector("#cont-nav").style.display = "none";
    } else{
        document.querySelector("#cont-nav").style.display = "flex";
    }
}
function crepe() {
    //Alteração do titulo
    document.querySelector("#title-id0").innerText = "Banana + Ortelan"
    document.querySelector("#title-id1").innerText = "Banana + Nutela"
    document.querySelector("#title-id2").innerText = "Carne Seca"
    document.querySelector("#title-id3").innerText = "Frutas Vermelhas" 
    
    //Sumir Pratos
    var prato4 = document.querySelector("#prato4")
    document.querySelector("#prato5").style.display = "none"
    document.querySelector("#prato6").style.display = "none"
    document.querySelector("#prato7").style.display = "none"

    prato4.style.display = "none"
    // Sumir Ingredientes
    document.querySelector("#ingredientes0").style.display = "none"
    document.querySelector("#ingredientes1").style.display = "none"
    document.querySelector("#ingredientes2").style.display = "none"
    document.querySelector("#ingredientes3").style.display = "none"
 
    //Seleção de imagem
    let img_prato0 = document.querySelector("#img-prato0")
    let img_prato1 = document.querySelector("#img-prato1")
    let img_prato2 = document.querySelector("#img-prato2")
    let img_prato3 = document.querySelector("#img-prato3")
    
    img_prato0.src = "assets/imagens/CREPE/crep0.jpg"
    img_prato1.src = "assets/imagens/CREPE/crep1.jpg"
    img_prato2.src = "assets/imagens/CREPE/crep2.jpg"
    img_prato3.src = "assets/imagens/CREPE/crep3.jpg"

    //Alteração do tamanho das imagens dos pratos
    img_prato0.style.width = "300px"
    img_prato1.style.width = "300px"
    img_prato2.style.width = "300px"
    img_prato3.style.width = "300px"

    //Alteração de preço
    document.querySelector('#preço0').innerText = "R$10.00" 
    document.querySelector('#preço1').innerText = "R$15.00" 
    document.querySelector('#preço2').innerText = "R$18.50" 
    document.querySelector('#preço3').innerText = "R$20.90" 

}
function refri(){
    //Alteração do titulo
    document.querySelector("#title-id0").innerText = "Antartica"
    document.querySelector("#title-id1").innerText = "Coca-Cola"
    document.querySelector("#title-id2").innerText = "Fanta"
    document.querySelector("#title-id3").innerText = "Fanta Uva" 
    document.querySelector("#title-id4").innerText = "Sprite"

    //Sumir Pratos
    document.querySelector("#prato4").style.display = "inline"
    document.querySelector("#prato5").style.display = "none"
    document.querySelector("#prato6").style.display = "none"
    document.querySelector("#prato7").style.display = "none"

    // Sumir Ingredientes
    document.querySelector("#ingredientes0").style.display = "none"
    document.querySelector("#ingredientes1").style.display = "none"
    document.querySelector("#ingredientes2").style.display = "none"
    document.querySelector("#ingredientes3").style.display = "none"
    document.querySelector("#ingredientes4").style.display = "none"

    //Seleção das imagens
    let img_prato0 = document.querySelector("#img-prato0")
    let img_prato1 = document.querySelector("#img-prato1")
    let img_prato2 = document.querySelector("#img-prato2")
    let img_prato3 = document.querySelector("#img-prato3")
    let img_prato4 = document.querySelector("#img-prato4")
    
    //Alteração da largura
    img_prato0.style.width = "250px"
    img_prato1.style.width = "250px"
    img_prato2.style.width = "250px"
    img_prato3.style.width = "250px"
    img_prato4.style.width = "250px"
    
    //Alteração do src
    img_prato0.src = "assets/imagens/REFRI/refri0.jpg"
    img_prato1.src = "assets/imagens/REFRI/refri1.jpg"
    img_prato2.src = "assets/imagens/REFRI/refri2.jpg"
    img_prato3.src = "assets/imagens/REFRI/refri3.jpg"
    img_prato4.src = "assets/imagens/REFRI/refri4.jpg"


    //Alteração de preço
    document.querySelector('#preço0').innerText = "R$3.00" 
    document.querySelector('#preço1').innerText = "R$4.00" 
    document.querySelector('#preço2').innerText = "R$3.50" 
    document.querySelector('#preço3').innerText = "R$3.80" 
    document.querySelector('#preço4').innerText = "R$4.00" 
}
function pizza(){

    //Alteração do titulo
    document.querySelector("#title-id0").innerText = "Frango com Catupiry"
    document.querySelector("#title-id1").innerText = "Portuguesa"
    document.querySelector("#title-id2").innerText = "Nordestina"
    document.querySelector("#title-id3").innerText = "Calabresa" 
    document.querySelector("#title-id4").innerText = "Quatro Queijos"
    
    //Prato que volta a aparecer
    document.querySelector("#prato4").style.display = "inline"
   
    //Sumir Pratos
    document.querySelector("#prato5").style.display = "none"
    document.querySelector("#prato6").style.display = "none"
    document.querySelector("#prato7").style.display = "none"

    // Sumir Ingredientes
    document.querySelector("#ingredientes0").style.display = "none"
    document.querySelector("#ingredientes1").style.display = "none"
    document.querySelector("#ingredientes2").style.display = "none"
    document.querySelector("#ingredientes3").style.display = "none"
    document.querySelector("#ingredientes4").style.display = "none"

    //Seleção das imagens
    let img_prato0 = document.querySelector("#img-prato0")
    let img_prato1 = document.querySelector("#img-prato1")
    let img_prato2 = document.querySelector("#img-prato2")
    let img_prato3 = document.querySelector("#img-prato3")
    let img_prato4 = document.querySelector("#img-prato4")
    
    //Alteração da largura
    img_prato0.style.width = "400px"
    img_prato1.style.width = "400px"
    img_prato2.style.width = "400px"
    img_prato3.style.width = "400px"
    img_prato4.style.width = "400px"
    
    //Alteração do src
    img_prato0.src = "assets/imagens/PIZZA/pizza0.jpg"
    img_prato1.src = "assets/imagens/PIZZA/pizza1.jpg"
    img_prato2.src = "assets/imagens/PIZZA/pizza2.jpg"
    img_prato3.src = "assets/imagens/PIZZA/pizza3.jpg"
    img_prato4.src = "assets/imagens/PIZZA/pizza4.jpg"


    //Alteração de preço
    document.querySelector('#preço0').innerText = "R$33.00" 
    document.querySelector('#preço1').innerText = "R$45.00" 
    document.querySelector('#preço2').innerText = "R$29.90" 
    document.querySelector('#preço3').innerText = "R$43.00" 
    document.querySelector('#preço4').innerText = "R$22.00" 
}
function sobremesa(){
    
    //Alteração do titulo
    document.querySelector("#title-id0").innerHTML = "Sorvete </br>de Morango "
    document.querySelector("#title-id1").innerText = "Brownie"
    document.querySelector("#title-id2").innerHTML = "Geleia de Frutas </br> Vemelhas"
    document.querySelector("#title-id3").innerText = "Torta de Limão" 
    
    //Sumir Pratos
    document.querySelector("#prato4").style.display = "none"
    document.querySelector("#prato5").style.display = "none"
    document.querySelector("#prato6").style.display = "none"
    document.querySelector("#prato7").style.display = "none"

    // Sumir Ingredientes
    document.querySelector("#ingredientes0").style.display = "none"
    document.querySelector("#ingredientes1").style.display = "none"
    document.querySelector("#ingredientes2").style.display = "none"
    document.querySelector("#ingredientes3").style.display = "none"

    //Seleção das imagens
    let img_prato0 = document.querySelector("#img-prato0")
    let img_prato1 = document.querySelector("#img-prato1")
    let img_prato2 = document.querySelector("#img-prato2")
    let img_prato3 = document.querySelector("#img-prato3")
    
    //Alteração da largura
    img_prato0.style.width = "300px"
    img_prato1.style.width = "300px"
    img_prato2.style.width = "300px"
    img_prato3.style.width = "300px"
    
    //Alteração do src
    img_prato0.src = "assets/imagens/SOBREMESA/sobre0.jpg"
    img_prato1.src = "assets/imagens/SOBREMESA/sobre1.jpg"
    img_prato2.src = "assets/imagens/SOBREMESA/sobre2.jpg"
    img_prato3.src = "assets/imagens/SOBREMESA/sobre3.jpg"


    //Alteração de preço
    document.querySelector('#preço0').innerText = "R$12.00" 
    document.querySelector('#preço1').innerText = "R$15.00" 
    document.querySelector('#preço2').innerText = "R$16.50" 
    document.querySelector('#preço3').innerText = "R$18.00" 

}
function hamburgue(){
    
    //Alteração do titulo
    document.querySelector("#title-id0").innerText = "Nami-Swan"
    document.querySelector("#title-id1").innerText = "Ussop-Burg"
    document.querySelector("#title-id2").innerText = "Chooper-Swan"
    document.querySelector("#title-id3").innerText = "Burg-Brook" 
    document.querySelector("#title-id4").innerText = "Burg-Zoro" 
    document.querySelector("#title-id5").innerText = "Burg-Luffy" 
    document.querySelector("#title-id6").innerText = "Foxy-Burg" 
    document.querySelector("#title-id7").innerText = "Senji-Burg" 
    
    //Aparcer Pratos
    document.querySelector("#prato0").style.display = "inline"
    document.querySelector("#prato1").style.display = "inline"
    document.querySelector("#prato2").style.display = "inline"
    document.querySelector("#prato3").style.display = "inline"
    document.querySelector("#prato4").style.display = "inline"
    document.querySelector("#prato5").style.display = "inline"
    document.querySelector("#prato6").style.display = "inline"
    document.querySelector("#prato7").style.display = "inline"

    // Aparecer Ingredientes
    document.querySelector("#ingredientes0").style.display = "inline"
    document.querySelector("#ingredientes1").style.display = "inline"
    document.querySelector("#ingredientes2").style.display = "inline"
    document.querySelector("#ingredientes3").style.display = "inline"
    document.querySelector("#ingredientes4").style.display = "inline"
    document.querySelector("#ingredientes5").style.display = "inline"
    document.querySelector("#ingredientes6").style.display = "inline"
    document.querySelector("#ingredientes7").style.display = "inline"

    //Seleção das imagens
    let img_prato0 = document.querySelector("#img-prato0")
    let img_prato1 = document.querySelector("#img-prato1")
    let img_prato2 = document.querySelector("#img-prato2")
    let img_prato3 = document.querySelector("#img-prato3")
    let img_prato4 = document.querySelector("#img-prato4")
    let img_prato5 = document.querySelector("#img-prato5")
    let img_prato6 = document.querySelector("#img-prato6")
    let img_prato7 = document.querySelector("#img-prato7")
    
    //Alteração da largura
    img_prato0.style.width = "300px"
    img_prato1.style.width = "300px"
    img_prato2.style.width = "300px"
    img_prato3.style.width = "300px"
    img_prato4.style.width = "300px"
    img_prato5.style.width = "300px"
    img_prato6.style.width = "300px"
    img_prato7.style.width = "300px"
    
    //Alteração do src
    img_prato0.src = "assets/imagens/HAMB/burg0.jpg"
    img_prato1.src = "assets/imagens/HAMB/burg1.jpg"
    img_prato2.src = "assets/imagens/HAMB/burg2.jpg"
    img_prato3.src = "assets/imagens/HAMB/burg3.jpg"
    img_prato4.src = "assets/imagens/HAMB/burg4.jpg"
    img_prato5.src = "assets/imagens/HAMB/burg5.jpg"
    img_prato6.src = "assets/imagens/HAMB/burg6.jpg"
    img_prato7.src = "assets/imagens/HAMB/burg7.jpg"


    //Alteração de preço
    document.querySelector('#preço0').innerText = "R$22.00" 
    document.querySelector('#preço1').innerText = "R$28.00" 
    document.querySelector('#preço2').innerText = "R$18.00" 
    document.querySelector('#preço3').innerText = "R$25.00" 
    document.querySelector('#preço4').innerText = "R$27.80" 
    document.querySelector('#preço5').innerText = "R$35.00" 
    document.querySelector('#preço6').innerText = "R$12.50" 
    document.querySelector('#preço7').innerText = "R$20.00" 

}