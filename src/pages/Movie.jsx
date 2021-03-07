import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import "./Movie.scss";

class Movie extends Component {
  state = {
    activeMovie: [],
    inProp: false,
  };
  componentDidMount() {
    this.getMovie();
    window.scrollTo(0, 0); // Scroll to top on page change with React Router
  }
  getMovie() {
    const movie_id = this.props.location.state.movie.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
      .then((res) => this.setState({ activeMovie: res.data }))
      .catch((err) => console.log(err));
  }
  getReleaseYear = () => {
    let releaseYear = new Date(this.state.activeMovie.release_date);
    let year = releaseYear.getFullYear();
    return year;
  };
  getTime = () => {
    let runtime = this.state.activeMovie.runtime;
    let time = `${Math.floor(runtime / 60)}h ${runtime % 60}min `;
    return time;
  };
  render() {
    return (
      <CSSTransition in={true} appear={true} classNames="fade" timeout={500}>
        <div className="movie">
          <header
            className="movie-header"
            style={{
              height: 300,
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${this.props.location.state.movie.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="wrapper">
              <Link to="/">
                <FaArrowLeft className="movie-header-icon" />
              </Link>
            </div>
          </header>
          <main className="movie-main wrapper">
            <div className="movie-main-head">
              <img
                className="movie-main-head-img"
                alt={this.state.activeMovie.title}
                src={
                  "https://image.tmdb.org/t/p/w154/" +
                  this.state.activeMovie.poster_path
                }
              />
              <h1>{this.state.activeMovie.title}</h1>
              <p className="movie-main-head-details">
                {this.getReleaseYear()}&nbsp;•&nbsp;
                {Math.ceil(this.state.activeMovie.vote_average * 10)}% User
                Score
              </p>
              <p className="movie-main-head-details">{this.getTime()}</p>
            </div>
            <div className="movie-main-body">
              <h2>Overview</h2>
              <p>{this.state.activeMovie.overview}</p>
            </div>
          </main>
        </div>
      </CSSTransition>
    );
  }
}

export default Movie;
