import React, { Component } from 'react';

import User from './User'


class Users extends Component {

	state = { // 3
		users: [
			{name: "Jhon", age: 20},
			{name: "Jill", age: 25}
		],
		title: "User List"
	}


	//Arrow_functions 
	/* 
		nombreFuncion = () >{
	
		}
	*/

	makemeyounger = () =>{ //4 arrowFunctions
		// this.state.users[0].age -= 10 // Normalmente se hace así // error mutation
		// this.setState({ // se le pasa un objeto // virtual dom 
		// 	users: [
		// 		{name: "Jhon", age: 10},
		// 		{name: "Jill", age: 15}
		// 	]
		// })
		// console.log(this.state.users) // setState actualmente hace un proceso syncrono

		const newState = this.state.users.map((user)=>{
			const tempUser = user;
			tempUser.age -= 10;
			return tempUser
		});

		this.setState({
			newState
		});

	}


	render(){
		return(
			<div>
			<br/>
			<button onClick={this.makemeyounger /* () se ejecuta al instante */}>10 años menos</button>
				<h1>{this.state.title}</h1>
			{
				this.state.users.map((user, i)=>{
					return <User age={user.age} key={i}>{user.name}</User>
				})

			}		
			
			{/* primer parte
				<User age={this.state.users[0].age} > {this.state.users[0].name} </User>
				<User age={this.state.users[1].age} > {this.state.users[1].name} </User>

			*/}

				
			

			</div>
		)
	}
}

export default Users;