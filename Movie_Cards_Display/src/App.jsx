import React from 'react';
import MovieCard from './components/MovieCard';
import './App.css';

const App = () => {
const movies = [
  {
    id: 1,
    title: "Interstellar",
    releaseDate: "2014",
    director: "Christopher Nolan",
    tags: ["Sci-Fi", "Drama"],
    rating: "8.7/10",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    id: 2,
    title: "Mad Max: Fury Road",
    releaseDate: "2015",
    director: "George Miller",
    tags: ["Action", "Adventure"],
    rating: "8.1/10",
    poster: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg"
  },
  {
    id: 3,
    title: "Spider-Man: Into the Spider-Verse",
    releaseDate: "2018",
    director: "Bob Persichetti, Peter Ramsey & Rodney Rothman",
    tags: ["Animation", "Action"],
    rating: "8.4/10",
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg"
  },
  {
    id: 4,
    title: "Parasite",
    releaseDate: "2019",
    director: "Bong Joon Ho",
    tags: ["Thriller", "Drama"],
    rating: "8.5/10",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
  },
  {
    id: 5,
    title: "Everything Everywhere All at Once",
    releaseDate: "2022",
    director: "Daniel Kwan & Daniel Scheinert",
    tags: ["Sci-Fi", "Adventure"],
    rating: "7.8/10",
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg"
  },
  {
    id: 6,
    title: "Oppenheimer",
    releaseDate: "2023",
    director: "Christopher Nolan",
    tags: ["Biography", "Drama"],
    rating: "8.3/10",
    poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
  },
  {
    id: 7,
    title: "Dune: Part Two",
    releaseDate: "2024",
    director: "Denis Villeneuve",
    tags: ["Sci-Fi", "Adventure"],
    rating: "8.5/10",
    poster: "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg"
  },
  {
    id: 8,
    title: "Mickey 17",
    releaseDate: "2025",
    director: "Bong Joon Ho",
    tags: ["Sci-Fi", "Comedy"],
    rating: "6.8/10",
    poster: "https://image.tmdb.org/t/p/w500/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg"
  },
  {
    id: 9,
    title: "Superman",
    releaseDate: "2025",
    director: "James Gunn",
    tags: ["Action", "Sci-Fi"],
    rating: "7.7/10",
    poster: "https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg"
  },
  {
    id: 10,
    title: "The Batman",
    releaseDate: "2022",
    director: "Matt Reeves",
    tags: ["Action", "Crime"],
    rating: "7.8/10",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
  }
];

  return (
    <div className='parent'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} details={movie} />
      ))}
    </div>
  );
}

export default App;