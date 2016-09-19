import React from 'react';

const AddMovie = ({ handleSubmit }) => {
  let input;
  return(
    <div className='center'>
      <input  ref={ node => { input = node }} />
      <button className='btn'
              onClick={ () => {
                handleSubmit(input.value)
                input.value = '';
              }}>
                Add Movie
      </button>
    </div>
  );
}

export default AddMovie;
