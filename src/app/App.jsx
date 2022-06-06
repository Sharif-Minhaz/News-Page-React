import React, { Component } from "react";
import "./App.css";
import News, { newsCategory } from "../news";

import Header from "../components/Header";
import NewsList from "../components/NewsList";
import Pagination from "../components/Pagination";
import TotalResultInfo from "../components/TotalResultInfo";
import Loading from "../components/Loading";

const news = new News(newsCategory.technology);

class App extends Component {
	state = {
		data: {},
		isLoading: true,
	};

	componentDidMount() {
		news.getNews()
			.then((data) => {
				this.setState({ data, isLoading: false });
			})
			.catch((error) => {
				console.error(error);
				alert("Something went wrong!");
				this.setState({ isLoading: false });
			});
	}

	errorHandler = (err) => {
		console.error(err);
		alert("Something went wrong!");
		this.setState({ isLoading: false });
	};

	next = () => {
		if (this.state.data.isNext) {
			this.setState({ isLoading: true });
		}
		news.next()
			.then((data) => {
				this.setState({ data, isLoading: false });
			})
			.catch((err) => this.errorHandler(err));
	};

	prev = () => {
		if (this.state.data.isPrevious) {
			this.setState({ isLoading: true });
		}
		news.prev()
			.then((data) => {
				this.setState({ data, isLoading: false });
			})
			.catch((err) => this.errorHandler(err));
	};

	handlePageChange = (value) => {
		this.setState({
			data: {
				...this.state.data,
				currentPage: Number.parseInt(value),
			},
		});
	};

	gotoPage = () => {
		this.setState({ isLoading: true });
		news.setCurrentPage(this.state.data.currentPage)
			.then((data) => {
				this.setState({ data, isLoading: false });
			})
			.catch((err) => this.errorHandler(err));
	};

	changeCategory = (category) => {
		this.setState({ isLoading: true });
		news.changeCategory(category)
			.then((data) => {
				this.setState({ data, isLoading: false });
			})
			.catch((err) => this.errorHandler(err));
	};

	render() {
		const { articles, isPrevious, isNext, category, totalResults, currentPage, totalPage } =
			this.state.data;
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 offset-md-3">
						<Header changeCategory={this.changeCategory} category={category} />
						<TotalResultInfo
							totalRes={totalResults}
							page={currentPage}
							totalPage={totalPage}
						/>
						{this.state.isLoading ? (
							<Loading />
						) : (
							<div>
								<NewsList news={articles} />
								<Pagination
									next={this.next}
									prev={this.prev}
									isPrevious={isPrevious}
									isNext={isNext}
									currentPage={currentPage}
									totalPage={totalPage}
									handlePageChange={this.handlePageChange}
									gotoPage={this.gotoPage}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
