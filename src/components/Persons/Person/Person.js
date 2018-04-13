import React, { Component } from 'react';
import PropTypes from "prop-types";

import classes from "./Person.css";
import Aux from "../../../hoc/Auxx";
import withClass2 from "../../../hoc/withClass2";
import { AuthContext } from "../../../containers/App";

class Person extends Component {
	constructor(props) {
	  super(props);
	  console.log("[Person.js] Inside constructor()", props);
	  this.inputElement = React.createRef();
	}

	componentWillMount() {
		console.log("[Person.js] Inside componentWillMount()");
	}

	componentDidMount() {
		console.log("[Person.js] Inside componentDidMount()");
		if ( this.props.position === 1) {
			this.inputElement.current.focus();
		}
	}

	focus() {
		this.inputElement.current.focus();
	}

	render() {
		console.log("[Person.js] Inside render()");
	/*const rnd = Math.random();
		if (rnd > 0.7) {
			throw new Error("Something went wrong");
		}*/

		return (
			<Aux>
				<AuthContext.Consumer>
					{auth => auth ? <p>I'm authenticated!</p> : null}
				</AuthContext.Consumer>
				<p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
				<p>{this.props.children}</p>
				<input
					ref={this.inputElement} 
					type="text" 
					onChange={this.props.changed} 
					value={this.props.name} />
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

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	position: PropTypes.number,
	changed: PropTypes.func
};

export default withClass2(Person, classes.Person);