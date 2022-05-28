import React, { Component } from "react";
import "./App.css";
import { newsCategory } from "../news";

import Header from "../components/Header";
import NewsList from "../components/NewsList";
import Pagination from "../components/Pagination";
import TotalResultInfo from "../components/TotalResultInfo";
import Loading from "../components/Loading";

const fakeNews = [
	{
		title: "Title",
		content: "Content",
		url: "https://linktonews.com",
		urlToImage: "https://linktoimage.com",
		publishedAt: "published date and time",
		source: {
			name: "CNN",
		},
	},
];

class App extends Component {
	state = {};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 offset-md-3">
						<Header category={newsCategory.business} />
						<TotalResultInfo totalRes={0} page={1} totalPage={100} />
						<Loading />
						<NewsList news={fakeNews} />
						<Pagination />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
