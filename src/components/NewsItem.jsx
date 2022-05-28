import React from "react";
import TextLink from "./TextLink";

const getDateString = (dateTimeStr) => {
	return new Date(dateTimeStr).toDateString();
};

function NewsItem({ item }) {
	return (
		<div className="card mb-4">
			{item.urlToImage && (
				<img className="card-image-top" src={item.urlToImage} alt={item.title} />
			)}
			<div className="card-body">
				<h5>
					<TextLink value={item.title} url={item.url} />
				</h5>
				<TextLink value={item.content} url={item.url} />
				<div className="mt-2 d-flex align-items-center">
					<small>
						<strong>published at {getDateString(item.publishedAt)}</strong>
					</small>
					<div
						className="ms-auto"
						style={{
							padding: "0.25rem 0.5rem",
							background: "#ededed",
							borderRadius: "0.25rem",
							display: "inline-block",
							color: "#424242",
						}}
					>
						<small>{item.source.name}</small>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewsItem;
