function mayorYmenor(){
    const coin1=document.getElementById('coin_1').value
    const coin2=document.getElementById('coin_2').value
    const coin3=document.getElementById('coin_3').value
    const coin4=document.getElementById('coin_4').value
    const mult1=document.getElementById('multiplier_1').value
    const mult2=document.getElementById('multiplier_2').value
    const mult3=document.getElementById('multiplier_3').value
    const mult4=document.getElementById('multiplier_4').value
    const coins = [coin1, coin2, coin3, coin4];
    const mult = [mult1, mult2, mult3, mult4];
    const mayor = Math.max.apply(null,coins)
    const menor = Math.min.apply(null,coins)
    const MulMayor = Math.max.apply(null,mult)
    const MulMenor = Math.min.apply(null,mult)
    const out_array = [0,0,0,0]

    
    //logic of solution
    
    //identify coin box
    const indexMax = coins.findIndex(function (index){
        return index == mayor
    })

    const indexMin = coins.findIndex(function (index){
        return index == menor
    })

    const valInt = valintermedio(indexMax,indexMin)

    console.log(valInt);

    function valintermedio (may,men){
    for (i =0; i<coins.length; i++){
        if (i != may && i !=men){
            valor = coins[i]
            return valor
        }
    }
    }
 
    const indexValInt = coins.findIndex(function (index){
        return index == valInt
    })
    console.log(mayor,menor,indexValInt);

    const valInt2 = valintermedio2(indexMax,indexMin,indexValInt)
    console.log(valInt2);

    function valintermedio2 (may,men,int){
        for (i =0; i<coins.length; i++){
            if (i != may && i !=men && i != int){
                valor = coins[i]
                return valor
            }
        }
        }
    const indexValInt2 = coins.findIndex(function (index){
        return index == valInt2
    })
    console.log(indexValInt2);
    
     //identify multiplier


    const indexMultMax = mult.findIndex(function (index){
        return index == MulMayor
    })

    const indexMultMin = mult.findIndex(function (index){
        return index == MulMenor
    })
    
    const MulInt = mulintermedio(indexMultMax,indexMultMin)
    console.log(MulInt);

    function mulintermedio (may,men){
        for (i =0; i<mult.length; i++){
            if (i != may && i !=men){
                valor = mult[i]
                return valor
            }
        }
        }

    const indexMultInt = mult.findIndex(function (index){
        return index == MulInt
    })

    const MulInt2 = mulintermedio2(indexMultMax,indexMultMin,indexMultInt)
    console.log(MulInt2);

    function mulintermedio2 (may,men,int){
        for (i =0; i<mult.length; i++){
            if (i != may && i !=men && i != int){
                valor = mult[i]
                return valor
            }
        }
        }

    const indexMultInt2 = mult.findIndex(function (index){
        return index == MulInt2
    })


    const insertados1 = out_array.splice(indexMax,1,MulMayor)
    const insertados2 = out_array.splice(indexMin,1,MulMenor)
    const insertados3 = out_array.splice(indexValInt,1,MulInt)
    const insertados4 = out_array.splice(indexValInt2,1,MulInt2)

    console.log(MulMayor,MulMenor,MulInt,MulInt2);
    console.log(indexMax,indexMin,indexValInt,indexValInt2);
    console.log(indexMultMax,indexMultMin,indexMultInt,indexMultInt2);
    console.log(out_array);

    const resultado = MulMayor*mayor + MulMenor*menor + MulInt*valInt + MulInt2*valInt2
    
    document.getElementById('response_1').value = out_array[0]
    document.getElementById('response_2').value = out_array[1]
    document.getElementById('response_3').value = out_array[2]
    document.getElementById('response_4').value = out_array[3]

    document.getElementById('response_total').value = resultado

  }

document.getElementById('calculate').addEventListener("click",mayorYmenor,false)