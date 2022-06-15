
function sumaNumeros (num1:number, num2:number):number {
    return num1 + num2
}
function sumaStrings(num1:string, num2:string):string{
    return num1 + num2
}

function imprimirMensaje(num:number):void{
    console.log(num)
}

function imprimirMensajeString (mensaje:string):void{
    console.log(mensaje)
}

function imprimir<AnyType>(msg:AnyType):void{
    console.log(msg)
}

imprimir<number>(1)
imprimir<string>("sdadas")
imprimir<string[]>(["df", "dsg", "dgdgs"])