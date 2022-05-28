import React from "react";

function TotalResultInfo({ totalRes, page, totalPage }) {
	return (
		<div className="d-flex">
			<p className="text-black-50">{totalRes} result found</p>
			<p className="text-black-50 ms-auto">
				{page} page of {totalPage}
			</p>
		</div>
	);
}

export default TotalResultInfo;
