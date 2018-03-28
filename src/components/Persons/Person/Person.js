import React, { Component } from 'react';

import classes from "./Person.css";
import Aux from "../../../hoc/Auxx";
import withClass2 from "../../../hoc/withClass2";

class Person extends Component {
	constructor(props) {
	  super(props);
	  console.log("[Person.js] Inside constructor()", props);
	}

	componentWillMount() {
		console.log("[Person.js] Inside componentWillMount()");
	}

	componentDidMount() {
		console.log("[Person.js] Inside componentDidMount()");
	}

	render() {
		console.log("[Person.js] Inside render()");
	/*const rnd = Math.random();
		if (rnd > 0.7) {
			throw new Error("Something went wrong");
		}*/

		return (
			<Aux>
				<p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
			</Aux>
		);	

		/* To Tez Działa!
			return [
				<p key="1" onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>,
				<p key="2">{this.props.children}</p>,
				<input key="3" type="text" onChange={this.props.changed} value={this.props.name} />	
			];	
		*/			
	}
}

export default withClass2(Person, classes.Person);