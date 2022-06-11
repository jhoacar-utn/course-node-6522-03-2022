import {Component} from "react";


class MiClaseComponente extends Component {

    constructor(props){
        super(props);

        //Atributo de mi componente, que se inicializa en el constructor
        this.state = {
            contador : 0
        }

        //Para asignar métodos a una clase (en React)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(props) {
        //console.log(props);

        //Como el estado es inmutable, para actualizar el valor de mi estado, 
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render(){
        return (
            <div>
                Hola desde MiClaseComponente
                <div>Esto es un boton incremental:</div>
                <div id="contador">
                    <span id="contador_numero">{this.state.contador}</span>
                    <button onClick={this.handleClick}>Incrementar</button>
                </div>
            </div>
        )
    }
}

export default MiClaseComponente;