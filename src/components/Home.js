import React from 'react';
import logo from '../logo.svg';

function Home(props) {
	return(
		<>
		<h1>This is {props.title}</h1>
		<img src={logo} alt="react logo" width="150" height="150"/>
		</>
	);
}

export default Home;