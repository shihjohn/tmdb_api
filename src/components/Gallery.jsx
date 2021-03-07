import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Gallery.scss";

class Gallery extends Component {
  state = {};
  getReleaseDate(date) {
    const d = new Date(date);
    const month = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const releaseDate = `${d.getFullYear()} ${month[d.getMonth()]}`;
    return releaseDate;
  }
  render() {
    return (
      <div className="app-main wrapper">
        <h2 className="app-main-title">Popular Movie</h2>
        <TransitionGroup className="app-main-gallery">
          {this.props.movies.map((movie) => (
            <CSSTransition key={movie.id} classNames="fade" timeout={500}>
              <Link
                className="movie"
                to={{
                  pathname: `/movie/${movie.id}`,
                  state: { movie: movie },
                }}
              >
                {movie.poster_path != null ? (
                  <LazyLoadImage
                    effect="blur"
                    className="movie-image"
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                  />
                ) : (
                  <div className="movie-image-notfound"></div>
                )}
                <span className="movie-rate">
                  {Math.ceil(movie.vote_average * 10) + "%"}
                </span>
                <span className="movie-title">
                  {movie.title.length > 20
                    ? movie.title.substring(0, 20) + "..."
                    : movie.title}
                </span>
                <span className="movie-date">
                  {this.getReleaseDate(movie.release_date)}
                </span>
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
