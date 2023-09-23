function Conversao(){
    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL').then(resposta => {
        return resposta.json()
    }).then(economia => {

        valor = document.getElementById("dolar").innerHTML
        console.log(valor)
        var sResult = valor.replace("$", "")
        console.log(sResult)
        dolar = parseFloat(sResult)
        console.log(dolar)

        conversao = economia.USDBRL.bid*dolar;

        const total = Number(conversao.toFixed(2));
        document.getElementById("real").innerHTML= "R$" + total
    })
}

function Conversao2(){
    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL').then(resposta => {
        return resposta.json()
    }).then(economia => {

        for(i = 1; i <13; i++){
            valor = document.getElementById(`dolar${i}`).innerHTML
            console.log(valor)
            var sResult = valor.replace("$", "")
            console.log(sResult)
            dolar = parseFloat(sResult)
            console.log(dolar)

            conversao = economia.USDBRL.bid*dolar;

            const total = Number(conversao.toFixed(2));
            document.getElementById(`real${i}`).innerHTML= "R$" + total;
        }
    })
}
