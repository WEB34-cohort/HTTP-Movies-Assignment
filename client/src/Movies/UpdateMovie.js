import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const initialMovie = {
  title: "",
  director: "",
  metascore: "",
  stars: [],
};

function UpdateMovie(props) {
  const { id } = useParams();
  const [updateMovie, setUpdateMovie] = useState(initialMovie);

  useEffect(() => {
    axios.get(`http://localhost:5100/api/movies/${id}`).then((res) => {
      setUpdateMovie(res.data);
    }).catch(err => console.log(err));
  }, []);
  
  console.log("new movie", updateMovie);

  const changeHandler = (e) => {
    e.persist();
    setUpdateMovie({ ...updateMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5100/api/movies/${id}`, updateMovie)
      .then((res) => console.log(res));
  };

  console.log("updatemovie", props);

  return (
    <>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={changeHandler}
          value={updateMovie.title}
        />
        <input
          type="text"
          name="director"
          placeholder="director"
          onChange={changeHandler}
          value={updateMovie.director}
        />
        <input
          type="text"
          name="metascore"
          placeholder="metascore"
          onChange={changeHandler}
          value={updateMovie.metascore}
        />
        <input
          type="text"
          name="stars"
          placeholder="stars"
          onChange={changeHandler}
          value={updateMovie.stars}
        />
        <button>Update</button>
      </form>
    </>
  );
}
export default UpdateMovie;
