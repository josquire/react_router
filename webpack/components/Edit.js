import React from 'react';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.cancel = this.cancel.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
    this.state = { movie: {} };
  }

  componentWillMount() {
    $.ajax({
      url: `/api/movies/${this.props.params.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( movie => {
      this.setState({ movie });
    }).fail( data => {

    });
  }

  cancel() {
    this.props.history.push(`/movies/${this.state.movie.id}`);
  }

  updateMovie(e) {
    e.preventDefault();
    let movie = { title: this.refs.title.value, description: this.refs.description.value, year: this.refs.year.value};
    $.ajax({
      url: `/api/movies/${this.props.params.id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { movie: {...movie } }
    }).done( movie => {

      this.setState({movie: movie});
      this.props.history.push(`/movies/${movie.id}`);
    }).fail( data => {
      alert('Cant update movie in Edit.js')
    });
  }

  editForm(){

      return(
        <div>
          <div className="row">
            <div className="col s12">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <input placeholder='Title' defaultValue={this.state.movie.title} ref='title'/>
                  <input placeholder='Description' defaultValue={this.state.movie.description} ref='description'/>
                  <input placeholder='Year' defaultValue={this.state.movie.year} ref='year'/>

                </div>
                <div className="card-action">
                  <button className='btn' onClick={this.cancel}>Cancel</button>
                  <button className='btn red' onClick={this.updateMovie}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

  }


  render() {
    if(this.state.movie.title){
    return(
      this.editForm()
    )
    } else {
      return (
      <div>
        loading...
      </div>
      )
    }
  }


}
export default Edit;
