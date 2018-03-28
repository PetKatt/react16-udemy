import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id:"qwe4764", name: "Max", age: 28 },
        { id:"dsa3125", name: "Manu", age: 29 },
        { id:"csa3124", name: "Stephanie", age: 26 }
      ],
      showPersons: false
    };
    console.log("[App.js] Inside constructor", props); 
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] Inside shouldComponentUpdate()", nextProps, nextState);
    return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons;
  }*/

  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] Inside componentWillUpdate()", nextProps, nextState, this.props);
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate()");
  }
	/*switchNameHandler = (name) => {
		// DON'T DO THIS: this.state.persons[0].name = "Maksimilian";
		this.setState({
			persons: [
				{ name: name, age: 28 },
				{ name: "Manu", age: 29 },
				{ name: "Stephanie", age: 27 }
			]
		});
	}*/
  
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });

  }

	nameChangedHandler = (event, id) => {
    const persons = this.state.persons.slice();
    const personIndex = persons.findIndex(p => p.id === id);

    const person = persons[personIndex];
    person.name = event.target.value;

		this.setState({
			persons: persons
		});
	}

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    let persons = null;
    console.log("[App.js] Inside render()");

    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} 
      />;
    }
    
    return (
      <WithClass classes={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>
          Show Persons
        </button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler} 
        />
        {persons}
      </WithClass>     
    );

    /*return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does it work now?"));*/
  }

}

export default App;
