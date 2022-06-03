import { Component } from "react";

class Miclasecomponente extends Component{
constructor(props){
super(props)
this.state={
    contador:0
}
this.handleclick=this.handleclick.bind(this)
}
handleclick(props){

//this.state.contador++
this.setState({
    contador:this.state.contador + 1
})
}


render(){
    return <div>Hola desde miclasecomponente
    <div>Esto es un boton incremental</div>
    <div id="contador">
    <span id="contador_numero">{this.state.contador} </span>
    <button onclick={this.handleclick}>Incrementar</button>
</div>
    </div>
}
}
export default Miclasecomponente;