import React from 'react';
import logo from '../logo.svg';

function About(props){
	return(
		<>
		<h1>This is {props.title}</h1>
		<img src={logo} width="150" height="150"/>
		</>
	);
}

export default About;