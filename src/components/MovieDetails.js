import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Movie Details</h2>
      <div className="card">
        <img src={movie.image.medium} alt={movie.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{movie.name}</h5>
          <p className="card-text">{movie.summary}</p>
          <Link to={`/booking/${movie.id}`} className="btn btn-primary">Book Ticket</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
