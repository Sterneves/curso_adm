const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit",(e)=>{
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const promocao = preco * 2
    
    resp1.innerText = `Medicamento: ${medicamento}`
    resp2.innerText = `Promocao R$: ${promocao.toFixed.Fixed(5)}`
    
    e.preventDefault()
})