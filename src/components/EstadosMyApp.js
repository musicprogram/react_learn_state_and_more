import React, {Component} from 'react';

class EstadosMyApp extends Component {
	constructor(){
		super();
		this.state = {name: "juan"};

	}
////
	render(){
		setTimeout(()=>{
			this.setState({name: "bob"})
		}, 5000)
// observar la velocidad de react , solo cambia el dato ni siquiera la etiqueta		
		return(
			<h1> hola {this.state.name}</h1>
		)
	}
}

export default EstadosMyApp;