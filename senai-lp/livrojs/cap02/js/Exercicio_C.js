const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit",(e) =>{
    const produto= frm.inProduto.value
    const valor = Number(frm.inValor.value);

    const total =(( valor * 2) + valor * 0.5);
   

    resp1.innerText = `Produto : ${produto.toFixed(2)}`
    resp2.innerText = `Total R$: ${total.toFixed(2)}`


    e.preventDefault()
})
