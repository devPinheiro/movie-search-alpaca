import React, { PureComponent } from "react";
import { hot } from "react-hot-loader";
import MovieList from "../Components/MovieList/MovieList";
import SearchInput from "../Components/SearchInput/SearchInput";

import "./Main.css";

class App extends PureComponent {
  state = {
    movies: [],
    searchQuery: ""
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=f3a05026119d09f84c9aaef927a18ac2&language=en-US&page=1"
    )
      .then(response => response.json())
      .then(res => this.setState({ movies: res.results }));
  }
  render() {
    // debugger;
    const { movies, searchQuery } = this.state;
    const searchResult = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="main">
        <h1>The Movies Theatre</h1>
        <SearchInput handleChange={this.handleChange} />
        <MovieList movies={searchResult} />
      </div>
    );
  }
}
export default hot(module)(App);
