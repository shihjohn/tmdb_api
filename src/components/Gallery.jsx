import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import "./Gallery.scss";
class Gallery extends Component {
  state = {};
  render() {
    return (
      <div className="app-main wrapper">
        <h2 className="app-main-title">Popular Movie</h2>
        <TransitionGroup className="app-main-gallery">
          {this.props.movies.map(movie => (
            <CSSTransition key={movie.id} classNames="fade" timeout={500}>
              <Link
                className="movie"
                to={{
                  pathname: `/movie/${movie.id}`,
                  state: { movie: movie }
                }}
              >
                <img
                  className="movie-image"
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                />
                <span className="movie-rate">
                  {Math.ceil(movie.vote_average * 10) + "%"}
                </span>
                <span className="movie-title">{movie.title}</span>
                <span className="movie-date">{movie.release_date}</span>
              </Link>
            </CSSTransition>
          ))}
          <CSSTransition key="9999" classNames="fade" timeout={500}>
            <div className="movie"></div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default Gallery;
