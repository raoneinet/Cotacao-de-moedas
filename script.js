
//Faz requisição a API
async function getCurrency() {
    const url = "https://economia.awesomeapi.com.br/json/last/usd-brl,eur-brl,cad-brl,gbp-brl"
    const urlRequest = await fetch(url)
    const json = await urlRequest.json()

    if (json.cod != 404) {
        showRates({
            usd: json.USDBRL.ask,
            cad: json.CADBRL.ask,
            eur: json.EURBRL.ask,
            gbp: json.GBPBRL.ask
        })
    } else {
        alert("Erro! Por favor, atualizar a página.")
    }
}

//Exibe dados na tela de moedas específicas
function showRates(json) {
    document.querySelector(".usd span").innerHTML = `R$ ${json.usd}`
    document.querySelector(".cad span").innerHTML = `R$ ${json.cad}`
    document.querySelector(".eur span").innerHTML = `$R$ ${json.eur}`
    document.querySelector(".gbp span").innerHTML = `R$ ${json.gbp}`

}

getCurrency()
