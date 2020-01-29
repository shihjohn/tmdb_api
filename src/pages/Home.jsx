import React, { Component } from "react";
import Gallery from "../components/Gallery";
import axios from "axios";
import "./Home.scss";
import logo from "../logo.svg";

const CONFIG = {
  API_KEY: "6ed12e064b90ae1290fa326ce9e790ff"
};
class Home extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    this.getPopularMovie();
  }
  getPopularMovie() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${CONFIG.API_KEY}`
      )
      .then(res => this.setState({ movies: res.data.results }))
      //.then(console.log(this.state.movies))
      .catch(err => console.error(err));
  }
  getSearchMovie(search) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${CONFIG.API_KEY}`
      )
      .then(res => this.setState({ movies: res.data.results }))
      .then(console.log(this.state.movies))
      .catch(err => console.error(err));
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
        <header className="app-header">
          <div className="app-header-wrapper">
            <img className="logo" src={logo} alt="logo" width="60" />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
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
        </header>
        <Gallery movies={this.state.movies} />
      </div>
    );
  }
}

export default Home;
