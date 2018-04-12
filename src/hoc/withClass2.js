import React, { Component } from "react";

const withClass2 = (WrappedComponent, className) => {
	// Using React.forwardRef API  [React 16.3]
	const WithClass2 = class extends Component {
		render() {
			return (
				<div className={className}>
					<WrappedComponent ref={this.props.forwardedRef} {...this.props} />
				</div>
			);
		}
	};

	return React.forwardRef((props, ref) => {
		return <WithClass2 {...props} forwardedRef={ref} />
	});
};

// return a stateful component in HOC
/*
	const withClass2 = (WrappedComponent, className) => {	
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
*/


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