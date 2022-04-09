//alert("Se debe crear la logica en el archivo script.js");

function handleCalculate() {
    // let coin = document.getElementById("coin_1").value;
    // let multiplier = document.getElementById("multiplier_1").value;

    // let result = coin*multiplier;

    // console.log(coin,multiplier,result);

    // document.getElementById("response_total").setAttribute("value", result);

    //empiezo a resolver
    /*const coin_1 = document.getElementById("coin_1").value;
    const coin_2 = document.getElementById("coin_2").value;
    const coin_3 = document.getElementById("coin_3").value;
    const coin_4 = document.getElementById("coin_4").value;

    let multiplier_1 = document.getElementById("multiplier_1").value;
    let multiplier_2 = document.getElementById("multiplier_2").value;
    let multiplier_3 = document.getElementById("multiplier_3").value;
    let multiplier_4 = document.getElementById("multiplier_4").value;

    let coins_array = [coin_1,coin_2,coin_3,coin_4];
    let multiplier_array = [multiplier_1,multiplier_2,multiplier_3,multiplier_4]

    console.log(coins_array,multiplier_array);*/

    const coins = document.querySelectorAll('div.coins')
    console.log(coins);
}


document.getElementById("calculate").addEventListener("click", handleCalculate);

