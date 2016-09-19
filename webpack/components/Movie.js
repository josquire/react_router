import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.editMovie = this.editMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.state = { movie:  {} };
  }

  componentWillMount() {
    $.ajax({
      url: `/api/movies/${this.props.params.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( movie => {
      this.setState({ movie });
    }).fail( data => {
      console.log(data);
    });
  }

  editMovie() {
   this.props.history.push(`/movies/${this.state.movie.id}/edit`);
  }


  deleteMovie(id) {
    $.ajax({
      url: `/api/movies/${this.props.params.id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( () => {
      this.props.history.push('/');
    }).fail ( data => {
      console.log(data);
    });
    // make ajax call to delete the movie
    // on ajax success - this.props.history.push('/');
  }


  render() {
    let { title, year, description, in_theaters} = this.state.movie;
    return(
      <div>
        <div className="row">
          <div className="col s12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{ title }</span>
                <p>{ description }</p>
                <p>Year: { year }</p>
                <p>In Theaters: { in_theaters ? 'Yes' : 'No' }</p>
              </div>
              <div className="card-action">
                <button className='btn'onClick={this.editMovie}>Edit</button>
                <button className='btn red' onClick={this.deleteMovie}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;
