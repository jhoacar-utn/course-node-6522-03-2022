import { useState } from "react";

function MiFuncionComponente() {

    const [contador, setContador] = useState(0)

    let numero = 10;

    const hadleClick = function()
    {
        console.log("le di click");
        setContador(contador+1);
    }

    return (
        <div>
            Hola desde MiComponente
            <div>
                Esto es un boton incremental
            </div>
            <div>
                <span id="numero">{numero}</span>
                <button onClick={hadleClick}>Incrementar</button>
            </div>
        </div>
    );
}

export default MiFuncionComponente;