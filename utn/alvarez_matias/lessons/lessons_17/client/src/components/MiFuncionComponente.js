import React,{useState} from "react";

function MiFuncionComponente() {
  
    const [contador, setContador] = useState(0)

    const handleClick = function () {
        setContador(contador+1)
    }

  return (
    <div>
      Hola Desde mi Funcion Componente
      <div>
          Esto es un boton incrementar
      </div>
      <div>
          <span id="numero">{contador}</span>
          <button onClick={handleClick}>incrementar</button>
      </div>
    </div>
  );
}

export default MiFuncionComponente;
