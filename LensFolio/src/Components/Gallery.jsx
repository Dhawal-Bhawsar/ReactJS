import ImageCard from './ImageCard';

export default function Gallery({ images, onImageClick }) {
  if (images.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-800 rounded-2xl border border-gray-700 shadow-sm">
        <p className="text-xl text-gray-400">No images matched your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} onImageClick={onImageClick} />
      ))}
    </div>
  );
}

