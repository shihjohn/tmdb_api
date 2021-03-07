import React, { Component } from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import axios from "axios";
import "./Home.scss";

class Home extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.getPopularMovie();
  }
  getPopularMovie() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((res) => this.setState({ movies: res.data.results }))
      //.then(console.log(this.state.movies))
      .catch((err) => console.error(err));
  }
  getSearchMovie(search) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((res) => this.setState({ movies: res.data.results }))
      .then(console.log(this.state.movies))
      .catch((err) => console.error(err));
  }
  handleSearch(e) {
    const search = e.target.value;
    if (search) {
      this.getSearchMovie(search);
    } else {
      this.getPopularMovie();
    }
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-header-search wrapper">
          <div className="app-header-search-container">
            <span className="app-header-search-icon"></span>
            <input
              type="text"
              className="app-header-search-input"
              onChange={this.handleSearch.bind(this)}
              placeholder="Search"
            />
          </div>
        </div>
        <Gallery movies={this.state.movies} />
      </div>
    );
  }
}

export default Home;
