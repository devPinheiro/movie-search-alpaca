import React, { PureComponent } from "react";
import { hot } from "react-hot-loader";
import Button from "../Components/Button/Button";
import Hint from "../Components/HintBox/Hint";
import MovieList from "../Components/MovieList/MovieList";
import SearchInput from "../Components/SearchInput/SearchInput";

import "./Main.css";

class App extends PureComponent {
  state = {
    movies: [],
    searchResult: [],
    searchQuery: "",
    searchHint: [],
    clearSearch: false,
    showHint: false
  };

  componentDidMount() {
    // fetch movies
    this.fetchMovies();
  }

  // fetch popular movies
  fetchMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f3a05026119d09f84c9aaef927a18ac2&language=en-US&page=1"
    )
      .then(response => response.json())
      .then(res => this.setState({ movies: res.results }));
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value, showHint: !!e.target.value });

    const filter = this.state.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    // set the autocomplete array
    this.setState({ searchHint: filter });
  };

  handleSearch = () => {
    // search for movies over the network
    if (this.state.searchQuery) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=f3a05026119d09f84c9aaef927a18ac2&language=en-US&query=${this.state.searchQuery}&page=1&include_adult=false`
      )
        .then(response => response.json())
        .then(res => this.setState({ searchResult: res.results }));
    }

    // show clear search
    this.setState({ clearSearch: true });
  };

  handleHintChange = hint => {
    this.setState({ searchQuery: hint.original_title, showHint: false });
  };

  handleClearSearch = () => {
    this.setState({ searchQuery: "", searchResult: [], clearSearch: false });
    this.fetchMovies();
  };

  render() {
    const {
      movies,
      searchResult,
      searchQuery,
      searchHint,
      showHint,
      clearSearch
    } = this.state;

    return (
      <div className="main">
        <h1>The Movies Theatre</h1>

        <div className="search-box">
          <SearchInput handleChange={this.handleChange} value={searchQuery} />
          <Button handleclick={this.handleSearch}>Search</Button>
        </div>

        {showHint && (
          <Hint hints={searchHint} handleHintChange={this.handleHintChange} />
        )}
        <div className="list-container">
          <MovieList movies={searchResult.length ? searchResult : movies} />
          {clearSearch && (
            <Button
              customClassName="button-regular"
              handleclick={this.handleClearSearch}
            >
              Clear Search
            </Button>
          )}
        </div>
      </div>
    );
  }
}
export default hot(module)(App);
