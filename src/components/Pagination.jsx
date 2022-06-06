import React, { Component } from "react";

class Pagination extends Component {
	state = {
		isEditable: false,
	};

	handleDoubleClick = () => {
		this.setState({ isEditable: !this.state.isEditable });
	};

	render() {
		const {
			next,
			prev,
			isNext,
			isPrevious,
			currentPage,
			totalPage,
			handlePageChange,
			gotoPage,
		} = this.props;
		return (
			<div className="d-flex my-5 align-items-center">
				<button
					className="btn btn-warning"
					disabled={!isPrevious}
					onClick={() => {
						prev();
					}}
				>
					Previous
				</button>
				<div className="flex-grow-1 text-center">
					{this.state.isEditable ? (
						<input
							type="number"
							value={currentPage}
							onChange={(e) => {
								const { value } = e.target;
								((value >= 1 && value <= totalPage) || value.length === 0) &&
									handlePageChange(e.target.value);
							}}
							onKeyPress={(e) => {
								if (e.key == "Enter" && e.target.value.length != 0) {
									this.setState({ isEditable: false });
									gotoPage();
								}
							}}
							title="Enter page number"
							required
						/>
					) : (
						<p
							style={{ userSelect: "none", lineHeight: "1.1" }}
							onDoubleClick={this.handleDoubleClick}
							title="Double tap to jump page"
						>
							{currentPage} of {totalPage}
							<br />
							<small>Double tap to edit</small>
						</p>
					)}
				</div>
				<button
					className="btn btn-warning ms-auto"
					disabled={!isNext}
					onClick={() => {
						next();
					}}
				>
					Next
				</button>
			</div>
		);
	}
}

export default Pagination;
