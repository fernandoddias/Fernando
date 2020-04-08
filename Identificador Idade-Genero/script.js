function descobrir() {  //sempre em letra minuscula. onclick="descobrir()"> 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) { // verifica se p fano(txtano) está vazia (comprimento=length) ou se o numero digitádo é maior que o ano atual.
        window.alert ('[ERRO] Verifique os dados e tente de novo')
    } else {
        var fsex = document.getElementsByName('radsex') 
        //seletor do sexo que foi marcado (existem dois seletores o primeiro é [0] Masculino segundo é [1] feminino)
        //se tivessa mais seletores (radio) segue sequência
        var idade = ano - Number (fano.value) // o valor digitado em txtano recebido por na var fano
        var genero = '' // variavel vazia vai receber de acordo com if else
        var img = document.createElement('img')
        img.setAttribute ('id','foto') // inclusão de imagens dirto no JS sem usar HTML.
        if (fsex[0].checked) { //checked verifica qual radio foi marcado
            genero = 'Genero Masculino'
            if (idade >=0 && idade < 3) {
                // bebe
                img.setAttribute('src', "imagens/bebemenino.png")
            } else if (idade < 12) {
                // criança
                img.setAttribute('src', "imagens/criançamenino.png")
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', "imagens/homemjovem.png")
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', "imagens/homemadulto.png")
            } else {
                // idoso
                img.setAttribute('src', "imagens/homemidoso.png")
            }
        } else if (fsex[1].checked) {
            genero = 'Genero Feminino'
            if (idade >=0 && idade < 3) {
                // bebe
                img.setAttribute('src', "imagens/bebemenina.png")
            } else if (idade < 12) {
                // criança
                img.setAttribute('src', "imagens/criançamenina.png")
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', "imagens/mulherjovem.png")
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', "imagens/mulheradulto.png")
            } else {
                // idoso
                img.setAttribute('src', "imagens/mulheridoso.png")
            }
        }
        res.style.textAlign = 'center' // formatação direto no JS
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos.`
        res.appendChild(img) // adicionar elemento
    }
}