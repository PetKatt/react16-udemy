import React from "react";

// HOC which is ITSELF a Functional Component!
const withClass = (props) => (
	<div className={props.classes}>
		{props.children}
	</div>
);

export default withClass;