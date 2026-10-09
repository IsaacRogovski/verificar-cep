
const botao = document.querySelector("#botao")
const inputs = [
    document.querySelector("#logradouro"),
    document.querySelector("#bairro"),
    document.querySelector("#uf"),
    document.querySelector("#localidade")
]

botao.addEventListener("click", async function () {
    const cep = document.querySelector("#cep").value;

    const url = `https://viacep.com.br/ws/${cep}/json`;

    const resp = await fetch(url);
    const dados = await resp.text();
    const endereço = JSON.parse(dados)
    console.log(endereço)
    inputs[0].value = endereço.logradouro
    inputs[1].value = endereço.bairro
    inputs[2].value = endereço.uf
    inputs[3].value = endereço.localidade

})

