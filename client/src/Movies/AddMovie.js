import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const movieForm = {
  id: Date.now(),
  title: "",
  director: "",
  metasore: "",
  stars: [],
};

function AddMovie({ getMovieList }) {
  const [newMovie, setNewMovie] = useState(movieForm);
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "stars") {
      // e.target.value.split(",");
      setNewMovie({ ...newMovie, [e.target.name]: e.target.value.split(",") });
    } else {
      setNewMovie({
        ...newMovie,

        // unpacks current newMovie state contents
        [e.target.name]: e.target.value, // creates a key from the input field's name (e.target.name), and then insert the value (e.target.value) to complete the key:value pair
      });
    }
    // You're going to have to do something like.. "if the e.target.name is [stars], break the string down after each comma(,) and place the result into [stars] key"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5100/api/movies", newMovie)
      .then((res) => {
        console.log("this new data", res);
        setNewMovie(res.data);
        // getMovieList();
      })
      .catch((err) => console.log(err));
  };
  console.log("setnewMovie", newMovie);

  return (
    <>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={newMovie.title}
        />
        <input
          type="text"
          name="director"
          placeholder="director"
          onChange={handleChange}
          value={newMovie.director}
        />
        <input
          type="text"
          name="metascore"
          placeholder="metascore"
          onChange={handleChange}
          value={newMovie.metascore}
        />
        <input
          type="text"
          name="stars"
          placeholder="stars"
          onChange={handleChange}
          value={newMovie.stars}
        />
        <button>Update</button>
      </form>
    </>
  );
}

export default AddMovie;
