function carregar() {
    var msg = document.getElementById('msg') // vai selecionar para manipular a mensagem que aparece na div id msg, lá no html
    /*   <div id="msg">
            Test1212
        </div>*/ 
    var img = document.getElementById('imagem') // vai selecionar para manipular a imagem que aparece na id imagem dentro da img, na div id foto
    /* <div id="foto">
            <img id="imagem" src="imagens/manha.png" alt="Foto do Dia">
        </div>*/ 
    var data = new Date() //recebe informação do dia hoje
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `<strong>Agora são ${hora} horas</strong>`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
    }
}