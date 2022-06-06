import React from "react";
import NewsItem from "./NewsItem";

function NewsList({ news }) {
	return (
		<div>
			{news && news.length === 0 && <h4>There is no news available.</h4>}
			{news && news.map((item) => <NewsItem key={item.title + Date.now()} item={item} />)}
		</div>
	);
}

export default NewsList;
