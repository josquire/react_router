import React from 'react';
import {Link} from 'react-router';
import AddMovie from '../components/AddMovie';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayMovies = this.displayMovies.bind(this);
    this.state = { movies: [] };
  }

  componentWillMount() {
    $.ajax ({
      url: '/api/movies',
      type: 'GET',
      dataType: 'JSON'
    }).done( movies => {
      this.setState({ movies });
    }).fail (data => {
      console.log(data);
    });
  }

  handleSubmit(title) {
    $.ajax({
      url: '/api/movies',
      type: 'POST',
      dataType: 'JSON',
      data: { movies: {title} }
    }).done( movie => {
      this.setState({
        movies: [
          {...movie},
          ...this.state.movies
        ]
      });
    });
  }

  displayMovies() {
    let movies = this.state.movies.map( movie => {
      return(
      <div>
        <a href={`/movies/${movie.id}`}>  
          <div className='card'>
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} >
                        { movie.title }
              </Link>
            </li>
          </div>
        </a>
      </div>
      )
    });
    return movies;
  }

  render() {
    return (
      <div>
        <h1>All Movies</h1>
        <AddMovie handleSubmit={this.handleSubmit} />
        <ul>
        { this.displayMovies() }
        </ul>
      </div>
    )
  }
}

export default Movies;
