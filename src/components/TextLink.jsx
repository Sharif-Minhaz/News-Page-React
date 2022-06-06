import React from "react";

function TextLink({ url, value }) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			style={{ color: "#424242", textDecoration: "none" }}
		>
			{value}
		</a>
	);
}

export default TextLink;
