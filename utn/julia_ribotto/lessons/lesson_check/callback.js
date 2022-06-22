//Asincronia

//Callbacks
function changeContent(input) {
    let texto = document.getElementById("welcome");

    texto.innerText = input;
}

function changeColor(id,color) {
    let element = document.getElementById(id);
    
    element.style.backgroundColor = color;
}

function calculator(text,id,color,callback1,callback2) {
    callback1(text);
    callback2(id,color);
}

calculator("Hallo","shape","blue",changeContent,changeColor);

/*
app.get("/home",(req,res)=>{
    res.send("hola");
})
*/