document.addEventListener("DOMContentLoaded", function(){ 

    tracoHome()

})

function tracoHome(){
    console.log('homeTraco')
    
    if( window.location.href == "http://127.0.0.1:5501/Ex04/pages/home.html" ){
        document.getElementById('homeTraco').classList.remove('hiden')
        
    } else{
        document.getElementById('homeTraco').classList.add('hiden')
        
    } 
    
}


function buttonForm(){

    let tituloPubli = document.getElementById('inputTitulo').value.trim()
    let categoPubli = document.getElementById('selectCategoria').value.trim()
    let dataPubli = document.getElementById('inputDataPubli').value.trim()
    let autorPubli = document.getElementById('inputAutor').value.trim()
    let linkImg = document.getElementById('inputLinkImg').value.trim()
    let corpoPubli = document.getElementById('inputCorpoPubli').value.trim()
    let erroForm = false


    if( tituloPubli.length == '' ){
        document.getElementById('inputTitulo').classList.add('inputErrado')
        erroForm = true
    } else{
        document.getElementById('inputTitulo').classList.remove('inputErrado')
    }
    if( categoPubli.length == '' ){
        document.getElementById('selectCategoria').classList.add('inputErrado')
        erroForm = true
    } else{
        document.getElementById('selectCategoria').classList.remove('inputErrado')
    }
    if( dataPubli.length == '' ){
        document.getElementById('inputDataPubli').classList.add('inputErrado')
        erroForm = true
    } else{
        document.getElementById('inputDataPubli').classList.remove('inputErrado')
    }
    if( autorPubli.length == '' ){
        document.getElementById('inputAutor').classList.add('inputErrado')
        erroForm = true
    } else{
        document.getElementById('inputAutor').classList.remove('inputErrado')
    }
    if( linkImg.length == '' ){
        document.getElementById('inputLinkImg').classList.add('inputErrado')
        erroForm = true
    } else{
        document.getElementById('inputLinkImg').classList.remove('inputErrado')
    }
    if( corpoPubli.length =='' ){
        document.getElementById('inputCorpoPubli').classList.add('inputErrado')
        erroForm = true
    } else{
        document.getElementById('inputCorpoPubli').classList.remove('inputErrado')
    }

    if( erroForm ){
        alert('Formulário inválido!')
    } else {

        let novaPublicacao = {
            titulo: tituloPubli,
            categoria: Number(categoPubli),
            dataPublicacao: dataPubli,
            autor: autorPubli,
            imagem: linkImg,
            corpo: corpoPubli
        }

        $.ajax ({
            url: 'http://localhost:3000/noticias',
            type: 'POST',
            header: {
                "accept": "application/json"
            },

            dataType:'json',
            contentType: 'application/json',
            data: JSON.stringify(novaPublicacao),

            success: function(data){
                console.log(data)
            },
            error: function(erro){
                console.log(erro)
            }
        })
        window.location.href = 'http://127.0.0.1:5501/Ex04/pages/home.html'
        alert('Publicação inserida')

    }

}