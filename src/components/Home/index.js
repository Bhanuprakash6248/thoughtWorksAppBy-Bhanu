import { Component } from "react";

import Header from "../Header";
import Book from "../Book";
import "./index.css";
class Home extends Component {
  state = { searchInput: "", bookList: [], title: "" };

  InputValueChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };
  componentDidMount() {
    this.fetchBooks();
  }
  fetchBooks = async () => {
    const { bookList } = this.state;
    const { searchInput } = this.state;
    const response = await fetch(
      `https://openlibrary.org/search.json?q=<your-query>`
    );
    const data = await response.json();
    const BookDoc = data.docs;
    console.log(BookDoc);
    this.setState({ bookList: BookDoc });
  };

  render() {
    const { searchInput, bookList } = this.state;
    const renderHome = () => {
      return (
        <div>
          <h1>Search Books</h1>
          <input
            type="search"
            className="input"
            value={searchInput}
            onChange={this.InputValueChange}
            placeholder="Enter a Title"
          />
        </div>
      );
    };
    const renderBookList = () => {
      const { bookList } = this.state;
      return (
        <div className="div-con">
          {bookList.map((each) => (
            <Book eachBook={each} key={each.id} />
          ))}
        </div>
      );
    };

    return (
      <div>
        <Header />
        {renderHome()}
        {renderBookList()}
      </div>
    );
  }
}
export default Home;
