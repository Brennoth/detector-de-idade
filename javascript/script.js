function verificar(){
var sistema = new Date()
var agora = sistema.getFullYear()


//var img = document.createElement('img')//criando a imagem no javascript
//img.setAttribute('id', 'foto')//colocando o id
var fot = document.getElementById('fot')

var ano = document.getElementById('ano')
var sex = document.getElementsByName('sex')
var genero = ''
var classificação = ''

var res = document.getElementById('res')

var fano = Number(ano.value)

    if(fano == 0 || fano == '' || fano > agora || fano <= -1 || fano >= 1,1){
        window.alert("ERRO, verefique os dados e tente novamente")
    }else{
        var idade = agora - fano
        
        if(sex[0].checked){
            var genero = 'masculino'
            
            if(idade >0 && idade <=3){
                //img.setAttribute('src', '../img/bebe-menino.webp')
                //img.classList.add('bebe-menino')
                var classificação = 'bebe'
            }else if(idade <=12){
                var classificação= 'criança'
            }else if(idade <18){
                var classificação = 'adolescente'
            }else if(idade <35){
                var classificação = 'jovem adulto'
            }else if(idade <64){
                var classificação = 'adulto'
            }else if(idade <110){
                var classificação = 'idoso'
            }else if(idade >110){
                var classificação = '<br>uma idade além da capacidade de existência humana'
            }
        }else{
            var genero = 'feminino'

            if(idade >0 && idade <=3){
                //img.setAttribute('src', '../img/bebe-menina.webp')//colocar a imagem no site
                //img.classList.add('bebe-menina')//adicionando class
                var classificação = 'bebe'
            }else if(idade <=12){
                var classificação= 'criança'
            }else if(idade <18){
                var classificação = 'adolescente'
            }else if(idade <35){
                var classificação = 'jovem adulto'
            }else if(idade <64){
                var classificação = 'adulto'
            }else if(idade <110){
                var classificação = 'idoso'
            }else if(idade >110){
                var classificação = '<br>uma idade além da capacidade de existência humana'
            }
        }
        res.innerHTML = `${genero} com ${idade} anos é ${classificação}`
        //fot.appendChild(img)
    }
}