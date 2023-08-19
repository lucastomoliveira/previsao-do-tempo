

const key = "0d52c0e204d24878c43959e1fc11195b"

function buttonclick () {
    const variavelcidade  = document.querySelector(".city").value /*o .value quer dizer que esta pedindo somente o valor desse input*/

    searchcity(variavelcidade)
}

async /*async indica a função que iremos usar um servidor*/function searchcity(variavelcidade) {

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${variavelcidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    /** o sinal "$" indica paara o codigo que o o valor que sera dado sera uma variavel em js */
    /* await faz com que o site espera para abrir ate o servidor responder*/
    /** json é um formato */
    putdatainscreen(dados)
}

function putdatainscreen(dados){
    console.log(dados)
    document.querySelector(".name-city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "ºC"
    document.querySelector(".prevision-text").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade de " + dados.main.humidity + "%"
    document.querySelector(".img-prevision").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    //math.floor faz com que o numero nao fique quebrado, arredondando


}