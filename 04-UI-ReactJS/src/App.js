import React, { Component } from 'react';
import { movies } from './movies.json';
import MovieForm from './components/MovieForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies
    }
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  removeMovie(index) {
    this.setState({
      movies: this.state.movies.filter((e, i) => {
        return i !== index;
      })
    });
  }

  handleAddMovie(movie) {
    this.setState({
      movies: [...this.state.movies, movie]
    });
  }

  render() {
    const movies = this.state.movies.map((movie, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{movie.title}</h3>
              <span className="badge badge-pill badge-primary ml-2">
                {movie.year}
              </span>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeMovie.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });

    return(
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <h2>Add your favorite Movies</h2>
              <MovieForm onAddMovie={this.handleAddMovie}></MovieForm>
            </div>
            <div className="col-md-8">
              <h3>List:</h3>
              <div className="row">
                {movies}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
