import React, { Component } from "react";
import { newsCategory } from "../news";

class Header extends Component {
	state = {
		searchTerm: "",
	};

	handleChange = (e) => {
		this.setState({ searchTerm: e.target.value });
	};

	handleKeyPress = (e) => {};

	render() {
		const { category } = this.props;
		return (
			<div className="my-4">
				<h1 className="mb-4" style={{ fontWeight: 300 }}>
					Block Buster Headlines
				</h1>
				<input
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
								<button className="btn btn-warning me-2 mb-2">{`#${newsCategory[item]}`}</button>
							) : (
								<button className="btn btn-light me-2 mb-2">{`#${newsCategory[item]}`}</button>
							)
						)}
				</div>
			</div>
		);
	}
}

export default Header;