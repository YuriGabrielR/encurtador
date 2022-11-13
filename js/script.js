//variáveis
const btnEncurtar = document.querySelector('#encurtar');

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


