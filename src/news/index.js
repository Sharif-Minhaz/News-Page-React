import axios from "../utils/axios";

export const newsCategory = {
	all: "top",
	technology: "technology",
	science: "science",
	business: "business",
	entertainment: "entertainment",
	general: "general",
	health: "health",
	sports: "sports",
};

const maxItemPerPage = 30;

export default class News {
	constructor(category) {
		this._category = category;
		this._searchTerm = "";
		this._pageSize = maxItemPerPage;
		this._totalPage = 1;
		this._currentPage = 1;
	}

	async getNews() {
		try {
			const { data } = await axios.get(this._getUrl());
			let calculateTotalPage = Math.ceil(data.totalResults / this._pageSize);
			console.log(calculateTotalPage);
			this._totalPage = calculateTotalPage === 0 ? 1 : calculateTotalPage;
			return {
				articles: data.articles,
				isNext: this._isNext(),
				isPrevious: this._isPrevious(),
				totalPage: this._totalPage,
				currentPage: this._currentPage,
				category: this._category,
				totalResults: data.totalResults,
			};
		} catch (err) {
			console.error(err);
		}
	}

	next() {
		if (this._isNext()) {
			this._currentPage++;
			return this.getNews();
		}
		return false;
	}

	prev() {
		if (this._isPrevious()) {
			this._currentPage--;
			return this.getNews();
		}
		return false;
	}

	setCurrentPage(pageNumber) {
		if (pageNumber < 1 && pageNumber > this._totalPage) {
			throw new Error("Invalid Page Number");
		}
		this._currentPage = pageNumber;
		return this.getNews();
	}

	changeCategory(category) {
		this._category = category;
		this._currentPage = 1;
		return this.getNews();
	}

	search(term) {
		this._searchTerm = term;
		return this.getNews();
	}

	_getUrl() {
		let url = "/?language=en";
		if (this._category && this._category !== "top") url += `&category=${this._category}`;
		if (this._searchTerm) url += `&q=${this._searchTerm}`;
		if (this._pageSize) url += `&pageSize=${this._pageSize}`;
		if (this._searchTerm) url += `&pageSize=${this._pageSize}`;
		if (this._currentPage) url += `&page=${this._currentPage}`;

		return url;
	}

	_isNext() {
		return this._currentPage < this._totalPage;
	}

	_isPrevious() {
		return this._currentPage > 1;
	}
}
