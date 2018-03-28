import React, { Component } from "react";

const withClass2 = (WrappedComponent, className) => {
	// return a stateful component in HOC
	return class extends Component {
		render() {
			return (
				<div className={className}>
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	};
};

// return a functional component in HOC
/*
	const withClass2 = (WrappedComponent, className) => {
		return (props) => (
			<div className={className}>
				<WrappedComponent {...props} />
			</div>
		);
	};
*/

export default withClass2;