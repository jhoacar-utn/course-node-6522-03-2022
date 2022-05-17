function imprimir<AnyType>(msg:AnyType):void {
    console.log(msg);

}

imprimir<number>(1);
imprimir<string>("texto a imprimir")
