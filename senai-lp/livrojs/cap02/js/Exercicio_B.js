const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")


frm.addEventListener("submit",(e)=>{
    const tempo= Math.ceil(Number(frm.inTempo.value)/15)
    const valor = Number(frm.inValor.value)

    const total = (valor * tempo);
    
    resp1.innerText = `Total R$: ${total.toFixed(2)}`
    
    e.preventDefault()
})