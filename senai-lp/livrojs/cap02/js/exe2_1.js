// criar uma referencia ao form e ao h3 (onde será exibido a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um 'ouvinte' de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e)=>{
    const nome = frm.inNome.value; // obtém o nome digitado no form
    resp.innerText = `Olá ${nome}`; // exibe a resposta do programa
    e.preventDefault(); // vai envitar que o form envio os dados pro destino.php
});

function executar(evento) {
    const nome = frm.inNome.value; // obtém o nome digitado no form
    resp.innerText = `Olá ${nome}`; // exibe a resposta do programa no form
    evento.preventDefalt
}