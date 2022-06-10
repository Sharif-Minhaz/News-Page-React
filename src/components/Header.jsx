import React, { Component } from "react";
import shortId from "shortid";
import { newsCategory } from "../news";

class Header extends Component {
	state = {
		searchTerm: "",
	};

	searchBarRef = React.createRef();

	componentDidMount() {
		this.searchBarRef.current.focus();
	}

	handleChange = (e) => {
		this.setState({ searchTerm: e.target.value });
	};

	handleKeyPress = (e) => {
		e.key === "Enter" && this.props.search(this.state.searchTerm);
	};

	render() {
		const { category, changeCategory } = this.props;
		return (
			<div className="my-4">
				<h1 className="mb-4" style={{ fontWeight: 300 }}>
					Block Buster Headlines
				</h1>
				<input
					ref={this.searchBarRef}
					type="search"
					placeholder="Type anything &amp; press enter to search"
					className="form-control"
					value={this.state.searchTerm}
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
				/>
				<div className="my-4">
					{newsCategory &&
						Object.keys(newsCategory).map((item) =>
							category === newsCategory[item] ? (
								<button
									key={shortId.generate()}
									className="btn btn-warning me-2 mb-2"
									onClick={() => changeCategory(newsCategory[item])}
								>{`#${newsCategory[item]}`}</button>
							) : (
								<button
									key={shortId.generate()}
									onClick={() => changeCategory(newsCategory[item])}
									className="btn btn-light me-2 mb-2"
								>{`#${newsCategory[item]}`}</button>
							)
						)}
				</div>
			</div>
		);
	}
}

export default Header;
