import React from "react";

import Aux from "../../hoc/Auxx";
import classes from "./Cockpit.css";

const cockpit = (props) => {
	let btnClass = classes.Button;
	const assignedClasses = [];

	if (props.showPersons) {
		 btnClass = [classes.Button, classes.Red].join(" ");
	}

  if (props.persons.length <=2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <=1) {
    assignedClasses.push(classes.bold);
  }

	return (
		<Aux>{/* <> *//* --> fragment in React 16.2. Do the same as Aux tag.*/}
			<h1>{props.appTitle}</h1>
	    <p className={assignedClasses.join(" ")}>This is working good!</p> 
	    <button 
	      className={btnClass}
	    	onClick={props.clicked}>Toggle Persons
	    </button>
	    <button onClick={props.login}>Log In</button>
	  </Aux>/* </> */
	);
};

export default cockpit;