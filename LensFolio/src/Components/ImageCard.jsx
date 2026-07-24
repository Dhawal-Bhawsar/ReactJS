import PropTypes from 'prop-types';
import { useState } from 'react';

const PLACEHOLDER_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23374151'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%239ca3af' font-size='16' font-family='sans-serif'%3EImage not available%3C/text%3E%3C/svg%3E`;

export default function ImageCard({ image, onImageClick }) {
  const [imgError, setImgError] = useState(false);

  if (!image) return null;

  const handleError = () => setImgError(true);

  return (
    <div 
      onClick={() => onImageClick(image)}
      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl shadow-blue-900/30 transition-all duration-300 cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50"
    >
      <img 
        src={imgError ? PLACEHOLDER_SVG : (image.download_url || PLACEHOLDER_SVG)}
        alt={image.author || 'Gallery image'} 
        loading="lazy"
        onError={handleError}
        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white font-semibold text-lg drop-shadow-md">{image.author || 'Unknown Author'}</p>
          <p className="text-blue-200 text-sm mt-1">ID: {image.id || '-'}</p>
        </div>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    download_url: PropTypes.string,
    author: PropTypes.string,
  }),
  onImageClick: PropTypes.func.isRequired,
};
