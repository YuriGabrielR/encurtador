//variáveis
const btnEncurtar = document.querySelector('#encurtar');
const copiar = document.querySelector('#copiar');
const limpar = document.querySelector('#limpar');

function encurtar(){
    const url = document.querySelector('.url-input').value;
//validação da URL
    if(!url){
        alert("Insira uma URL válida para encurtar!");
        return
    }

//Headers da API
    const headers ={
        "Content-Type":"application/json",
        "apiKey": "70858349a8dd46318c52eb4bc55b981f"
    }
    

    //Requisição
    const urlRequest ={
        destination:url,
        domain:{fullName:"rebrand.ly"}
    }
    
    fetch("https://api.rebrandly.com/v1/links", {
        method:"POST",
        headers: headers,
        body:JSON.stringify(urlRequest)
    })
        .then(response => response.json())
        .then(json =>{
            let input = document.querySelector('.url-input');
            input.value =json.shortUrl;
        });

}

btnEncurtar.addEventListener('click', encurtar)

//Copia a URL
function Copy(){
    let input = document.querySelector('.url-input');
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);
}
copiar.addEventListener('click', Copy);


//Deleta a URL
function limparUrl(){
    let input = document.querySelector('.url-input');
    input.value='';
}

limpar.addEventListener('click', limparUrl);
