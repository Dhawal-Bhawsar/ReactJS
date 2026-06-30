import React from 'react'
import { Bookmark } from 'lucide-react'

const MovieCard = ({details}) => {
  return (
    <div>
        <div className="card">
            <div className="top">
                <img src={details.poster} alt={details.title} className="poster-img" />
            
                {/* Updated Save Button with Lucide React Bookmark */}
                <button className="save-btn">
                    Save <Bookmark size={10} />
                </button>
            </div>

            <div className="center">
                <div className="title-section">
                    <h3>{details.title}</h3>
                    <span> {details.releaseDate} </span>
                </div>
                <h2>Directed by {details.director}</h2>
               
                <div className="tags">
                    <h4>{details.tags[0]}</h4>
                    <h4>{details.tags[1]}</h4>
                </div>`
            </div>

            <div className="bottom">
                <h3>⭐ {details.rating}</h3>
                <button className="watch-btn">Watch Trailer</button>
            </div>
        </div>
      
    </div>
  )
}

export default MovieCard
