function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var ano1 = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(ano1.value.length == 0 || ano1.value > ano) {
        alert('Error! tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(ano1.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if(fsex[0].checked){

             var genero = 'Homem'
             if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src' , 'criançaH.png')
             }else if (idade < 21){
                //jovem
                img.setAttribute('src' , 'jovemH.png')
             }else if (idade < 50){
                //adulto
                img.setAttribute('src' , 'adultoH.png')
             }else{
                // idoso
                img.setAttribute('src' , 'velhoH.png')
             }


        }else{

             var genero = 'Mulher'

            if(idade >= 0 && idade <12){
                //criança
                img.setAttribute('src' , 'criançaM.png')
            }else if (idade < 21 ){
                //jovem
                img.setAttribute('src' , 'jovemM.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src' , 'adultoM.png')
            }else{
                //idosa
                img.setAttribute('src' , 'idosaM.png')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
        
    }
}