import React from "react";

// passing ref and work with it using react forward ref
const TotalResultInfo = React.forwardRef((props, ref) => {
	return (
		<div ref={ref} className="d-flex">
			<p className="text-black-50">{props.totalRes} result found</p>
			<p className="text-black-50 ms-auto">
				{props.page} page of {props.totalPage}
			</p>
		</div>
	);
});

export default TotalResultInfo;
