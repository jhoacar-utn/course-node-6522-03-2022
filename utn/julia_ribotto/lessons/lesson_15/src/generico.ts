
function imprimir<AnyType>(msg:AnyType) : void {
    console.log(msg);
}

imprimir<number>(12);
imprimir<string>("12");
imprimir<string[]>(["strings","en","array"])