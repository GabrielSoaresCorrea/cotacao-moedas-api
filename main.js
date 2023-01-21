const botoes = document.querySelectorAll('button')
const inputEstrangeiro = document.getElementById('moeda-estrangeira')
const inputReal = document.getElementById('moeda-real')

botaoTrocarCotacao()


// colocar funcoes nos 2 inputs, pq eles tem funçoes diferentes
inputEstrangeiro.addEventListener('keypress', () => {
    trocarValorInput()
})

inputReal.addEventListener('keypress', () => {

})

// função teste para colocar dentro dos input

function trocarValorInput(){
    const inputMoedaEstrangeiro = inputEstrangeiro.value
    console.log(inputMoedaEstrangeiro)
}

// cada botão pega o seu value e puxa a api de acordo

function botaoTrocarCotacao(){
    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            botoes.forEach(botao => {
                botao.classList.remove('active')
            })
            const qualMoeda = this.value
            trocarCotacao(qualMoeda)
            botao.classList.add('active')
        })
    })
}

//fetch api da moeda selecionada e pega a media do high e low

async function trocarCotacao(moeda){
    const moedaAPI = await fetch(`https://economia.awesomeapi.com.br/last/${moeda}-BRL`)
    const moedaJSON = await moedaAPI.json()
    const moedaArray = Object.entries(moedaJSON)

    const moedaHigh = parseFloat(moedaArray[0][1].high)
    const moedaLow = parseFloat(moedaArray[0][1].low)
    const moedaMedia = (moedaHigh + moedaLow) / 2

}
