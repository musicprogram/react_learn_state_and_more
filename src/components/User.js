import React from 'react';

const User = (props) =>{
	return(<div>Name: {props.children} | Age: {props.age}</div>) // 2
}

export default User;