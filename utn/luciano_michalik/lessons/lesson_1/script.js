alert("WELCOME TO YOUR NIGHTMARE");
let numberOfCoins = 4
let numberOfMultipliers = 4

const calculateFunction = () =>{
    let coins = [document.querySelector("#coin_1").value,document.querySelector("#coin_2").value,document.querySelector("#coin_3").value,document.querySelector("#coin_4").value]
    let sortedCoins = [document.querySelector("#coin_1").value,document.querySelector("#coin_2").value,document.querySelector("#coin_3").value,document.querySelector("#coin_4").value]
    let sortedMultipliers = [document.querySelector("#multiplier_1").value,document.querySelector("#multiplier_2").value,document.querySelector("#multiplier_3").value,document.querySelector("#multiplier_4").value]
    let totalResponse = 0

    sortedCoins.sort(function(a, b){return a - b}) //Ascendent sort of coins
    sortedMultipliers.sort(function(a, b){return a - b}) //Ascendent sort of multipliers
    
    for(let i=0 ; i<numberOfCoins ; i++)
    {
        totalResponse += sortedCoins[i]*sortedMultipliers[i]

        let pos = coins.indexOf(sortedCoins[i])//Find the position 
        if(pos == 0)
            response_1.value = sortedMultipliers[i]
        if(pos == 1)
            response_2.value = sortedMultipliers[i]
        if(pos == 2)
            response_3.value = sortedMultipliers[i]
        if(pos == 3)
            response_4.value = sortedMultipliers[i] 
    }

    response_total.value = totalResponse
    

    
    // console.log(coins)
    // console.log(sortedCoins)

   

    //response_1.value = 

}

