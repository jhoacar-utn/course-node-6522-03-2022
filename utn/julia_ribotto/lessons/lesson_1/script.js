

//alert("Se debe crear la logica en el archivo script.js");

// function handleCalculate() {
//     // let coin = document.getElementById("coin_1").value;
//     // let multiplier = document.getElementById("multiplier_1").value;

//     // let result = coin*multiplier;

//     // console.log(coin,multiplier,result);

//     // document.getElementById("response_total").setAttribute("value", result);

//     //empiezo a resolver
//     /*const coin_1 = document.getElementById("coin_1").value;
//     const coin_2 = document.getElementById("coin_2").value;
//     const coin_3 = document.getElementById("coin_3").value;
//     const coin_4 = document.getElementById("coin_4").value;

//     let multiplier_1 = document.getElementById("multiplier_1").value;
//     let multiplier_2 = document.getElementById("multiplier_2").value;
//     let multiplier_3 = document.getElementById("multiplier_3").value;
//     let multiplier_4 = document.getElementById("multiplier_4").value;

//     let coins_array = [coin_1,coin_2,coin_3,coin_4];
//     let multiplier_array = [multiplier_1,multiplier_2,multiplier_3,multiplier_4]

//     console.log(coins_array,multiplier_array);*/

//     const coins = document.querySelectorAll('div.coins')
//     console.log(coins);
// }


// document.getElementById("calculate").addEventListener("click", handleCalculate);


/* LOGIC COPY

let coins = [2,22,3,2];
let multipliers = [2,22,4,1]

function sortCoinIndex(coins) {
    let coin_box = [...coins];
    let arr_coin_indexes = [];

    let i = 0;

    while (i<coin_box.length) {
        let max_index = Math.max(...coin_box);

        max_index = coin_box.indexOf(max_index);
        arr_coin_indexes.push(max_index);

        coin_box[max_index] = 0;
        i++
    }

    return arr_coin_indexes

}

function maxCalculator(arg1,arg2,sort) {
    let arg2_copy = [...arg2];
    let arr_results = [];
    let arr_ordered_indexes = sort; //me da un array con los indexes en orden ascendente de las monedas
    let result = 0;

    for (let i=0;i<arr_ordered_indexes.length;i++) {

        let max_multiplier = Math.max(...arg2_copy);
        let index_of_max_multiplier = arg2.indexOf(max_multiplier)
        let result = max_multiplier*arg1[arr_ordered_indexes[i]];

        arr_results.push(result);
        arg2_copy[index_of_max_multiplier] = 0;

    }

    for(let i2=0; i2<arr_results.length; i2++) {
        result += arr_results[i2];
    }


    console.log("Array of results: " + arr_results,"Result: " + result)
    return arr_results,result
    
}

 sortCoinIndex(coins);  //maxCalculator(coins,multipliers,sortCoinIndex));
console.log(coins,multipliers);
maxCalculator(coins,multipliers,sortCoinIndex(coins));

*/


