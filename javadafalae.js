let i= 0;
let message = "Nunca deu tão certo_"
let max = message.length;

function writeText () {     
    setTimeout(function () {    
        document.getElementById('subtitle').innerHTML += message[i];          
        i++;                    
        if (i < message.length) {          
            writeText();             
        }   
    }, 70)
}

function submitForm() {
    alert('Sua denúncia foi enviada! O Rio Agradece!!!')
}


writeText();