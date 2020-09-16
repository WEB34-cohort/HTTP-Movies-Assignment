import React from 'react';

const initialItem = {
  id: Date.now(),
  title: '',
  director: '',
  metascore: '',
  stars: []
}

function UpdateMovie() {
  return (
    <>
      <h2>Update Movie</h2>
      <form>
        <input type="text"
          name="title"
          placeholder="title"
        />
        <input type="text"
          name="director"
          placeholder="title"
        />
        <input type="text"
          name="metascore"
          placeholder="title"
        />
        <input type="text"
          name="stars"
          placeholder="title"
        />
        <button>Update</button>
        
      </form>
    </>
  )
  
}
export default UpdateMovie