import React from "react";

function Loading(props) {
	return (
		<div className="d-flex align-items-center my-3">
			<strong>Loading...</strong>
			<div
				className="spinner-border text-danger ms-auto"
				role="status"
				aria-hidden="true"
			></div>
		</div>
	);
}

export default Loading;
