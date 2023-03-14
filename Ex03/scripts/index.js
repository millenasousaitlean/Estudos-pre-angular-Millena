function ButtonForm(){
    let formName = document.getElementById('inputName').value.trim()
    let formEmail = document.getElementById('inputEmail').value.trim()
    let formText = document.getElementById('inputText').value.trim()
    let erroForm = false

    if( formName.length == '' ){
    document.getElementById('inputName').classList.add('inputErrado')
    erroForm = true

    } else {
    document.getElementById('inputName').classList.remove('inputErrado')
    }
    if( formEmail.length == '' ){
    document.getElementById('inputEmail').classList.add('inputErrado')
    erroForm = true

    } else {
    document.getElementById('inputEmail').classList.remove('inputErrado')
    }
    if( formText.length == '' ){
    document.getElementById('inputText').classList.add('inputErrado')
    erroForm = true

    } else {
    document.getElementById('inputText').classList.remove('inputErrado')
    }

    if( erroForm ){
        alert('Formulário inválido')
    }else{
        alert('Formulario enviado')
    }

}