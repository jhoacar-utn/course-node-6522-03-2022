//hook
import {useState} from 'react';

function MiFuncionComponente() {

    const [contador, setContador] = useState(0);

    const handleClick = function() {
        console.log("Clicked it");
        
        //Método que actualiza estado y dispara re-renderizado
        setContador(contador+1);
    }

    return (
        <div>
            Hola desde MiFuncionComponente
            <div>
                Esto es un botón incremental:
            </div>
            <div>
                <span id="numero">{contador}</span>
                <button onClick={handleClick}>Incrementar</button>
            </div>
        </div>
    );
}
  
export default MiFuncionComponente;
  