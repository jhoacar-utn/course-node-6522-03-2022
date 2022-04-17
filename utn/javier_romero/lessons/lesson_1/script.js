let startScript = document.getElementById("calculate")
startScript.addEventListener("click",handleOperation) /*search for the most significant name*/
let numDinamic =[]
let numStatic=[]
let sortArr = []
let result = 0

function handleOperation(){
    let coins =  document.querySelectorAll(".coins input")
    let multip= document.querySelectorAll(".multipliers input")

    numStatic=[]
    numDinamic = []

    for (let item of coins) {
        if(item.value === ""){
            numStatic.push(0)
        }else{numStatic.push(Math.abs(parseInt(item.value)))} /*look for possible problems with negative numbers */
      }
      for (let elem of multip) {
        if(elem.value === ""){
            numDinamic.push(0)
        }else{numDinamic.push(Math.abs(parseInt(elem.value)))}
      }

      sortArr = sortArrayByMaxMultiplication(numStatic,numDinamic)
      pushInnerHtmlInResponse(sortArr)
      result= multiplicateArrayNumbers(numStatic,sortArr)
      document.getElementById("response_total").value =result
}

function sortArrayByMaxMultiplication(arr1,arr2){
    let arrAux = []
    let arrStatic = [...arr1]
    let arrDinamic = [...arr2]

    for(let i = 0; i<arrStatic.length;i++){
        /*Find the position of the maximum number */
        let posSta = arrStatic.indexOf(Math.max(...arrStatic))
        let posDin = arrDinamic.indexOf(Math.max(...arrDinamic))

        arrStatic.splice(posSta,1, 0) /*replace the number with zero, so as not to lose the position */
        arrAux[posSta] = Math.max(...arrDinamic) /*insert the element in the array at its position */
        arrDinamic.splice(posDin,1,0) /*replace the number with zero, so as not to lose the position */
    }
    return arrAux
}
function multiplicateArrayNumbers(arr1,arr2){
    let acc = 0
    for(let i = 0; i< arr1.length;i++)acc +=arr1[i]*arr2[i];
    return acc
}

function pushInnerHtmlInResponse(arr){
    let response = document.querySelectorAll(".response input")
    let i = 0 /*search a best option in this increment */
    for(let item of response){
        item.value=arr[i]
        i++
    }
}