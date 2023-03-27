
var categorias = []

document.addEventListener("DOMContentLoaded", function(){ 

    tracoHome()
    setCategoria()

})


function tracoHome(){
    console.log('homeTraco')
    
    if( window.location.href == "http://127.0.0.1:5501/Ex04/pages/home.html" ){
        document.getElementById('homeTraco').classList.remove('hiden')
        
    } else{
        document.getElementById('homeTraco').classList.add('hiden')
        
    } 
    
}


function setCategoria(){
    $.ajax({
        url:`http://localhost:3000/categorias`,
        type: 'GET',
        header: {
            "accept": "application/json"
        },
        success: function(categs){
            console.log(categs)
            categorias = categs  
            pegarMidia()      
        },
        error: function(erro){
            console.log(erro)
        }
    })

}


function pegarMidia(){

    $.ajax({
        url:`http://localhost:3000/noticias`,
        type: 'GET',
        header: {
            "accept": "application/json"
        },
        success: function(data){
            console.log(data)

            let htmlTab = ""
            // success: function(noticias){
            // console.log(noticias)
            // for( let noticia of noticia ) outra forma de fazer a opção abaixo.
            // noticia = usado no lugar de (data[i]), que impede um [i] infinito.

            for( let i = 0; i < data.length; i++ ){
                htmlTab += 
            `<li>
            <div class="position1" style="background-image:url(${data[i].imagem});">
            <a href="../pages/interna.html" class="bannerImg1">
              <h2>
              ${data[i].dataPublicacao.split('-').reverse().join('/')}
              </h2>
                <div class="textBanner1">
                  <h1>
                  ${data[i].titulo}
                  </h1>
                  <h3>
                    ${findCateg(data[i].categoria)}
                  </h3>
                  <h4>
                    ${data[i].autor}
                  </h4>   
                </div>
            </a>
        </div>
        </li>`
            }
            document.getElementById('infosPublicacoes').innerHTML = htmlTab



        },
        error: function(erro){
            console.log(erro)
        }
    })

}


function filtrarCategoria(){

    let filtrarCate = document.getElementById('selectCategorias').value

    $.ajax({
        url: `http://localhost:3000/categorias`,
        type: 'GET',
        header: {
            "accept": "application/json"
        },
        success: function(data){
            console.log(data)

            let htmlTab = ""
            for( let i = 0; i < data.length; i++ ){
                if( data[i].categoria.id == filtrarCate )
                htmlTab += 
            `<ul>
            <li>
            <div class="position1">
            <a href="../pages/interna.html" class="bannerImg1">
              <h2>
           
              </h2>
                <div class="textBanner1">
                  <h1>
                  
                  </h1>
                  <h3>
                    ${data[i].categoria }
                  </h3>
                  <h4>
                    Autor: Millena Sousa
                  </h4>   
                </div>s
            </a>
        </div>
        </li>
        </ul>`
            }
            document.getElementById('infosPublicacoes').innerHTML = htmlTab
            // document.querySelector('.noticias').innerHTML = htmlTab
            // usado para pegar id, class etc.. do mesmo modo que no css com . ou #



        },
        error: function(eror){
            console.log(erro)
        }
    })

}

function findCateg(id){

    for( let categ of categorias ){
        if( categ.id == id ){
            return categ.nome
        }
    }
}


function btnAdd(){

    window.location.href = "http://127.0.0.1:5501/Ex04/pages/adicionar.html";
    

}
