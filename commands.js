function togglemode(){
    document.body.classList.toggle("dark-mode")
    const imagem = document.querySelector(".profile-pic-img")

    if (imagem.getAttribute("src") === "./img/imagem1Light.jpg"){
        imagem.setAttribute("src", "./img/DarkProfile.png")
    }
    else{
        imagem.setAttribute("src", "./img/imagem1Light.jpg")
    }  

}