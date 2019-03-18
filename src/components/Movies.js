import React, {Component} from 'react';

import Movie from './Movie';

class Movies extends Component {

	state = {
		movies: [
			{age: 20, name:"the lord of the ring"},
			{age: 95, name:"the name of the wing"},
			{age: 66, name:"the spartan"}
		],
		title: "Listado de películas"
	}

	changeAge =()=>{
		
		/*this.setState({
			movies: [
				{age: 10, name:"the lord of the ring"},
				{age: 85, name:"the name of the wing"},
				{age: 56, name:"the spartan"}
			],
		})

		console.log(this.state.movies)	*/


		const newState = this.state.movies.map((movie)=>{
			const temporalUser = movie;
			temporalUser.age -= 10;
			return temporalUser
		})
		this.setState({
			newState
		})

		console.log(this.state.movies)
	}

	render(){
		return(
			<div>
			<button onClick={this.changeAge}>cambiar</button>
			<h1>{this.state.title}</h1>
				<br/>
				{
					this.state.movies.map((movie, i)=>{
						return <Movie age={movie.age} key={i}> {movie.name} </Movie>
					})
				}	
				
			</div>
		)
	}
}

export default Movies;