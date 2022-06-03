import {useState} from 'react'

function MiFuncionComponente() {
    const [contador,setContador] =useState(0)
    useState()

    let numero=0

    const handleClick=function(){
        console.log("Le di click en incrementar MifuncionComponente")
    setContador(contador+1)
    }

    return (
      <div>
     Hola desde MiFuncionComponente
     <div>
         Esto es un boton incremental
      </div>

      <div>
          <span id="numero"{numero}></span>
          <button onClick={handleClick}>Incrementar</button>
      </div>
      </div>
    );
  }
  
  export default MiFuncionComponente;